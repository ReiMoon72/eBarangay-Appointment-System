<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";

// const router = useRouter();
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300"
  >
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
