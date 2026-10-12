import fs from "fs";

const writeStream = fs.createWriteStream("file.txt", {
  highWaterMark: 4,
});

console.log(writeStream.writableLength); //0
let isEmpty = writeStream.write("a");
console.log(isEmpty); //true

console.log(writeStream.writableLength); //1
isEmpty = writeStream.write("a");
console.log(isEmpty); //true

console.log(writeStream.writableLength); //2
isEmpty = writeStream.write("a");
console.log(isEmpty); //true

console.log(writeStream.writableLength); //3
isEmpty = writeStream.write("a");
console.log(isEmpty); //false

console.log(writeStream.writableLength); //4
isEmpty = writeStream.write("a");
console.log(isEmpty); //false

// in the above example, when the writeStream.write give false it means it applying backpressure and in this case
// we should stop writing to the stream and wait for the drain else memory will keep piling up.

// only fires if write() previously returned false
writeStream.on("drain", () => {
  console.log("drain", writeStream.writableLength);
});

writeStream.end(); // write stream not closed automatically like read stream, we have to close it manually by calling end() method.
