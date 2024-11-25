import { create } from "zustand"; //prop drilling - App --> NavBar --> SearchBar
//logic for updating the gameQuery is spread all over the place

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  storeId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setStoreId: (storeId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  reset: () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setStoreId: (storeId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, storeId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  reset: () => set(() => ({ gameQuery: {} })),
}));

export default useGameQueryStore;
