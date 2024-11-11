import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url";
import { Response } from "../../services/api-client";
import { UseQueryResult } from "@tanstack/react-query";

interface CustomListProps<T> {
  title: string;
  useDataHook: () => UseQueryResult<Response<T>, Error>;
  selectedItemId?: number;
  onSelectItem: (item: T) => void;
}

const CustomList = <
  T extends { id: number; image_background: string; name: string }
>({
  title,
  useDataHook,
  selectedItemId,
  onSelectItem,
}: CustomListProps<T>) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data, error, isLoading } = useDataHook();

  const items = data?.results;
  const displayedItems = isExpanded ? items : items?.slice(0, 5);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box padding={4}>
      <Heading>{title}</Heading>
      {isLoading && <Spinner />}
      <List>
        {displayedItems?.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(item.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                fontSize="lg"
                onClick={() => onSelectItem(item)}
                key={item.id}
                colorScheme={selectedItemId === item.id ? "yellow" : "white"}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </List>
    </Box>
  );
};

export default CustomList;
