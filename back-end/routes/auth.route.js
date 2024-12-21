const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  verfyEmail,
  forgotPassword,
  resetPassword,
  chekAuth,
} = require("../controllers/auth.controller");

const verifyToken = require("../middleware/verifyToken");

router.get("/check-auth", verifyToken, chekAuth);

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verfyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
