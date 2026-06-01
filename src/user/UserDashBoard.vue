<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authentication.js";
import UserNavbar from "../components/UserNavbar.vue";
import { Calendar } from "@lucide/vue";

const router = useRouter();
const authStore = useAuthStore();
</script>

<template>
  <UserNavbar />

  <header class="font-inter p-2">
    <div>
      <p class="text-2xl">
        <b>Welcome Back {{ authStore.user?.name }}</b>
      </p>
      <p>Manage your appointment with the barangay easily.</p>
    </div>
  </header>

  <main>
    <!--Flex Here-->
    <div>
      <div>
        <Calendar />
        <div>
          <p>Upcoming</p>
          <p>Appointments</p>
        </div>
      </div>
    </div>
  </main>
</template>
