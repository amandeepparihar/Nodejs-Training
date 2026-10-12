import fs from "fs";

const readStream = fs.createReadStream("videoplayback.webm", {
  highWaterMark: 100 * 1024 * 1024,
});
//by default it will read the data in chunks of 64kb, you can change the size of the chunk by passing the option {highWaterMark: size} to the createReadStream method. The size is in bytes.
//100 * 1024 * 1024 = 100mb

// events for readable streams
readStream.on("data", (chunk) => {
  console.log(chunk);
  console.log(chunk.byteLength);
});

readStream.on("end", (chunk) => {
  console.log("No more data to read");
});

readStream.on("error", (err) => {
  console.log(err);
});

