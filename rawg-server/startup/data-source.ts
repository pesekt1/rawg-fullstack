import { DataSource } from "typeorm";
import "reflect-metadata";

const connectionString = process.env.MYSQL_URL;

const isProduction = process.env.NODE_ENV === "production";

const entitiesPath = isProduction
  ? __dirname + "/../../entities/*.js"
  : __dirname + "/../entities/*.ts";

export const AppDataSource = new DataSource({
  type: "mysql",
  url: connectionString,
  synchronize: false,
  logging: true,
  entities: [entitiesPath],
});
