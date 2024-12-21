const Shop = require('../models/Shop');


exports.getAll = async (req, res) => {
    try {
        const shops = await Shop.findAll();
        res.json(shops);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch shops.'});
    }
}

exports.post = async (req, res) => {
    const {name, description, address, avis, note, articles, owner} = req.body;
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
        res.status(400).json({error: 'Failed to create shop.'});
    }
}

exports.patch = async (req, res) => {
    const {id} = req.params;
    const {name, description, address, avis, note, articles} = req.body;

    try {
        const shop = await Shop.findByPk(id);

        if (!shop) {
            return res.status(404).json({error: 'Shop not found'});
        }

        // Vérification pour assurer que seul le propriétaire peut modifier son magasin
        if (shop.owner !== req.user.id) {
            return res.status(403).json({error: 'Unauthorized'});
        }

        await shop.update({name, description, address, avis, note, articles});
        res.json(shop);
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'Failed to update shop. Check your input.'});
    }
}

exports.delete = async (req, res) => {
    const {id} = req.params;

    try {
        const shop = await Shop.findByPk(id);

        if (!shop) {
            return res.status(404).json({error: 'Shop not found'});
        }

        // Vérifier si l'utilisateur est le propriétaire du magasin
        if (shop.owner !== req.user.id) {
            return res.status(403).json({error: 'Unauthorized'});
        }

        await shop.destroy();
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to delete shop.'});
    }

}

exports.get = async (req, res) => {
    const {id} = req.params;

    try {
        const shop = await Shop.findByPk(id);
        if (!shop) {
            return res.status(404).json({error: 'Shop not found'});
        }
        res.json(shop);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch shop.'});
    }
}
