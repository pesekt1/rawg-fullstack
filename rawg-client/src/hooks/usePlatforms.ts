import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
