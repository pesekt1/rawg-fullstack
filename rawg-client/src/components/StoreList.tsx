import {
  Heading,
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";
import useStores, { Store } from "../hooks/useStores";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";

interface Props {
  onSelectStore: (store: Store) => void;
  selectedStore: Store | null;
}

const StoreList = ({ onSelectStore, selectedStore }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data: stores, error, isLoading } = useStores();

  const displayedStores = isExpanded ? stores : stores?.slice(0, 5);

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <>
      <Heading>Stores</Heading>
      <List>
        {displayedStores.map((store) => (
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
                onClick={() => onSelectStore(store)}
                key={store.id}
                colorScheme={
                  store.id === selectedStore?.id ? "yellow" : "white"
                }
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
