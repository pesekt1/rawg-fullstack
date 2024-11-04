import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Response } from "./useData";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const queryFunction = () =>
    apiClient
      .get<Response<Platform>>("/platforms/lists/parents")
      .then((response) => response.data);

  return useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: queryFunction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
