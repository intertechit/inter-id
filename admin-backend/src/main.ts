import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { Database } from "./config/database";

dotenv.config();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

async function start() {
  console.clear();
  const app = express();

  app.use(cors());
  app.use(morgan("dev"));

  try {
    const database = new Database();
    await database.connect();
    console.log(`Database connected`);

    app.listen(PORT, () =>
      console.log(`API started on ${PORT} in ${NODE_ENV}`)
    );
  } catch (error) {
    console.error(error);
  }
}

start();
