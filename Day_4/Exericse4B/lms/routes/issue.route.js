var express = require("express");
var requireLogin = require("../middleware/auth");
var issueController = require("../controllers/issueController");
var router = express.Router();

router.get("/", requireLogin, issueController.getIssues);
router.get("/:id", requireLogin, issueController.getIssueById);
router.post("/", requireLogin, issueController.createIssue);
router.put("/:id/return", requireLogin, issueController.returnIssue);
router.delete("/:id", requireLogin, issueController.deleteIssue);

module.exports = router;
