<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authentication";
import Adminnavbar from "../admin-layout/Adminnavbar.vue";

const authStore = useAuthStore();
const router = useRouter();
</script>

<template>
  <header class="font-inter">
    <div class="bg-graybg text-white p-6">
      <h1>
        Welcome back <span class=" font-bold">{{ authStore.user?.name }}</span>
      </h1>
    </div>
  </header>
</template>
