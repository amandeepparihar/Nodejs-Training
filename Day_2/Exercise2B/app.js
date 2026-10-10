import fs from "fs/promises";

// 2. Read the CSV file which contains the data of employees.
const content = await fs.readFile("employees.csv", "utf-8");
// console.log(content);

// 3. Filter all the records where JOB_ID is IT_PROG.
const eachLine = content.trim().split("\n");
const firstColEachLine = eachLine.slice(1).map((line) => line.split(","));

const ITPROG = firstColEachLine.filter((row) => row.at(-2) === "IT_PROG");
// console.log(ITPROG);

//  4. Write all the filtered data in output.txt file.
const output = ITPROG.map((row) => row.join(",")).join("\n");
await fs.writeFile("output.txt", output, "utf-8");

//  5. Write the async version of the readFileSync to practices its asychronous function.
// done
