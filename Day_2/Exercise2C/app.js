import http from "http";

const PORT = process.env.PORT || 5500;
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
  if (req.method === "GET" && req.url === "/books") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));
    return;
  }
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Not found!!!" }));
});

server.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
