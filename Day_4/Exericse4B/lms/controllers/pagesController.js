var path = require('path');

//home page
exports.home = function (req, res) {
  res.redirect('/book-list.html');
};

//get a page
exports.sendPage = function (page) {
  return function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'html', page));
  };
};