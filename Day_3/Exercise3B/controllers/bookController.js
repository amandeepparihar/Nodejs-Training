import * as bookModel from "../models/Book.model.js";

//get all books
export const getAllBooks = (req, res) => {
  res.status(200).json(bookModel.getAll());
};

//get book by id
export const getBookById = (req, res) => {
  const id = Number(req.params.id);
  const book = bookModel.getById(id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(book);
};

//create book
export const createBook = (req, res) => {
  const { BookName, Author, Price, Pages } = req.body;

  if (!BookName || !Author || !Price || !Pages) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newBook = bookModel.create({ BookName, Author, Price, Pages });
  res.status(201).json(newBook);
};

//update book
export const updateBook = (req, res) => {
  const id = Number(req.params.id);
  const updated = bookModel.update(id, req.body);

  if (!updated) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json(updated);
};

//delete a book
export const deleteBook = (req, res) => {
  const id = Number(req.params.id);
  const deleted = bookModel.del(id);

  if (!deleted) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json({ message: "Book Deleted!!!" });
};
