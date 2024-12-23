const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connectDB");
const { config } = require("dotenv");

const app = express();
app.use(express.json());
app.use(cookieParser());
config();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.get("/", (req, res) => {
  res.json({
    "check-auth": process.env.SERVER_URL + "/api/auth/check-auth",
    register: process.env.SERVER_URL + "/api/auth/register",
    login: process.env.SERVER_URL + "/api/auth/login",
    logout: process.env.SERVER_URL + "/api/auth/logout",
    "verify-email": process.env.SERVER_URL + "/api/auth/verify-email",
    "forgot-password": process.env.SERVER_URL + "/api/auth/forgot-password",
    "reset-password/:token":
      process.env.SERVER_URL + "/api/auth/reset-password/:token",
  });
});

const auth = require("./routes/auth.route.js");
app.use("/api/auth", auth);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  connectDB();
  console.log(`server run on http://localhost:${port}`);
});
