import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import stores from "../data/stores";
import ApiClient from "../services/api-client";

export interface Store {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const apiClient = new ApiClient<Store>("/stores");

const useStores = () => {
  return useQuery<Response<Store>, Error>({
    queryKey: ["stores"],
    queryFn: () => apiClient.getAll(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: stores.length, results: stores },
  });
};

export default useStores;
