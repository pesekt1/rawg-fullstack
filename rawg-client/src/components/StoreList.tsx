import {
  Heading,
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";
import useStores from "../hooks/useStores";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";
import useGameQueryStore from "../store";

const StoreList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data, error, isLoading } = useStores();

  const stores = data?.results;
  const displayedStores = isExpanded ? stores : stores?.slice(0, 5);

  const selectedStoreId = useGameQueryStore((state) => state.gameQuery.storeId);
  const setSelectedStoreId = useGameQueryStore((state) => state.setStoreId);

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <>
      <Heading>Stores</Heading>
      <List>
        {displayedStores?.map((store) => (
          <ListItem key={store.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(store.image_background)}
              />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => setSelectedStoreId(store.id)}
                key={store.id}
                colorScheme={store.id === selectedStoreId ? "yellow" : "white"}
              >
                {store.name}
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

export default StoreList;
