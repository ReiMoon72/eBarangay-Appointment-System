<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authentication.js";
import UserNavbar from "../components/UserNavbar.vue";
import { Calendar, Check, Clock, File } from "@lucide/vue";
import { ref, onMounted } from "vue";
import { appointmentApi } from "../services/url.js";

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
    <div class="grid grid-cols-1 grid-rows-1 justify-between gap-2 md:gap-50 md:grid-cols-2">
      <div
        class="bg-offwhite dark:bg-graybg text-black dark:text-white p-1.5 rounded-sm"
      >
        <div class="flex justify-between p-2 items-center">
          <p class="text-semi"><b>Appointment Schedules</b></p>
          <button class="text-blue-700 cursor-pointer" @click="ViewAppointment">
            View all
          </button>
        </div>
        <div class="flex flex-col gap-3 p-2">
          <p>Date</p>
          <p>Time</p>
          <p>What type of concern/services</p>
          <p>Confirm/Pending/Reject</p>
          <p>Btn For Reschedule</p>
          <p>Cancel Appointment</p>
        </div>
      </div>
      <div>
        <div
          class="bg-offwhite dark:bg-graybg text-black dark:text-white p-1.5 rounded-sm"
        >
          <div class=" flex justify-between items-center p-2">
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
