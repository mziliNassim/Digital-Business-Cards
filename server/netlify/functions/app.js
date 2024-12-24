const express = require("express");
const serverless = require("serverless-http");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("../../db/connectDB.js");
const { config } = require("dotenv");

const app = express();
app.use(express.json());
app.use(cookieParser());
config();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// DB Connection
connectDB();

// index endpoint
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "this is an api for **Digital Business Cards**" });
});

// Routes
// /endpoints
const endpoints = require("../../routes/auth.endpoints.js");
app.use("/endpoints", endpoints);

// /api
const auth = require("../../routes/auth.route.js");
app.use("/api/auth", auth); // Authentification Route

// Not Found Endpoint
app.get("*", (req, res) => {
  res.status(404).json({ message: "Endpoint Not Found" });
});

// server listen
module.exports.handler = serverless(app);
