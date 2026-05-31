<script setup>
import { useRouter } from "vue-router";
import { useAuthStore }  from "../store/authentication";

const authStore = useAuthStore();
const router = useRouter();

const BackInHome = () => {
  router.push({ name: "Home" });
};
</script>

<template>
  <h1>Hello User, {{ authStore.user?.name }}</h1>

  <button class="bg-blue-950 p-2 text-white" @click="BackInHome">
    Log Out
  </button>
</template>
