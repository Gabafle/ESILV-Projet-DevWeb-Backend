const express = require('express');
const checkAuth = require('../middlewares/checkAuth');
const { Article } = require('../models');
const router = express.Router();

// GET /articles
router.get('/', async (req, res) => {
  const articles = await Article.findAll();
  res.json(articles);
});

// POST /articles (authentification requise)
router.post('/', checkAuth, async (req, res) => {
  const { title, content, authorId } = req.body;
  const article = await Article.create({ title, content, authorId });
  res.status(201).json(article);
});

module.exports = router;
