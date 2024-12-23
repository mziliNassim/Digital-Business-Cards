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
  const host_URL = "http://localhost:3001/api/auth";
  res.json({
    "check-auth": host_URL + "/check-auth",
    register: host_URL + "/register",
    login: host_URL + "/login",
    logout: host_URL + "/logout",
    "verify-email": host_URL + "/verify-email",
    "forgot-password": host_URL + "/forgot-password",
    "reset-password/:token": host_URL + "/reset-password/:token",
  });
});

const auth = require("./routes/auth.route.js");
app.use("/api/auth", auth);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  connectDB();
  console.log(`server run on http://localhost:${port}`);
});
