const {Router} = require("express");
const OrderController = require("../controllers/orders");
const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");

const router = new Router();

router.get("/", OrderController.cget);
router.get("/:id", OrderController.get);
router.post("/", checkAuth, checkAdmin, OrderController.post);
router.patch("/:id", checkAuth, checkAdmin, OrderController.patch);
router.delete("/:id", checkAuth, checkAdmin, OrderController.delete);

module.exports = router;