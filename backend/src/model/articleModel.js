/* eslint-disable no-undef */
const db = require("./db");

const findAll = async () => {
  try {
    const [articles] = await db.query("SELECT * FROM Articles");
    return articles;
  } catch (error) {
    console.error(error);
  }
};

const findOne = async (id) => {
  try {
    const [article] = await db.query("SELECT * FROM `Articles` WHERE id = ?", [id]);
    return article;
  } catch (error) {
    console.error(error);
  }
};

const createArticle = async (titre, contenu, prix) => {
  try {
    const result = await db.query("INSERT INTO Articles (titre, contenu, prix) VALUES (?, ?, ?)", [titre, contenu, prix]);
    return result;
  } catch (error) {
    console.error(error);
  }
};

const updateArticle = async (id, titre, contenu, prix) => {
  try {
    const result = await db.query("UPDATE Articles SET titre = ?, contenu = ?, prix = ? WHERE id = ?", [titre, contenu, prix, id]);
    return result;
  } catch (error) {
    console.error(error);
  }
};

const deleteArticle = async (id) => {
  try {
    const result = await db.query("DELETE FROM Articles WHERE id = ?", [id]);
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { findAll, findOne, createArticle, updateArticle, deleteArticle };
