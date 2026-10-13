import Book from "../models/Book.model.js";

//get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json({
      success: true,
      message: "All books fetching successfully",
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching all books",
    });
  }
};

//get book by id
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: `Not book found with id : ${id}`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Book fetched with id : ${id}`,
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong while fetching book by id : ${id}`,
    });
  }
};

//create book
export const createBook = async (req, res) => {
  try {
    const { bookName, author, price, pages } = req.body;
    if (!bookName || !author || !price || !pages) {
      return res.status(400).json({
        error: "All Fields are required!!!",
      });
    }

    const newBook = await Book.create({
      bookName,
      author,
      price,
      pages,
    });

    return res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
      message: "Something went wrong while creating book",
    });
  }
};

//update book
export const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    if (!bookId) {
      return res.status(404).json({
        success: false,
        message: `Book not found with id : ${bookId}`,
      });
    }
    const [updatedBook] = await Book.update(req.body, { where: { bookId } });

    if (updatedBook === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({
      success: true,
      message: `Book with id : ${bookId} updated successfully`,
      data: updatedBook,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
      message: "Something went wrong while updating book",
    });
  }
};

//delete a book
export const deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const deletedBook = await Book.destroy({
      where: { bookId: bookId },
    });
    if (deletedBook === 0) {
      return res.status(404).json({
        success: false,
        message: `Book with id : ${bookId} Not found`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Book with id : ${bookId} deleted Successfully`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
      message: `Something went wrong while deleting the book`,
    });
  }
};
