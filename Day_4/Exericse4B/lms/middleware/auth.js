function requireLogin(req, res, next) {
  if (!req.session.userId) {
    return res.redirect("/login.html");
  }

  res.set("Cache-Control", "no-store");
  next();
}

module.exports = requireLogin;
