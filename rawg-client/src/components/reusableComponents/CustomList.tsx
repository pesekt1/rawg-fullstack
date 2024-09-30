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

interface CustomListProps<T> {
  title: string;
  useDataHook: () => { data: T[]; error: string; isLoading: boolean };
  selectedItem: T | null;
  onSelectItem: (item: T) => void;
}

const CustomList = <
  T extends { id: number; image_background: string; name: string }
>({
  title,
  useDataHook,
  selectedItem,
  onSelectItem,
}: CustomListProps<T>) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: items, error, isLoading } = useDataHook();

  const displayedItems = isExpanded ? items : items.slice(0, 5);

  if (error) return <p>Error: {error}</p>;
  if (isLoading) return <Spinner />;

  return (
    <Box padding={4}>
      <Heading>{title}</Heading>
      <List>
        {displayedItems.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(item.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => onSelectItem(item)}
                key={item.id}
                colorScheme={selectedItem?.id === item.id ? "yellow" : "white"}
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
