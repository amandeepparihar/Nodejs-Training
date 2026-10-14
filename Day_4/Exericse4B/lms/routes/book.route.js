var express = require("express");
var requireLogin = require("../middleware/auth");
var bookController = require("../controllers/bookController");
var router = express.Router();

router.get("/", requireLogin, bookController.getBooks);
router.get("/:id", requireLogin, bookController.getBookById);
router.post("/", requireLogin, bookController.createBook);
router.put("/:id", requireLogin, bookController.updateBook);
router.delete("/:id", requireLogin, bookController.deleteBook);

module.exports = router;
