import { DataSource } from "typeorm";
import "reflect-metadata";

const connectionString = process.env.DATABASE_URL;

export const AppDataSource = new DataSource({
  type: "mysql",
  url: connectionString,
  synchronize: true,
  logging: true,
  entities: [__dirname + "/../entities/*.ts"],
});
