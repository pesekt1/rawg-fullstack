import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const games = data?.results || [];

  const skeletons = [...Array(20).keys()];
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={3}
      padding={2}
    >
      {error && <p>{error.message}</p>}

      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
