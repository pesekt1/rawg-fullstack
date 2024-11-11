import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genreData } = useGenres();
  const genres = genreData?.results;
  const selectedGenre = genres?.find((genre) => genre.id === gameQuery.genreId);

  const { data: platformData } = usePlatforms();
  const platforms = platformData?.results;
  const selectedPlatform = platforms?.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `${selectedPlatform?.name ?? ""} ${
    selectedGenre?.name ?? ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
