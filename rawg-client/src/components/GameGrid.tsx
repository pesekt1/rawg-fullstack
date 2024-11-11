import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../store";

const GameGrid = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) ?? 0;

  const skeletons = [...Array(20).keys()];
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={<Spinner />}
      scrollThreshold={1}
    >
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {/* <Button
        onClick={() => fetchNextPage()}
        isLoading={isFetchingNextPage}
        colorScheme="blue"
        variant="outline"
        width="100%"
      >
        {isFetchingNextPage ? "Loading more..." : "Load more"}
      </Button> */}
    </InfiniteScroll>
  );
};

export default GameGrid;
