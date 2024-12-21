const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      state: "warning",
      message: "Unauthorized - no token provided",
      user: null,
    });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res.status(401).json({
        state: "warning",
        message: "Unauthorized - invalid token",
        user: null,
      });

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in verifyToken ", error);
    return res
      .status(500)
      .json({ state: "danger", message: "Server error", user: null });
  }
};

module.exports = verifyToken;
