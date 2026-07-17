<script setup>
import { ref } from "vue";
import Adminnavbar from "./admin-layout/Adminnavbar.vue";
import AdminDashboard from "./admin/AdminDashboard.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex ">
    <Adminnavbar />
    <main class="flex-1 overflow-auto">
      <RouterView />
    </main>
  </div>
</template>
