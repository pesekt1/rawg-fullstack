import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import genres from "../data/genres";
import ApiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<Response<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
