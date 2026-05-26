<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-ultragray text-black dark:text-white transition-colors duration-300"
  >
    <Navbar v-if="route.meta.showNavbar" />
    <RouterView />
    <Footer />
  </div>
</template>
