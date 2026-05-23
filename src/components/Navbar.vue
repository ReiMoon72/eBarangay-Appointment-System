<script setup>
import { ref } from "vue";
import LogoWeb from "../assets/icons/Logo-web.png";

const logo = ref(LogoWeb);

</script>

<template>
  <nav class="bg-grayewan p-1 text-white">
    <div class="flex items-center justify-between p-2">
      <div class="flex items-center">
        <img class="w-20 p-1" :src="logo" />
        <div>
          <p class="text-2xl"><b>eBarangay</b></p>
          <p>Appointment System</p>
        </div>
      </div>
      <div class="flex gap-15">
        <router-link to="/">Home</router-link>
        <button>FAQ</button>
        <button>How It Work</button>
        <router-link :to="{ name: 'Contact'}">Contact</router-link>
      </div>
      <div class="p-3">
        <button class="bg-ultragray p-2 w-25 rounded-sm cursor-pointer" @click="BtnLogin">
          <b>Log In</b>
        </button>
      </div>
    </div>
  </nav>
</template>
