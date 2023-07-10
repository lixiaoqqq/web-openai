// 引入mysql
const mysql = require("mysql");
// 建立一个连接池
const db = mysql.createPool({
  host: "localhost", // 数据库的IP地址(本地的或者是云服务器的都可以)
  user: "root",
  password: "root",
  database: "geekpark", //指定要操作哪个数据库
});
// 将文件暴露出去
module.exports = db



// const mysql = require("mysql");
// const Promise = require("bluebird");

// const mysqlPool = Promise.promisifyAll(
//   mysql.createPool({
//     host: process.env["MYSQL_PORT_AIGC"],
//     port: process.env["MYSQL_HOST_AIGC"],
//     user: process.env["MYSQL_ADMIN_USER_AIGC"],
//     password: process.env["MYSQL_ADMIN_PASSWORD_AIGC"],
//     database: "test",
//     connectionLimit: 10,
//   })
// );

// mysqlPool
//   .queryAsync("SELECT 1 + 1 AS solution")
//   .then((rows) => {
//     console.log("The solution is", rows[0].solution);
//   })
//   .catch((err) => {
//     console.error(err);
//   });