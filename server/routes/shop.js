const express = require('express');
const checkAuth = require('../middlewares/checkAuth');
const shopController = require("../controllers/shop");
const checkAdmin = require('../middlewares/checkAdmin');

const router = express.Router();

router.get('/', shopController.getAll);
router.get('/:id', shopController.get);
router.post('/', checkAuth, checkAdmin, shopController.post);
router.patch('/:id', checkAuth, checkAdmin, shopController.patch);
router.delete('/:id', checkAuth, checkAdmin, shopController.delete);

module.exports = router;