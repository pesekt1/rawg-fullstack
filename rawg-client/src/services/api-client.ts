import axios from "axios";

const apiClient = axios.create({
  //for the public api:"https://api.rawg.io/api/",
  baseURL: "http://localhost:5000/",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;
