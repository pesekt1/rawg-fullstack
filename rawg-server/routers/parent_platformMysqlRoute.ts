import { Router } from "express";
import { ParentPlatform } from "../entities/ParentPlatforms";
import { AppDataSource } from "../startup/data-source";

interface Response {
  count: number;
  results: ParentPlatform[];
}

const parentPlatformRouter = Router();
const parentPlatformsRepository = AppDataSource.getRepository(ParentPlatform);

// Get all parent platforms
parentPlatformRouter.get("/", async (req, res) => {
  const parentPlatforms = await parentPlatformsRepository.find();
  const response: Response = {
    count: parentPlatforms.length,
    results: parentPlatforms,
  };
  res.send(response);
});

export default parentPlatformRouter;
