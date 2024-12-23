const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const cookieOptions = {
    httpOnly: true, // xss attack
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // csrf attack
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };
  res.cookie("token", token, cookieOptions);

  return token;
};

module.exports = generateTokenAndSetCookie;
