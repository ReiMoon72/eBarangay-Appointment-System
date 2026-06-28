<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/UserNavbar.vue";
import { File } from "@lucide/vue";
import { AppointmentGetAll } from "../services/url.js";

const isLoading = ref(false);
const error = ref(null);
const GetAllAppointments = ref([]);

//FOrmating the Date & Time
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-PH");
};

const formatTime = (time) => {
  return new Date(time).toLocaleTimeString("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

onMounted(async () => {
  //This Prevent Multiple Calls
  if (isLoading.value) return;

  isLoading.value = true;
  try {
    const response = await AppointmentGetAll();

    if (response.data && Array.isArray(response.data.data)) {
      GetAllAppointments.value = response.data.data;
    } else {
      GetAllAppointments.value = [];
      error.value = "Invalid data format";
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
    GetAllAppointments.value = [];
    error.value = error.message;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <Navbar />

  <header class="p-5 font-inter">
    <div class="flex flex-col justify-center items-baseline md:flex-col p-2">
      <b class="text-2xl">My Appointments</b>
      <p class="text-smool">View all your appointment in one place.</p>
    </div>
  </header>

  <main class="font-inter p-2">
    <div class="p-2 flex flex-col gap-4">
      
      <!-- Loading State -->
      <div v-if="isLoading" class="flex items-center justify-center">
        <p>Loading appointments...</p>
      </div>

      <!-- Empty State -->
      <div v-else-if="GetAllAppointments.length === 0" class="flex items-center justify-center">
        <p>No appointments found.</p>
      </div>

      <!-- Appointments Loop -->
      <div
        v-for="appointment in GetAllAppointments"
        :key="appointment.UserAppointID"
        class="p-3 bg-slate-100 dark:bg-graybg text-black dark:text-white rounded-sm flex justify-between items-center"
      >
        <!-- File Icon -->
        <div>
          <File class="bg-grayewan p-2 rounded-full" color="gray" size="50" />
        </div>

        <!-- Appointment Details -->
        <div class="flex-1 ml-4">
          <p><strong>Fullname:</strong> {{ appointment.Fullname }}</p>
          <p><strong>Services:</strong> {{ appointment.Services }}</p>
          <p><strong>Date:</strong> {{ formatDate(appointment.Dates) }}</p>
          <p><strong>Time:</strong> {{ formatTime(appointment.Time) }}</p>
          <p><strong>Status:</strong> {{ appointment.Status }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
