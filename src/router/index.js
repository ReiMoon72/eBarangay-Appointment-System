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
      path: "/login",
      name: "Login",
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
      component: () => import("../user/UserDashBoard.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/admindashboard",
      name: "AdminDashboard",
      component: () => import("../admin/AdminDashboard.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/navbarUser",
      name: "NavbarUser",
      component: () => import("../components/UserNavbar.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/userbook",
      name: "UserBook",
      component: () => import("../user/UserBook.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/usertime",
      name: "UserTime",
      component: () => import("../components/UserTIme.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/userInfo",
      name: "UserInfo",
      component: () => import("../components/UserInformation.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/userconfirm",
      name: "Confimation",
      component: () => import("../components/Confirmation.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/confirm",
      name: "Confirm",
      component: () => import("../components/Confirm.vue"),
      meta: {
        showNavbar: false,
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const auth = useAuthStore();

  if (!auth.user) {
    auth.loadUserFromStorage();
  }

  const protectedRoutes = ["UserDashboard", "AdminDashboard"];
  const isProtected = protectedRoutes.includes(to.name);

  if (isProtected && !auth.user) {
    return { name: "Login" }; // redirect to login if not authenticated
  }

  return true; // allow navigation
});

export default router;
