const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const User = require("../models/user.model");

const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie");
const {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendResetPasswordEmail,
  sendResetSuccessEmail,
} = require("../mail/emails");

const chekAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ state: "warning", message: "User not found", user: null });
    }
    res.status(200).json({ state: "success", message: "", user });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res
      .status(400)
      .json({ state: "danger", message: error.message, user: null });
  }
};

const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    if ((!username, !email, !password, !confirmPassword)) {
      return res.status(400).json({
        state: "warning",
        message: "All fields are required",
        user: null,
      });
    }
    const userNameExists = await User.findOne({ username });
    if (!userNameExists) {
      const emailExists = await User.findOne({ email });
      if (!emailExists) {
        if (password === confirmPassword) {
          const hashedPassword = await bcrypt.hash(password, 10);
          const verificationToken = Math.floor(
            100000 + Math.random() * 900000
          ).toString();
          const user = new User({
            username,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
          });
          await user.save();

          // jwt
          generateTokenAndSetCookie(res, user._id);

          await sendVerificationEmail(user.email, verificationToken);

          return res.status(201).json({
            state: "success",
            message: "User created successfuly",
            user: { ...user._doc, password: null },
          });
        }
        return res.status(400).json({
          state: "warning",
          message: "Passwords do not match",
          user: null,
        });
      }
      return res.status(400).json({
        state: "warning",
        message: "Invalid Email Address",
        user: null,
      });
    }
    return res
      .status(400)
      .json({ state: "warning", message: "Username is taken", user: null });
  } catch (err) {
    return res
      .status(500)
      .json({ state: "danger", message: err.message, user: null });
  }
};

const verfyEmail = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        state: "warning",
        message: "Invalid or expired verification code ",
        user: null,
      });
    }
    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpiresAt = null;
    await user.save();
    await sendWelcomeEmail(user.email, user.username);

    return res.status(201).json({
      state: "success",
      message: "Email verified successfully",
      user: { ...user._doc, password: null },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ state: "danger", message: error.message, user: null });
  }
};

const resentVerfyEmailCode = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        state: "warning",
        message: "User not found",
        user: null,
      });
    }
    if (user.isVerified) {
      return res.status(400).json({
        state: "warning",
        message: "Email is already verified",
        user: null,
      });
    }
    // Generate new verification token
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Update user with new token and expiration
    user.verificationToken = verificationToken;
    user.verificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    await user.save();

    // Send new verification email
    await sendVerificationEmail(user.email, verificationToken);
    return res.status(200).json({
      state: "success",
      message: "Verification code resent successfully",
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    return res.status(500).json({
      state: "danger",
      message: error.message,
      user: null,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        state: "warning",
        message: "Invalid email or password",
        user: null,
      });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    return res.status(200).json({
      state: "success",
      message: "Logged in successfully",
      user: { ...user._doc, password: null },
    });
  } catch (error) {
    console.log("login ~ error:", error.message);
    return res
      .status(500)
      .json({ state: "danger", message: error.message, user: null });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  return res
    .status(200)
    .json({ state: "success", message: "Logged out successfuly", user: null });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        state: "warning",
        message: "Invalid email address",
        user: null,
      });
    }
    // generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hours

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;

    await user.save();

    // send email
    await sendResetPasswordEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password/${resetToken}`
    );
    return res.status(200).json({
      state: "success",
      message: "Reset password link sent to your email",
      user: null,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ state: "danger", message: error.message, user: null });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        state: "warning",
        message: "Invalid or expired reset token",
      });
    }

    // hash && update Password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();

    await sendResetSuccessEmail(user.email);
    return res.status(201).json({
      state: "success",
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log("resetPassword ~ error:", error);
    return res.status(500).json({ state: "danger", message: error.message });
  }
};

module.exports = {
  chekAuth,
  register,
  verfyEmail,
  resentVerfyEmailCode,
  login,
  logout,
  forgotPassword,
  resetPassword,
};
