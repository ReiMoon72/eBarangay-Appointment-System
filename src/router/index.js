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
      path: "/forgotpassword",
      name: "ForgotPassword",
      component: () => import("../pages/ForgotPassword.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/emailconfirmation",
      name: "emailconfirmation",
      component: () => import("../pages/EmailConfirmation.vue"),
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
      path: "/userdashboard",
      name: "UserDashboard",
      component: () => import("../user/UserDashBoard.vue"),
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
      component: () => import("../layouts/UserTIme.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/userInfo",
      name: "UserInfo",
      component: () => import("../layouts/UserInformation.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/userconfirmation",
      name: "Confimation",
      component: () => import("../layouts/Confirmation.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/confirm",
      name: "Confirm",
      component: () => import("../layouts/Confirm.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/viewappoiintment",
      name: "ViewAppointment",
      component: () => import("../user/ViewAllAppointment.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/UserFAQ",
      name: "UserFAQ",
      component: () => import("../user/UserFAQ.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/reschedule",
      name: "Reschedule",
      component: () => import("../user/Reschedule.vue"),
      meta: {
        showNavbar: false,
      },
    },
    {
      path: "/admin",
      name: "AdminMain",
      component: () => import("../admin-main.vue"),
      meta: {
        showNavbar: false,
        ShowFooter: false,
      },
      children: [
        {
          path: "",
          name: "AdminDashboard",
          component: () => import("../admin/AdminDashboard.vue"),
          meta: {
            showNavbar: false,
            ShowFooter: false,
          },
        },
        {
          path: "appointment",
          name: "AdminAppointment",
          component: () => import("../admin/AdminAppointment.vue"),
          meta: {
            showNavbar: false,
            ShowFooter: false,
          },
        },
        {
          path: "settings",
          name: "AdminSettings",
          component: () => import("../admin-layout/AdminSettings.vue"),
          meta: {
            showNavbar: false,
            ShowFooter: false,
          },
        },
        {
          path: "announcement-post",
          name: "AnnouncmentPost",
          component: () => import("../admin/CreateAnnouncement.vue"),
          meta: {
            showNavbar: false,
            ShowFooter: false,
          },
        },
        {
          path: "see-announcement",
          name: "SeeAnnouncement",
          component: () => import("../admin/SeePost.vue"),
          meta: {
            showNavbar: false,
            ShowFooter: false,
          },
        },
      ],
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
