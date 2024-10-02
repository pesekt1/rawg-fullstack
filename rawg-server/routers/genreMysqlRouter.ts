import { Router } from "express";
import { Genre } from "../entities/Genres";
import { AppDataSource } from "../startup/data-source";

interface Response {
  count: number;
  results: Genre[];
}

const genreRouter = Router();
const genreRepository = AppDataSource.getRepository(Genre);

// Get all genres
genreRouter.get("/", async (req, res) => {
  const genres = await genreRepository.find();
  const response: Response = {
    count: genres.length,
    results: genres,
  };
  res.send(response);
});

export default genreRouter;
