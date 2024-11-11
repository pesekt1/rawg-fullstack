import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { data: genreData } = useGenres();
  const genres = genreData?.results;

  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);

  const selectedGenre = genres?.find((genre) => genre.id === genreId);

  const { data: platformData } = usePlatforms();
  const platforms = platformData?.results;

  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);

  const selectedPlatform = platforms?.find(
    (platform) => platform.id === platformId
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
