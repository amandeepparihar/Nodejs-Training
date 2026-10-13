var express = require("express");
var authController = require("../controllers/authController");
var router = express.Router();

router.get("/login.html", authController.loginPage);
router.post("/login", authController.login);

module.exports = router;
