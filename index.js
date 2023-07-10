const mysql = require("mysql");
const Promise = require("bluebird");

const mysqlPool = Promise.promisifyAll(
  mysql.createPool({
    host: process.env["MYSQL_HOST_AIGC"],
    port: process.env["MYSQL_PORT_AIGC"],
    user: process.env["MYSQL_ADMIN_USER_AIGC"],
    password: process.env["MYSQL_ADMIN_PASSWORD_AIGC"],
    database: "GeekPark",
    connectionLimit: 10,
    debug: true // 启用调试
  })
);

mysqlPool
  .queryAsync("SELECT 1 + 1 AS solution")
  .then((rows) => {
    console.log("The solution is", rows[0].solution);
  })
  .catch((err) => {
    console.error(err);
  });


  module.exports = mysqlPool

