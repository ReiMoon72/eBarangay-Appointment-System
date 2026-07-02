<script setup>
import { ref } from "vue";
import LogoWeb from "../assets/img/Logo-web.png";

//For the llgo
const WebLogo = ref(LogoWeb);
</script>

<template>
  <nav class="font-inter">
    <div
      class="bg-graybg w-fit p-5 text-white flex flex-col items-center justify-center"
    >
      <div>
        <img :src="WebLogo" class="p-2 w-30" />
      </div>
      <div class="flex flex-col gap-5 p-2 justify-center">
        <router-link
          class="bg-yellow-500 text-center p-1.5 rounded-sm duration-200 transition hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600"
          :to="{ name: 'AdminDashboard' }"
          >Home</router-link
        >
        <router-link
          class="bg-yellow-500 text-center p-1.5 rounded-sm duration-200 transition hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600"
          :to="{ name: 'AdminSettings' }"
          >Settings</router-link
        >
        <router-link
          class="bg-yellow-500 text-center w-fit p-1.5 rounded-sm duration-200 transition hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600"
          :to="{ name: 'AnnouncmentPost' }"
          >Announcements Post</router-link
        >
        <router-link
          class="bg-yellow-500 text-center p-1.5 rounded-sm duration-200 transition hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600"
          :to="{ name: 'SeeAnnouncement' }"
          >Announcement See</router-link
        >
        <router-link
          class="bg-yellow-500 text-center p-1.5 rounded-sm duration-200 transition hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600"
          :to="{ name: 'Home' }"
          >Log Out</router-link
        >
      </div>
    </div>
  </nav>
</template>
