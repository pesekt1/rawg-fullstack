import { DataSource } from "typeorm";
import "reflect-metadata";

const connectionString = process.env.MYSQL_URL;

export const AppDataSource = new DataSource({
  type: "mysql",
  url: connectionString,
  synchronize: false,
  logging: true,
  entities: [__dirname + "/../entities/*.ts"],
});
