// routes/shop.js
const { Router } = require("express");
const ShopController = require("../controllers/shop");
const checkAuth = require("../middlewares/checkAuth");

const router = new Router();

router.get("/shops", checkAuth, ShopController.getAll);
router.post("/shops", ShopController.post);

router.get("/shops/:id", ShopController.get);
router.patch("/shops/:id", ShopController.patch);
router.delete("/shops/:id", checkAuth, ShopController.delete);

module.exports = router;

