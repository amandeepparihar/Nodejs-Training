import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// let sql = "SELECT * FROM posts;";

// pool.execute(sql, function (err, result) {
//     if(err) throw err;
//     console.log(result)
// });

export default pool.promise();
