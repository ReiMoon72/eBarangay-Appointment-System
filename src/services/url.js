import axios from "axios";

const api = axios.create({
  baseURL: "/api/auth",
});

const appointmentApi = axios.create({
  baseURL: "/api",
});

export { api, appointmentApi };
export default api;
