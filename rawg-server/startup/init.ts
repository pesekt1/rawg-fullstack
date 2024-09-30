import express from "express";
import dbConnectMysql from "./dbConnectMysql";
import setupMysqlRouters from "./setupMysqlRouters";

const init = (app: express.Application) => {
  dbConnectMysql();
  setupMysqlRouters(app);
};

export default init;
