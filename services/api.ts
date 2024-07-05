import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
    "Api-Key": process.env.NEXT_PUBLIC_API_KEY,
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const api = axios.create(config);
