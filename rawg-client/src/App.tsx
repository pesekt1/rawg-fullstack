import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import useGenres, { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import useStores, { Store } from "./hooks/useStores";
import CustomList from "./components/reusableComponents/CustomList";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  store: Store | null;
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <CustomList
            title="Genres"
            useDataHook={useGenres}
            selectedItem={gameQuery.genre}
            onSelectItem={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
          <CustomList
            title="Stores"
            useDataHook={useStores}
            selectedItem={gameQuery.store}
            onSelectItem={(store) => setGameQuery({ ...gameQuery, store })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
