import { Sequelize } from "@sequelize/core";
// props order to Sequelize ('database', 'username', 'password')
const Mysql = new Sequelize("test", "root", "", {
  host: "localhost",
  // one of our supported dialects:
  // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
  dialect: "mysql",
});

// Mysql.query(`CREATE DATABASE IF NOT EXISTS international`);

export { Mysql };
