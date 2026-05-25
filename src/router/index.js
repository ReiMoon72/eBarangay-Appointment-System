import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/navbar",
      name: "Navbar",
      component: () => import("../components/Navbar.vue"),
    },
    {
      path: "/footer",
      name: "Footer",
      component: () => import("../components/Footer.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../pages/Contact.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../pages/Login.vue"),
    },
  ],
});

export default router;
