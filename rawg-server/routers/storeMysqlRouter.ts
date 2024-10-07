import { Router } from "express";
import { Store } from "../entities/Stores";
import { AppDataSource } from "../startup/data-source";

interface Response {
  count: number;
  results: Store[];
}

const storeRouter = Router();
const storesRepository = AppDataSource.getRepository(Store);

// Get all stores
storeRouter.get("/", async (req, res) => {
  const stores = await storesRepository.find();
  const response: Response = {
    count: stores.length,
    results: stores,
  };
  res.send(response);
});

export default storeRouter;
