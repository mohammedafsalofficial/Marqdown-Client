import axios from "axios";
import Cookies from "js-cookie";

export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
});

export const axiosProtected = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});
