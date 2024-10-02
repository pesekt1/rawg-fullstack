import { Router } from "express";
import { Game } from "../entities/Games";
import { AppDataSource } from "../startup/data-source";

interface Response {
  count: number;
  results: Game[];
}

const gameRouter = Router();
const gamesRepository = AppDataSource.getRepository(Game);

// Get all games
gameRouter.get("/", async (req, res) => {
  const games = await gamesRepository.find();
  const response: Response = {
    count: games.length,
    results: games,
  };
  res.send(response);
});

export default gameRouter;
