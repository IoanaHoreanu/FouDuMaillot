/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

const { getAll, getOne } = require("../controller/articleController");
// http://localhost:4000/api/article/
router.get("/", getAll);
// http://localhost:4000/api/article/1
router.get("/:id", getOne);

module.exports = router;