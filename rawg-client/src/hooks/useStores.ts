import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Response } from "./useData";
import stores from "../data/stores";

export interface Store {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useStores = () => useData<Store>("/stores");

const useStores = () => {
  const queryFunction = () =>
    apiClient.get<Response<Store>>("/stores").then((response) => response.data);

  return useQuery<Response<Store>, Error>({
    queryKey: ["stores"],
    queryFn: queryFunction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: stores.length, results: stores },
  });
};

export default useStores;
