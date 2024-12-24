const express = require("express");
const router = express.Router();

const endpoints = require("../controllers/endpoints.controller");

router.get("/", endpoints);

module.exports = router;
