import { Router } from "express";
import { Game } from "../entities/Games";
import { AppDataSource } from "../startup/data-source";
import { ParentPlatform } from "../entities/ParentPlatforms";
import { Genre } from "../entities/Genres";
import { Store } from "../entities/Stores";

interface ModifinedGame {
  id: number;
  name: string;
  background_image: string | null;
  metacritic: number | null;
  parent_platforms: { platform: ParentPlatform }[];
  genres: Genre[];
  stores: Store[];
}

interface Response {
  count: number;
  results: ModifinedGame[];
}

const gameRouter = Router();
const gamesRepository = AppDataSource.getRepository(Game);

// Get all games
gameRouter.get("/", async (req, res) => {
  let genreId = req.query.genres ? Number(req.query.genres) : undefined;
  let storeId = req.query.stores ? Number(req.query.stores) : undefined;
  let parentPlatformId = req.query.parent_platforms
    ? Number(req.query.parent_platforms)
    : undefined;

  const queryBuilder = gamesRepository
    .createQueryBuilder("game")
    .leftJoinAndSelect("game.genres", "genres")
    .leftJoinAndSelect("game.parent_platforms", "parent_platforms")
    .leftJoinAndSelect("game.stores", "stores");

  if (genreId) {
    queryBuilder.andWhere(
      "game.id IN (SELECT games_id FROM games_genres WHERE genres_id = :genreId)",
      { genreId }
    );
  }

  if (storeId) {
    queryBuilder.andWhere(
      "game.id IN (SELECT games_id FROM games_stores WHERE stores_id = :storeId)",
      { storeId }
    );
  }

  if (parentPlatformId) {
    queryBuilder.andWhere(
      "game.id IN (SELECT games_id FROM games_parent_platforms WHERE parent_platforms_id = :parentPlatformId)",
      { parentPlatformId }
    );
  }

  const games = await queryBuilder.getMany();

  console.log(games);

  // const games = await gamesRepository.find({ relations: ["parent_platforms"] });

  const modifinedGames = games.map((game) => ({
    ...game,
    parent_platforms: game.parent_platforms?.map((parent_platform) => ({
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
