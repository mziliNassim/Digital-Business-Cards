const {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} = require("./emailTemplates");

const { transporter, sender } = require("./mail.config");

const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const mailOptions = {
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "verificationCode",
        verificationToken
      ),
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

const sendWelcomeEmail = async (email, username) => {
  try {
    // Replace template variables
    const htmlContent = WELCOME_EMAIL_TEMPLATE.replace(
      /{{name}}/g,
      username
    ).replace(/{{company_name}}/g, "Digital Business Cards");

    const mailOptions = {
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Welcome to Digital Business Cards!",
      html: htmlContent,
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("Welcome email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};

const sendResetPasswordEmail = async (email, resetURL) => {
  try {
    const mailOptions = {
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("Password reset email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error(`Error sending password reset email: ${error.message}`);
  }
};

const sendResetSuccessEmail = async (email) => {
  try {
    const mailOptions = {
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("sendResetSuccessEmail ~ response:", response);
  } catch (error) {
    console.log("sendResetSuccessEmail ~ error:", error.message);
    throw new Error(`Error sending Reset Success Email: ${error.message}`);
  }
};

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendResetPasswordEmail,
  sendResetSuccessEmail,
};
