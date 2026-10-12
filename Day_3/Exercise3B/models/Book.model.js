let books = [
  { BookId: 1, BookName: "Book1", Author: "Author1", Price: 450, Pages: 464 },
  { BookId: 2, BookName: "Book2", Author: "Author2", Price: 520, Pages: 352 },
  { BookId: 3, BookName: "Book3", Author: "Author3", Price: 380, Pages: 278 },
  { BookId: 4, BookName: "Book4", Author: "Author4", Price: 410, Pages: 472 },
  { BookId: 5, BookName: "Book5", Author: "Author5", Price: 600, Pages: 395 },
];

//get all books
export const getAll = () => books;

//get book by id
export const getById = (id) => books.find((book) => book.BookId === id);

//create book
export const create = (data) => {
  const newBook = {
    BookId: books.length ? Math.max(...books.map((b) => b.BookId)) + 1 : 1,
    BookName: data.BookName,
    Author: data.Author,
    Price: data.Price,
    Pages: data.Pages,
  };
  books.push(newBook);
  return newBook;
};

//update book
export const update = (id, data) => {
  const book = getById(id);
  if (!book) return null;

  book.BookName = data.BookName;
  book.Author = data.Author;
  book.Price = data.Price;
  book.Pages = data.Pages;
  return book;
};

//delete book
export const del = (id) => {
  const index = books.findIndex((book) => book.BookId === id);
  if (index === -1) return false;

  books.splice(index, 1);
  return true;
};
