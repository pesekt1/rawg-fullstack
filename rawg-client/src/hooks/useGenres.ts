import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Response } from "./useData";

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
  });
};

export default useGenres;
