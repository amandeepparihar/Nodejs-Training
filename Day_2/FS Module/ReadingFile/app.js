// ****************************not used mostly*******************************

// import fs from "fs"

// readFileSync does not take callback
// const contentBuffer = fs.readFileSync("./index.html")
// const content = contentBuffer.toString(); // this is needed because in the options I am not passint utf-8 as char encoding once I passed it no need of toString() as, It already become the string

// readFileSync runs synchronously it means it blocks the main thread while operation that why we don't need it
// const content = fs.readFileSync("./textfile.txt", 'utf-8');

// console.log(contentBuffer)
// console.log(content)

// readFile take the callback
// fs.readFile("./textfile.txt", (err, data) => {
// console.log(data);
// const content = data.toString();
// console.log(content);
// })

// ****************************not used mostly*******************************

import fs from "fs/promises";

const a = await fs.readFile("./textfile.txt", 'utf-8');
console.log(a)