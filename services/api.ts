import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3000",
};

export const api = axios.create(config);
