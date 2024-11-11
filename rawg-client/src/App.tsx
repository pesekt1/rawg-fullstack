import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import useGenres from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import useStores from "./hooks/useStores";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import CustomList from "./components/reusableComponents/CustomList";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  storeId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      padding={4}
      templateAreas={{
        lg: `"nav nav"
             "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        lg: "200px 1fr",
        base: "1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <CustomList
            title="Genres"
            useDataHook={useGenres}
            selectedItemId={gameQuery.genreId}
            onSelectItem={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
          <CustomList
            title="Stores"
            useDataHook={useStores}
            selectedItemId={gameQuery.storeId}
            onSelectItem={(store) =>
              setGameQuery({ ...gameQuery, storeId: store.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing="5" marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
