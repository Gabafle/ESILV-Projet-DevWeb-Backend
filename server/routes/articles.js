const {Router} = require("express");
const ArticleController = require("../controllers/articles");
const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");

const router = new Router();

router.get("/", ArticleController.cget);
router.get("/:id", ArticleController.get);
router.post("/", checkAuth, checkAdmin, ArticleController.post);
router.patch("/:id", checkAuth, checkAdmin, ArticleController.patch);
router.delete("/:id", checkAuth, checkAdmin, ArticleController.delete);

module.exports = router;
