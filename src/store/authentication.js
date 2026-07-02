import { defineStore } from "pinia";
import api from "../services/url";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    loading: false,
  }),

  actions: {
    async login(emailAdress, passwordEmail) {
      this.loading = true;

      try {
        const response = await api.post("/login", {
          emailAdress,
          passwordEmail,
        });

        // Store user
        this.user = response.data.user;

        // Store token
        this.token = response.data.token;

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("token", response.data.token);

        return response.data;
      } catch (err) {
        throw err.response?.data?.message || "Login failed";
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },

    loadUserFromStorage() {
      const userData = localStorage.getItem("user");
      const tokenData = localStorage.getItem("token");

      if (userData) {
        this.user = JSON.parse(userData);
      }

      if (tokenData) {
        this.token = tokenData;
      }
    },

    getToken() {
      return this.token || localStorage.getItem("token");
    },
  },
});
