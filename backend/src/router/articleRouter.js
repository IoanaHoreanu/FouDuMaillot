/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

const { getAll, getOne, create, update, remove } = require("../controller/articleController");
// http://localhost:4000/api/articles/
router.get("/", getAll);
// http://localhost:4000/api/articles/1
router.get("/:id", getOne);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", remove);

module.exports = router;