import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/Home.vue"),
      meta: {
        showNavbar: true
      }
    },
    {
      path: "/navbar",
      name: "Navbar",
      component: () => import("../components/Navbar.vue"),
      meta: {
        showNavbar: true
      }
    },
    {
      path: "/footer",
      name: "Footer",
      component: () => import("../components/Footer.vue"),
      meta: {
        showNavbar: true
      }
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../pages/Contact.vue"),
      meta: {
        showNavbar: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../pages/Login.vue"),
      meta: {
        showNavbar: false
      }
    },
    {
      path: "/signin",
      name: "Signin",
      component: () => import("../layouts/signin.vue"),
      meta: {
        showNavbar: false
      }
    },
    {
      path: "/logIn",
      name: "LogIn",
      component: () => import("../layouts/log-in.vue"),
      meta: {
        showNavbar: false
      }
    },
  ],
});

export default router;
