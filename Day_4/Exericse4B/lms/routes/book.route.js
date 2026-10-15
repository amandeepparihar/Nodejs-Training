var express = require("express");
var requireLogin = require("../middleware/auth");
var bookController = require("../controllers/bookController");
const upload = require("../middleware/upload");
var router = express.Router();

router.get("/", requireLogin, bookController.getBooks);
router.get("/:id", requireLogin, bookController.getBookById);
router.post(
  "/",
  requireLogin,
  upload.single("bookCover"),
  bookController.createBook,
);

router.put(
  "/:id",
  requireLogin,
  upload.single("bookCover"),
  bookController.updateBook,
);

router.delete("/:id", requireLogin, bookController.deleteBook);

module.exports = router;
