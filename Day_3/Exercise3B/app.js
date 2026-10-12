import express from "express";
import bookRoutes from "./routes/book.route.js";

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
