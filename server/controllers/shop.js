const Shop = require("../models/shop"); // Importez le modèle Shop

exports.getAll = async (req, resp, next) => {
    try {
        // Récupère tous les magasins
        resp.json(await Shop.findAll());
    } catch (error) {
        next(error);
    }
};

exports.post = async (req, res, next) => {
    try {
        // Crée un nouveau magasin avec les données envoyées dans le corps de la requête
        res.status(201).json(await Shop.create(req.body));
    } catch (error) {
        next(error);
    }
};

exports.patch = async (req, res, next) => {
    try {
        const [nbUpdate] = await Shop.update(req.body, {
            where: {
                id: parseInt(req.params.id),
            },
            individualHooks: true,
        });

        if (nbUpdate === 0) {
            return res.sendStatus(404);
        } else {
            // Renvoie les informations du magasin après mise à jour
            res.json(await Shop.findByPk(parseInt(req.params.id)));
        }
    } catch (error) {
        next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const nbDeleted = await Shop.destroy({
            where: {
                id: parseInt(req.params.id),
            },
        });

        // Renvoie un code 204 (No Content) si un magasin est supprimé, sinon 404
        res.sendStatus(nbDeleted ? 204 : 404);
    } catch (error) {
        next(error);
    }
};

exports.get = async (req, res, next) => {
    try {
        // Récupère un magasin par son ID
        const shop = await Shop.findByPk(parseInt(req.params.id));

        // Renvoie le magasin si trouvé, sinon 404
        res.status(shop ? 200 : 404).json(shop);
    } catch (error) {
        next(error);
    }
};
