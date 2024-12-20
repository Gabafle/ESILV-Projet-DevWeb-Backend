const express = require('express');
const checkAuth = require('../middlewares/checkAuth');
const Shop = require('../models/shop'); // Modèle Shop

const router = express.Router();

// Récupérer tous les magasins
router.get('/', async (req, res) => {
    try {
        const shops = await Shop.findAll();
        res.json(shops);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch shops.' });
    }
});

// Récupérer un magasin par son ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const shop = await Shop.findByPk(id);
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }
        res.json(shop);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch shop.' });
    }
});

// Créer un nouveau magasin
router.post('/', checkAuth, async (req, res) => {
    const { name, description, address, avis, note, articles, owner } = req.body;

    try {
        // Créer un magasin avec les informations envoyées
        const shop = await Shop.create({
            name,
            description,
            address,
            avis,
            note,
            articles,
            owner
        });
        res.status(201).json(shop);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create shop.' });
    }
});

// Mettre à jour un magasin
router.patch('/:id', checkAuth, async (req, res) => {
    const { id } = req.params;
    const { name, description, address, avis, note, articles } = req.body;

    try {
        const shop = await Shop.findByPk(id);

        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }

        // Vérification pour assurer que seul le propriétaire peut modifier son magasin
        if (shop.owner !== req.user.id) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        await shop.update({ name, description, address, avis, note, articles });
        res.json(shop);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to update shop. Check your input.' });
    }
});

// Supprimer un magasin
router.delete('/:id', checkAuth, async (req, res) => {
    const { id } = req.params;

    try {
        const shop = await Shop.findByPk(id);

        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }

        // Vérifier si l'utilisateur est le propriétaire du magasin
        if (shop.owner !== req.user.id) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        await shop.destroy();
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete shop.' });
    }
});

module.exports = router;