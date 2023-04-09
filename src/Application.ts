import express, { Express } from "express";
import { TestRouter } from "./Router/v1";
import { logger } from "./Feature/Middleware";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
export class Application {
  private app: Express;
  private Port: number = 4000;

  constructor() {
    this.app = express();
    this.mioddelware();
    this.router();
  }
  private router = () => {
    this.app.use("/test", TestRouter);
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
