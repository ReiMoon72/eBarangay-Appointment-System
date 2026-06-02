<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authentication.js";
import UserNavbar from "../components/UserNavbar.vue";
import { Calendar, Check, Clock, File } from "@lucide/vue";
import { ref, onMounted } from "vue";
import { appointmentApi } from "../services/url.js";

const router = useRouter();
const authStore = useAuthStore();
const AppointmentsSers = ref([]);

const getServiceAppoint = async () => {
  try {
    const response = await appointmentApi.get(`/appoint/user/${authStore.user?.name}`);
    console.log("Full data:", JSON.stringify(response.data, null, 2));  // ✅ Log entire array
    AppointmentsSers.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getServiceAppoint();
});
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

  <main class="font-inter p-2">
    <div
      class="flex justify-between items-center p-2 flex-col flex-wrap gap-3 md:flex-row"
    >
      <div
        class="flex flex-col justify-center items-center bg-slate-300 dark:bg-graybg text-black dark:text-white w-55 rounded-sm"
      >
        <div class="flex items-center p-2 gap-5">
          <Calendar color="blue" size="35" />
          <p>
            Upcoming <br />
            Appointment
          </p>
        </div>
        <p class="text-2xl">1</p>
      </div>
      <div
        class="flex flex-col justify-center items-center bg-slate-300 dark:bg-graybg text-black dark:text-white w-55 rounded-sm"
      >
        <div class="flex items-center p-2 gap-5">
          <Check color="Green" size="35" />
          <p>
            Upcoming <br />
            Appointment
          </p>
        </div>
        <p class="text-2xl">1</p>
      </div>
      <div
        class="flex flex-col justify-center items-center bg-slate-300 dark:bg-graybg text-black dark:text-white w-55 rounded-sm"
      >
        <div class="flex items-center p-2 gap-5">
          <Clock color="orange" size="35" />
          <p>
            Upcoming <br />
            Appointment
          </p>
        </div>
        <p class="text-2xl">1</p>
      </div>
      <div
        class="flex flex-col justify-center items-center bg-slate-300 dark:bg-graybg text-black dark:text-white w-55 rounded-sm"
      >
        <div class="flex items-center p-2 gap-5">
          <File color="Purple" size="35" />
          <p>
            Upcoming <br />
            Appointment
          </p>
        </div>
        <p class="text-2xl">1</p>
      </div>
    </div>
  </main>

  <header class="font-inter p-2 text-2xl">
    <p><b>All Appointments Schedule</b></p>
  </header>

  <main class="font-inter p-2">
    <div class="grid grid-cols-2 justify-between gap-50">
      <div
        class="bg-offwhite dark:bg-graybg text-black dark:text-white p-1.5 rounded-sm"
      >
        <div class="flex justify-between">
          <p class="text-semi"><b>Appointment Schedules</b></p>
          <button class="text-blue-700" @click="ViewAppointment">
            View all
          </button>
        </div>
        <div v-for="item in AppointmentsSers" :key="item.id">
          <p>Services: {{ item.Services }}</p>
        </div>
      </div>
      <div>2</div>
    </div>
  </main>
</template>
