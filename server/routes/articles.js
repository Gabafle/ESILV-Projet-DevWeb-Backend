const express = require('express');
const checkAuth = require('../middlewares/checkAuth');
const Article = require('../models/articles');

const router = express.Router();

//Récupérer tous les articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch articles.' });
  }
});

//Récupérer un article
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch article.' });
  }
});

//Nouveau Articles
router.post('/', checkAuth, async (req, res) => {
  const { title, content, price, quantity } = req.body;
  const authorId = req.user.id; // Récupéré du token JWT

  try {
    const article = await Article.create({ title, content, price, quantity, authorId });
    res.status(201).json(article);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to create article.' });
  }
});

//MAJ Article
router.patch('/:id', checkAuth, async (req, res) => {
  const { id } = req.params;
  const { title, content, price, quantity } = req.body;

  try {
    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Vérifier si l'utilisateur est l'auteur
    if (article.authorId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await article.update({ title, content, price, quantity });
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to update article. Check your input.' });
  }
});

router.delete('/:id', checkAuth, async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Vérifier si l'utilisateur est l'auteur
    if (article.authorId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await article.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete article.' });
  }
});

module.exports = router;