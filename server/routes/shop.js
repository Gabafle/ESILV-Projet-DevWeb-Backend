const express = require('express');
const checkAuth = require('../middlewares/checkAuth');
const shopController = require("../controllers/shop");

const router = express.Router();

router.get('/', shopController.getAll);

router.get('/:id', shopController.get);

router.post('/', checkAuth, shopController.post);

router.patch('/:id', checkAuth, shopController.patch);

router.delete('/:id', checkAuth, shopController.delete);

module.exports = router;