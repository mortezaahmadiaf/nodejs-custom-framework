import { Sequelize } from "@sequelize/core";
// props order to Sequelize ('database', 'username', 'password')
const Mysql = new Sequelize(
  process.env.MY_SQL_DATABASE || "express",
  process.env.MY_SQL_USERNAME || "root",
  process.env.MY_SQL_PASSWORD || "",
  {
    host: process.env.MY_SQL_HOST || "localhost",
    // one of our supported dialects:
    // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
    dialect: "mysql",
  }
);

// Mysql.query(`CREATE DATABASE IF NOT EXISTS international`);

export { Mysql };
