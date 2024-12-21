const { Router } = require("express");
const UserController = require("../controllers/users");
const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");
const checkOwnershipOrAdmin = require("../middlewares/checkOwnershipOrAdmin");

const router = new Router();

router.get("/users", checkAuth, checkAdmin, UserController.cget);
router.post("/users", UserController.post);

router.get("/users/:id", checkAuth, checkOwnershipOrAdmin, UserController.get);
router.patch("/users/:id", checkAuth, checkOwnershipOrAdmin, UserController.patch);
router.delete("/users/:id", checkAuth, checkOwnershipOrAdmin, UserController.delete);

module.exports = router;
