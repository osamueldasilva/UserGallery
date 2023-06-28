import axios from "axios";

export function createApi() {
  const token = JSON.parse(localStorage.getItem("token"));

  const api = axios.create({
    baseURL: "http://192.168.0.21:3002/",
  });

  if (!token) return api;

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return api;
}

export const api = createApi();
