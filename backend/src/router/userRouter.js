/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

const { getOne, createOne, getAll } = require("../controller/userController");
// http://localhost:4000/api/users/
router.get("/", getAll);

// http://localhost:4000/api/users/1
router.get("/:id", getOne);
// post http://localhost:4000/api/users/
router.post("/", createOne);

module.exports = router;