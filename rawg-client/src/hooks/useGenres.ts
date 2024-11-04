import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Response } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => {
  const queryFunction = () =>
    apiClient.get<Response<Genre>>("/genres").then((response) => response.data);

  return useQuery<Response<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: queryFunction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
