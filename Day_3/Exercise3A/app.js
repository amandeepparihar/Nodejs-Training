import fs from "fs";
import http from "http";
import { Transform } from "stream";
import { pipeline } from "stream/promises";
import { parse } from "csv-parse";
import { stringify } from "csv-stringify";

const PORT = process.env.PORT || 5500;

function salaryMoreThan10000() {
  return new Transform({
    objectMode: true,

    transform(employee, encoding, callback) {
      const salary = Number(employee.SALARY);

      if (salary > 10000) {
        // console.log(`${employee.FIRST_NAME} : ${salary}`);
        callback(null, employee);
      } else {
        // console.log(`${employee.FIRST_NAME}: ${salary}`);
        callback();
      }
    },
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/plain");

  try {
    await pipeline(
      fs.createReadStream("employees.csv", { encoding: "utf-8" }),
      parse({ columns: true, skip_empty_lines: true, trim: true }),
      salaryMoreThan10000(),
      stringify({ header: true }),
      res,
    );
  } catch (err) {
    console.error("Pipeline failed", err);
    res.destroy();
  }
});

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
