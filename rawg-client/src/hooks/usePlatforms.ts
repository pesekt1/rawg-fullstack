import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
