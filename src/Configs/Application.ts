import express, { Express } from "express";
export class Application {
  private app: Express;
  private Port: number = 4000;

  constructor() {
    this.app = express();
    this.router();
  }
  private router = () => {
    this.app.get("/", (re, res) => {
      res.send("hello world");
    });
  };
  runServer = () => {
    this.app.listen(this.Port, () => {
      console.log(`"express server start on port ${this.Port}`);
    });
  };
}
