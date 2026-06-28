<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authentication.js";
import UserNavbar from "../components/UserNavbar.vue";
import { Calendar, Check, Clock, File } from "@lucide/vue";
import { ref, onMounted } from "vue";
import { AppointmentFetch } from "../services/url.js";

const router = useRouter();
const authStore = useAuthStore();

//Store the appointment
const appointments = ref([]);
const isLoading = ref(false);
const error = ref(null);

//Formating the Date and Time
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
    const response = await AppointmentFetch();

    if (response.data && Array.isArray(response.data.data)) {
      appointments.value = response.data.data;
    } else {
      appointments.value = [];
      error.value = "Invalid data format";
    }
  } catch (error) {
    console.error("Error fetching appointments:", error);
    appointments.value = [];
    error.value = error.message;
  } finally {
    isLoading.value = false;
  }
});

//FOr viewing the My Appointment 
const ViewAppointment = () =>{
  router.push({ name: 'ViewAppointment'})
}
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
    <div
      class="grid grid-cols-1 grid-rows-1 justify-between gap-2 md:gap-50 md:grid-cols-2"
    >
      <div
        class="bg-offwhite dark:bg-graybg text-black dark:text-white p-1.5 rounded-sm"
      >
        <div class="flex justify-between p-2 items-center">
          <p class="text-semi"><b>Appointment Schedules</b></p>
          <button class="text-blue-700 cursor-pointer" @click="ViewAppointment">
            View all
          </button>
        </div>
        <div
          class="flex flex-col gap-3 p-2"
          v-for="appointment in appointments"
          :key="appointment.UserAppointID"
        >
          <p>Date: {{ formatDate(appointment.Dates) }}</p>
          <p>Time: {{ formatTime(appointment.Time) }}</p>
          <p>Concern: {{ appointment.Services }}</p>
          <p>Status: {{ appointment.Status }}</p>
          <div
            class="flex justify-between items-start flex-wrap flex-col gap-2 md:flex-row md:items-center"
          >
            <button
              class="bg-blue-900 text-white p-1 rounded-sm w-40 cursor-pointer md:w-30"
            >
              Reschedule
            </button>
            <button
              class="bg-red-900 text-white p-1 rounded-sm w-40 cursor-pointer"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          class="bg-offwhite dark:bg-graybg text-black dark:text-white p-1.5 rounded-sm"
        >
          <div class="flex justify-between items-center p-2">
            <p><b>Announcements</b></p>
            <button
              class="text-blue-700 cursor-pointer"
              @click="AnnouncementBtn"
            >
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
