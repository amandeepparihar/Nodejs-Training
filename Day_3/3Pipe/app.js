import fs from "fs";

const readStream = fs.createReadStream("videoplayback.webm");
const writeStream = fs.createWriteStream("output.webm");

// pipe() automatically handles backpressure: it pauses the readable when the
// writable's internal buffer is full and resumes it once the buffer drains,
// so the file is copied chunk by chunk without loading it all into memory

// readStream.pipe(writeStream);

// using readstream.unpipe() to stop the flow of data from the readable stream to the writable stream

// on pipe() and unpipe() the event 'pipe' and 'unpipe' is fired on the writable stream.

// to handle the error in the pipe we can't do it using try catch for that we have to do that using
// like below

/*
readStream.on("error", (err) => console.error("read failed:", err.message));
writeStream.on("error", (err) => console.error("write failed:", err.message));
writeStream.on("finish", () => console.log("copy complete"));
*/

// but instead of manually handling the error we can use the pipeline() method which is a utility
// function that automatically manages the flow of data between streams and handles errors for us.

pipeline(readStream, writeStream, (error) => {
  console.log("error:", error);
});
