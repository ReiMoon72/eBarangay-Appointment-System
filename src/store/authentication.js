import { defineStore } from "pinia";
import { UserLogin } from "../services/url.js";
import router from '../router'

export const userAuth = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
  }),
  actions: {
    async loginNow(credentials) {
      try {
        this.loading = true;
        this.error = null;

        const data = await UserLogin(credentials);
        this.user = data.user;
        this.token = data.token;

        localStorage.getItem("toekn", data.token);

        if(data.user.role === "admin") {
            router.push({ name: 'AdminDashboard'})
        }else{
            router.push({ name: "UserDashboard"})
        }
      } catch (error) {
        console.error = err.response?.data?.message || "Log in Request"
      } finally {
        this.loading = false
      }
    },
    logoutUser() {
        this.user = null
        this.token = null
        localStorage.removeItem("token")
        router.push({ name: "LogIn"})
    }
  },
});
