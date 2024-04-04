/* eslint-disable no-undef */
const { findAll, findOne, createArticle, updateArticle, deleteArticle } = require("../model/articleModel");

const getAll = async (req, res) => {
  try {
    const articles = await findAll();
    res.json(articles);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const articleId = parseInt(req.params.id);
  console.log(articleId);
  console.log("req.params", req.params);
  console.log("req.query", req.query);
  try {
    if (isNaN(articleId)) {
      throw new Error();
    }
    const [article] = await findOne(articleId);
    res.json(article);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const create = async (req, res) => {
  const { titre, contenu, prix } = req.body;
  try {
    const result = await createArticle(titre, contenu, prix);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const update = async (req, res) => {
  const articleId = parseInt(req.params.id);
  const { titre, contenu, prix } = req.body;
  try {
    const result = await updateArticle(articleId, titre, contenu, prix);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const remove = async (req, res) => {
  const articleId = parseInt(req.params.id);
  try {
    const result = await deleteArticle(articleId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getAll, getOne, create, update, remove };