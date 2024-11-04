import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  //for the public api:"https://api.rawg.io/api/",
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((response) => response.data);
}

export default ApiClient;
