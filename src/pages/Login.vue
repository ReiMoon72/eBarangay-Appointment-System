<script setup>
import { ref } from "vue";
import LoggIN from "../layouts/log-in.vue";
import SignnIN from "../layouts/signin.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const LoginNOw = ref(true);
const SignINNOw = ref(false);

const LogginnNow = () => {
  LoginNOw.value = true;
  SignINNOw.value = false;
};

const SignIn = () => {
  SignINNOw.value = true;
  LoginNOw.value = false;
};

const BackHome = () => {
  router.push({ name: "Home" });
};
</script>

<template>
  <header class="font-inter p-2 text-white">
    <div>
      <button
        class="bg-white dark:bg-ultragray text-black dark:text-white cursor-pointer"
        @click="BackHome"
      >
        ← Back To Home
      </button>
    </div>
    <div class="flex justify-around items-center">
      <button
        class="bg-blue-950 p-2 w-30 rounded-sm cursor-pointer"
        @click="LogginnNow"
      >
        Log In
      </button>
      <button
        class="bg-blue-950 p-2 w-30 rounded-sm cursor-pointer"
        @click="SignIn"
      >
        Sign In
      </button>
    </div>
  </header>

  <LoggIN v-show="LoginNOw" />
  <SignnIN v-show="SignINNOw" />
</template>
