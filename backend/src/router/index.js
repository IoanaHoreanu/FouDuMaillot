/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

const articleRoutes = require("./articleRouter");
const userRoutes = require("./userRouter");
const authRoutes = require("./authRouter");

router.use("/articles", articleRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;