/* eslint-disable no-undef */
const express = require("express");

const { login } = require("../controller/authController");

const router = express.Router();
// http://localhost:4000/api/auth/login
router.get("/login", login);

module.exports = router;