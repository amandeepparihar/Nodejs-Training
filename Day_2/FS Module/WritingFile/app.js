import fs from "fs/promises";

// await fs.writeFile("file-1.txt", "hello world"); // if file existed write in the file if not then create the file with the content written

// try {
//   await fs.appendFile("file-1.txt", "\n deep");
// } catch (error) {
//   console.error("write failed", error);
// }

//this blocks the entire event loop untill the disk write finishes
// import { writeFileSync } from 'node:fs';
// writeFileSync('out.txt', 'hello world', 'utf8');

try {
  await fs.writeFile("file-2.txt", "testing in file2", { flag: "a" });
} catch (error) {
  console.error(error);
}

// Useful flags: 'w' (default, truncate/create), 'a' (append), 'wx' (fail if the file already exists).