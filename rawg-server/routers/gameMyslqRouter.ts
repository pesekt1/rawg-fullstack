import { Router } from "express";
import { Game } from "../entities/Games";
import { AppDataSource } from "../startup/data-source";
import { ParentPlatform } from "../entities/ParentPlatforms";

interface ModifinedGame {
  id: number;
  name: string;
  background_image: string | null;
  metacritic: number | null;
  parent_platforms: { platform: ParentPlatform }[];
}

interface Response {
  count: number;
  results: ModifinedGame[];
}

const gameRouter = Router();
const gamesRepository = AppDataSource.getRepository(Game);

// Get all games
gameRouter.get("/", async (req, res) => {
  const games = await gamesRepository.find({ relations: ["parent_platforms"] });

  const modifinedGames = games.map((game) => ({
    ...game,
    parent_platforms: game.parent_platforms.map((parent_platform) => ({
      platform: parent_platform,
    })),
  }));

  const response: Response = {
    count: games.length,
    results: modifinedGames,
  };
  res.send(response);
});

export default gameRouter;
