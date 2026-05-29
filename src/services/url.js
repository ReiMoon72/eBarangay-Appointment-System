import axios from "axios";

const API_URL = import.meta.env.API_URL_VITE;

export const UserLogin = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);

  return response.data
};
