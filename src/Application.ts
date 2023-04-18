import express, { Express } from "express";
import { TestRouter, UserRouter, ProfileRouter } from "./Routers/v1";
import { logger } from "./Features/Middlewares";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Mysql } from "./Features/DB-Connections";
import { User } from "./Models/User-Model/user-schema";
dotenv.config();
export class Application {
  private app: Express;
  private Port: number = 4001;

  constructor() {
    this.app = express();
    this.database_connection();
    this.mioddelware();
    this.router();
  }
  private router = () => {
    this.app.use("/test", TestRouter);
    this.app.use("/user", UserRouter);
    this.app.use("/profile", ProfileRouter);
  };

  private database_connection = async () => {
    try {
      await Mysql.authenticate();
      console.log("mysql : Connection has been established successfully.");
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
