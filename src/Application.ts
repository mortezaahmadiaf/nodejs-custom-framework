import express, { Express } from "express";
import { TestRouter, UserRouter, ProfileRouter } from "./Routers/v1";
import { logger } from "./Features/Middlewares";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Mysql } from "./Features/DB-Connections";
import amqplib from "amqplib/callback_api";
import { main } from "./rabit";

dotenv.config();
export class Application {
  private app: Express;
  private Port: number = 4001;

  constructor() {
    this.app = express();
    this.database_connection();
    this.mioddelware();
    this.router();
    this.rabitMQ();
    // main().catch((error) => console.error(error));

    // this.rabitMQ();
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
  private rabitMQ = () => {
    const queue = "tasks";
    amqplib.connect("amqp://localhost:5672", (err, conn) => {
      if (err) throw err;
      // Listener
      conn.createChannel((err, ch2) => {
        if (err) throw err;

        ch2.assertQueue(queue);

        ch2.consume(queue, (msg) => {
          if (msg !== null) {
            console.log(msg.content.toString(), "Receive");
            ch2.ack(msg);
          } else {
            console.log("Consumer cancelled by server");
          }
        });
      });
      // Sender
      conn.createChannel((err, ch1) => {
        if (err) throw err;

        ch1.assertQueue(queue);

        setInterval(() => {
          ch1.sendToQueue(queue, Buffer.from("message"));
          console.log("send Message");
        }, 1000);
      });
    });
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
