import { Connection, createConnection } from "typeorm";

export class Database {
  async connect(): Promise<Connection> {
    const connection = await createConnection({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + "/../models/*.{js,ts}"],
      synchronize: true,
    });

    return connection;
  }
}
