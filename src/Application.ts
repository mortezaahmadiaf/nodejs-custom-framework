import express, { Express } from "express";
import { TestRouter } from "./Router/v1";
import { logger } from "./Feature/Middleware";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Mysql } from "./Feature/DB-Connections";
import { User } from "./Models/User-Model/user-schema";
dotenv.config();
export class Application {
  private app: Express;
  private Port: number = 4000;

  constructor() {
    this.app = express();
    this.database_connection();
    this.mioddelware();
    this.router();
  }
  private router = () => {
    this.app.use("/test", TestRouter);
  };

  private database_connection = async () => {
    try {
      await Mysql.authenticate();
      console.log("mysql : Connection has been established successfully.");

      // User.create({ name: "morteza1", preferredName: "test1" });
    } catch (error) {
      console.error("mysql : Unable to connect to the database:", error);
    }
  };

  private mioddelware = () => {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(logger);
  };
  runServer = () => {
    this.app.listen(this.Port, () => {
      console.log(`"express server start on port ${this.Port}`);
    });
  };
}
