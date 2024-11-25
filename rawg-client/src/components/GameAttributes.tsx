import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map((platform) => (
          <Text key={platform.platform.id}>{platform.platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metacritic">
        <Text>{game.metacritic}</Text>
      </DefinitionItem>

      <DefinitionItem term="Genres">
        <Text>
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </Text>
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        <Text>
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </Text>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
