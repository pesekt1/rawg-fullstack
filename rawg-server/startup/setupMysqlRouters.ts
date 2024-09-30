import express from "express";
import gameRouter from "../routers/gameMyslqRouter";
import genreRouter from "../routers/genreMysqlRouter";

const setupMysqlRouters = (app: express.Application) => {
  app.use("/games", gameRouter);
  app.use("/genres", genreRouter);
};

export default setupMysqlRouters;
