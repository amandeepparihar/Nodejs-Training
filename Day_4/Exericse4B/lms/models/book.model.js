var { DataTypes } = require("sequelize");
var { sequelize } = require("../config/db");

var Book = sequelize.define(
  "Book",
  {
    bookname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  { tableName: "books", timestamps: true },
);

module.exports = Book;
