import { defineStore } from "pinia";
import api from "../services/url";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    loading: false,
  }),

  actions: {
    async login(email, password) {
      this.loading = true;

      try {
        const res = await api.post("/login", {
          email,
          password,
        });

        this.user = res.data.user;
        this.token = res.data.token; // IMPORTANT FIX

        localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("token", this.token);

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
