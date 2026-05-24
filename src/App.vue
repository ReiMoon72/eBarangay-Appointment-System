<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";

// const router = useRouter();
</script>

<template>

    <Navbar />
    <RouterView />
    <Footer />


</template>
