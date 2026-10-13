var path = require("path");
var bcrypt = require("bcrypt");
var User = require("../models/user.model");

//login page
exports.loginPage = function (req, res) {
  res.sendFile(path.join(__dirname, "..", "html", "login.html"));
};

//login
exports.login = async function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  try {
    var user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.redirect("/login.html?error=1");
    }

    var match = await bcrypt.compare(password, user.password);

    // console.log("Password match:", match);

    if (!match) {
      return res.redirect("/login.html?error=1");
    }

    req.session.userId = user.id;
    req.session.name = user.name;
    // console.log('LOGIN  ->', req.sessionID, req.session.userId);
    res.redirect("/book-list.html");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Something went wrong");
  }
};
