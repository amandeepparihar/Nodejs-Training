import fs from "fs";

const writeStream = fs.createWriteStream("output.webm", {
  highWaterMark: 1 * 1024 * 1024,
}); //1mb

//bydefault highWaterMark is 16kb, we can change it by passing options in createWriteStream

// writeStream.write("abc");
// writeStream.write("123");
// writeStream.write("ABC");

//If we use

/*
const readStream = fs.createReadStream("videoplayback.webm");

// WRONG WAY — this eats memory.
// write() returns false when the writable's buffer is full, but we ignore it and
// keep pushing chunks. The reader never slows down, so data piles up in the
// writable's internal buffer and memory grows.
console.time();
readStream.on("data", (chunk) => {
  //Time:
  //Memory
  //CPU
  writeStream.write(chunk);
});

readStream.on("end", () => {
  console.timeEnd();
});

*/

const readStream = fs.createReadStream("videoplayback.webm");

// RIGHT WAY — this applies backpressure. When write() returns false, we pause the
readStream.on("data", (chunk) => {
  const isEmpty = writeStream.write(chunk);
  if (!isEmpty) {
    readStream.pause();
  }
});

writeStream.on("drain", () => {
  readStream.resume();
});
