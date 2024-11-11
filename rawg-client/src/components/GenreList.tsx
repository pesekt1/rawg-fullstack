import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";
import useGameQueryStore from "../store";

const GenreList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data, error, isLoading } = useGenres();
  const genres = data?.results;

  const displayedGenres = isExpanded ? genres : genres?.slice(0, 5);

  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((state) => state.setGenreId);

  if (error) return <div>{error.message}</div>;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {displayedGenres?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => setSelectedGenreId(genre.id)}
                key={genre.id}
                colorScheme={selectedGenreId === genre.id ? "yellow" : "white"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </List>
    </>
  );
};

export default GenreList;
