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
        console.log("🔐 LOGIN REQUEST - Sending credentials...");
        
        const response = await api.post("/login", {
          emailAdress,
          passwordEmail,
        });

        console.log("🔐 LOGIN RESPONSE RECEIVED:");
        console.log("  response.data:", response.data);
        console.log("  response.data.token:", response.data.token);
        console.log("  typeof token:", typeof response.data.token);

        // ✅ Store user
        this.user = response.data.user;
        console.log("  ✅ User stored in state");

        // ✅ Store token
        this.token = response.data.token;
        console.log("  ✅ Token stored in state");

        // ✅ Save to localStorage
        localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("token", response.data.token);
        
        console.log("  ✅ Saved to localStorage");
        console.log("  Verify from localStorage:");
        console.log("    user:", localStorage.getItem("user"));
        console.log("    token:", localStorage.getItem("token")?.substring(0, 50) + "...");

        return response.data;

      } catch (err) {
        console.error("❌ LOGIN FAILED:");
        console.error("  Status:", err.response?.status);
        console.error("  Message:", err.response?.data?.message);
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
    }
  },
});