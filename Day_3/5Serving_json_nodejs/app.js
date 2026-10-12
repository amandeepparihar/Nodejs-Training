import http from "http";
import fs from "fs/promises";
import path from "path";

const PORT = process.env.PORT || 5500;

const filePath = path.join(import.meta.dirname, "user.json");

const fileContent = await fs.readFile(filePath, "utf-8");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(fileContent);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
