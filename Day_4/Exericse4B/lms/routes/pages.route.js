var express = require("express");
var requireLogin = require("../middleware/auth");
var pagesController = require("../controllers/pagesController");
var router = express.Router();

var pages = [
  "book-list.html",
  "add-book.html",
  "edit-book.html",
  "student-list.html",
  "add-student.html",
  "issue-list.html",
  "issue-book.html",
];

router.get("/", requireLogin, pagesController.home);

pages.forEach(function (page) {
  router.get("/" + page, requireLogin, pagesController.sendPage(page));
});

module.exports = router;
