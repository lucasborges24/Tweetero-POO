import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import handleApplicationErrors from "./middlewares/handleApplicationErrors.js";
import authRoute from "./routes/authRoute.js";
import tweetRoute from "./routes/tweetRoute.js";

class App {
  constructor(port, server) {
    this.port = port;
    this.server = server;
  }

  configServer() {
    this.server.use(cors());
    this.server.use(json());
  }

  configRoutes() {
    this.server.use(authRoute)
    this.server.use(tweetRoute)
    this.server.use(handleApplicationErrors.error)
  }

  configListen() {
    this.server.listen(this.port, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(chalk.bold.blue("Server running on PORT " + this.port));
      }
    });
  }
}

const app = new App(5000, express());

app.configServer();
app.configRoutes();
app.configListen();
