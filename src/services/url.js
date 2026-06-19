import axios from "axios";

const api = axios.create({
  baseURL: "/api/auth",
});

const appointmentApi = axios.create({
  baseURL: "/api",
});

const UserServicesAPi = axios.create({
  baseURL: "/api",
});

const fetchAppoint = axios.create({
  baseURL: "/",
});

//For Sign in
const createUser = axios.create({
  baseURL: "/api",
});

createUser.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { api, appointmentApi, UserServicesAPi, fetchAppoint, createUser };
export default api;
