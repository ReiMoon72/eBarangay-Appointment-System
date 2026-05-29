import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authentication";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/Home.vue"),
      meta: {
        showNavbar: true,
      },
    },
    {
      path: "/navbar",
      name: "Navbar",
      component: () => import("../components/Navbar.vue"),
      meta: {
        showNavbar: true,
      },
    },
    {
      path: "/footer",
      name: "Footer",
      component: () => import("../components/Footer.vue"),
      meta: {
        showNavbar: true,
      },
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../pages/Contact.vue"),
      meta: {
        showNavbar: true,
      },
    },
    {
      path: "/signin",
      name: "Signin",
      component: () => import("../pages/signin.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/logIn",
      name: "LogIn",
      component: () => import("../pages/log-in.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/admin",
      name: "AdminLogin",
      component: () => import("../pages/AdminRole.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/userdashboard",
      name: "UserDashboard",
      component: () => import("../pages/UserDashBoard.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/admindashboard",
      name: "AdminDashboard",
      component: () => import("../pages/AdminDashboard.vue"),
      meta: {
        showNavbar: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if (!auth.user) {
    auth.loadUserFromStorage();
  }
  next();
});

export default router;
