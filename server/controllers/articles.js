const Article = require("../models/articles");

exports.cget = async (req, res, next) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch articles." });
  }
};

exports.get = async (req, res, next) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch article." });
  }
};

exports.post = async (req, res, next) => {
  const { title, content, price, quantity } = req.body;
  const authorId = req.user.id; // Récupéré du token JWT
  try {
    const article = await Article.create({ title, content, price, quantity, authorId });
    res.status(201).json(article);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create article." });
  }
};

exports.patch = async (req, res, next) => {
  const { title, content, price, quantity } = req.body;
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    if (article.authorId !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    await article.update({ title, content, price, quantity });
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to update article. Check your input." });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    if (article.authorId !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    await article.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete article." });
  }
};
