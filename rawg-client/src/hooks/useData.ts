import { useState, useEffect } from "react";
import apiClient, { Response } from "../services/api-client";
import { AxiosRequestConfig } from "axios";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);

      apiClient
        .get<Response<T>>(endpoint, { ...requestConfig })
        .then((response) => setData(response.data.results))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
