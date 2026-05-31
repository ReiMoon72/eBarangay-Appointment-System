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

        this.user = response.data.user;
        this.token = response.data.token;
        localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("token", this.token);
        return response.data;

        return res.data; // return full response, not just user
      } catch (err) {
        throw err.response?.data?.message || "Login failed";
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
      localStorage.removeItem("user");
    },

    loadUserFromStorage() {
      const data = localStorage.getItem("user");
      if (data) {
        this.user = JSON.parse(data);
      }
    },
  },
});
