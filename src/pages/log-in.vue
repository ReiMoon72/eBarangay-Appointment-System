<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/authentication.js";
import FAQImage from "../assets/img/Logo-web.png";
import { Lock } from "@lucide/vue";
import { useRouter } from "vue-router";

//Ref The Admin
const emailAdress = ref("");
const passwordEmail = ref("");

//For Others
const auth = useAuthStore();
const router = useRouter();
const LogoIMG = ref(FAQImage);

const BackHome = () => {
  router.push({ name: "Home" });
};

const SignUp = () => {
  router.push({ name: "Signin" });
};

const AdminLogin = () => {
  router.push({ name: "AdminLogin" });
};

const ForgotPasswords = () => {
  router.push("/forgotpassword")
}

//Log in
const loginhandles = async () => {
  try {
    const loginProceddurre = await auth.login(
      emailAdress.value,
      passwordEmail.value,
    );

    const user = loginProceddurre.user;

    if (user.role === "admin") {
      router.push({ name: "AdminDashboard" });
    } else {
      router.push({ name: "UserDashboard" });
    }
  } catch (error) {
    console.error("Log In Falied Error In: ", error);
  }

  emailAdress.value = "";
  passwordEmail.value = "";
};
</script>

<template>
  <header class="font-inter p-2 text-white">
    <div class="p-5">
      <button
        class="bg-white dark:bg-ultragray text-black dark:text-white cursor-pointer"
        @click="BackHome"
      >
        ← Back To Home
      </button>
    </div>
  </header>

  <section class="font-inter p-5">
    <div class="flex items-center justify-center">
      <div
        class="bg-gray-400 bg-blend-multiply hidden md:bg-[url(/img/Bgimage.png)] h-120 w-130 md:h-120 bg-cover bg-center rounded-l-sm flex flex-col flex-wrap md:flex-row"
      >
        <div class="flex items-center text-white">
          <img class="w-25" :src="LogoIMG" />
          <div>
            <b class="text-2xl"> eBarangay</b>
            <p>Appointment System</p>
          </div>
        </div>
      </div>
      <form
        @click.prevent
        class="font-inter flex flex-col gap-3 items-baseline justify-center bg-amber-50 text-black w-90 md:w-130 h-120 rounded-r-sm p-8 flex-col md:flex-col"
      >
        <div class="text-blue-950">
          <p class="text-2xl"><b>Sign in to your account</b></p>
          <p>Enter Your Credential To Enter Your Account</p>
        </div>
        <div class="flex flex-col gap-3">
          <label>Email Address: </label>
          <input
            class="border-2 p-1 rounded-sm border-grayewan w-80 md:w-100"
            type="text"
            v-model="emailAdress"
          />
          <label>Password: </label>
          <input
            class="border-2 p-1 rounded-sm border-graybg w-80 md:w-100"
            type="password"
            v-model="passwordEmail"
          />
        </div>
        <div>
          <button class="cursor-pointer text-blue-700" @click="ForgotPasswords">
            Forget Password
          </button>
        </div>
        <div>
          <button class="cursor-pointer text-blue-700" @click="AdminLogin">
            Admin LogIn
          </button>
        </div>
        <button
          class="flex items-center justify-center gap-3 rounded-sm cursor-pointer bg-blue-900 p-1.5 text-white w-80 md:w-90 m-auto"
          @click="loginhandles"
        >
          Sign In
        </button>
        <div class="flex gap-5 items-center justify-center m-auto">
          <p>Don't have an account?</p>
          <button class="cursor-pointer text-blue-600" @click="SignUp">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
