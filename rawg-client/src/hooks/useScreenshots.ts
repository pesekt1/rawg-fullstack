import ms from "ms";
import { Screenshot } from "../entities/Screenshot";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
  });
};

export default useScreenshots;
