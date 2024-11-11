import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { Response } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

//replace useQuery with useInfiniteQuery
//pass the pageParam
//pass pageParam to getAll method
//getNextPageParam

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          stores: gameQuery.store?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: 1000 * 60 * 60, // 1 hour
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};

export default useGames;
