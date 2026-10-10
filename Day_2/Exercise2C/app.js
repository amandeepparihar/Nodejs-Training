import http from "http";

//list of books
const books = [
  {
    BookId: 1,
    BookName: "test1",
    Author: "book1Author",
    Price: 450,
    Pages: 464,
  },
  {
    BookId: 2,
    BookName: "test2",
    Author: "book2Author",
    Price: 520,
    Pages: 352,
  },
  {
    BookId: 3,
    BookName: "test3",
    Author: "book3Author",
    Price: 380,
    Pages: 278,
  },
  {
    BookId: 4,
    BookName: "test4",
    Author: "book4Author",
    Price: 410,
    Pages: 472,
  },
  {
    BookId: 5,
    BookName: "test5",
    Author: "book5Author",
    Price: 600,
    Pages: 395,
  },
];

//server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(books));
});

server.listen(5500, () => {
  console.log("Server running at 5500");
});
