
class ShopController {
    static async getAll(req, res) {

        res.send('Récupérer tous les shops');
    }

    static async post(req, res) {
        res.send('Créer un nouveau shop');
    }

    static async get(req, res) {
        res.send(`Récupérer le shop avec l'ID ${req.params.id}`);
    }

    static async patch(req, res) {

        res.send(`Mettre à jour le shop avec l'ID ${req.params.id}`);
    }

    static async delete(req, res) {
        res.send(`Supprimer le shop avec l'ID ${req.params.id}`);
    }
}

module.exports = ShopController;
