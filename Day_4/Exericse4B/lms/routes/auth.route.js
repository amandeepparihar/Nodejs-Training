var express = require("express");
var authController = require("../controllers/authController");
var router = express.Router();
var passport = require("../config/passport");

router.get("/login.html", authController.loginPage);
router.post("/login", authController.login);

//OAuth
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login.html?error=1",
  }),
  function (req, res) {
    req.session.userId = req.user.id;
    req.session.name = req.user.name;
    res.redirect("/book-list.html");
  },
);

module.exports = router;
