var Book = require("../models/book.model");

//getbooks
exports.getBooks = async function (req, res) {
  try {
    var books = await Book.findAll({ order: [["id", "ASC"]] });

    return res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      data: books,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

//getbook by id
exports.getBookById = async function (req, res) {
  try {
    var book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.json({
      success: true,
      message: "Book fetched successfully",
      data: book,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Somthing went wrong" });
  }
};

//create book
exports.createBook = async function (req, res) {
  var bookname = req.body.bookname;
  var author = req.body.author;
  var isbn = req.body.isbn;

  if (!bookname || !author || !isbn) {
    return res.status(400).json({
      message: "All fieldsare required",
    });
  }

  try {
    var exists = await Book.findOne({ where: { isbn: isbn } });

    if (exists) {
      return res
        .status(400)
        .json({ message: "Book with this ISBN already exists" });
    }

    var book = await Book.create({
      bookname: bookname,
      author: author,
      isbn: isbn,
    });

    return res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//update book
exports.updateBook = async function (req, res) {
  var bookname = req.body.bookname;
  var author = req.body.author;
  var isbn = req.body.author;

  if (!bookname || !author || !isbn) {
    return res.status(400).json({
      message: "All fieldsare required",
    });
  }

  try {
    var book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    var exists = await Book.findOne({ where: { isbn: isbn } });

    if (exists && exists.id !== book.id) {
      return res
        .status(400)
        .json({ message: "Book with this ISBN already exists" });
    }

    book.bookname = bookname;
    book.author = author;
    book.isbn = isbn;
    await book.save();

    return res.json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//deletebook
exports.deleteBook = async function (req, res) {
  try {
    var book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.destroy();
    return res.json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
