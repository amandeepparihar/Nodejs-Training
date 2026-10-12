import { Transform, pipeline } from "stream";
import fs from "fs";

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    try {
      const transformedData = chunk.toString().toUpperCase();
      callback(null, transformedData);
    } catch (error) {
      callback(error);
    }
  },
});

pipeline(
  fs.createReadStream("employees.csv"),
  upperCaseTransform,
  fs.createWriteStream("output.txt"),
  (err) => {
    if (err) console.err("Pipeline failed : ", err);
    else console.log("Pipeline succeded!");
  },
);
