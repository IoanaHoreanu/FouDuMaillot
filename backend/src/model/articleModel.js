/* eslint-disable no-undef */
const db = require("./db");

// async function findAll() {
const findAll = async () => {
  try {
    const [articles] = await db.query("select * from Articles");
    return articles;
  } catch (error) {
    console.error(error);
  }
};

const findOne = async (id) => {
  try {
    const [article] = await db.query("select * from `Articles` where id = ?", [id]);
    return article;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { findAll, findOne };