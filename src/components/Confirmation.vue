<script setup>
import { File } from "@lucide/vue";
import { ref } from "vue";
import UserNavbar from "./UserNavbar.vue";
</script>

<template>
  <UserNavbar />

  <main class="font-inter p-2">
    <div
      class="flex justify-between items-center flex-wrap flex-col gap-3 md:flex-row p-3"
    >
      <p>1. Choose the service you want</p>
      <p>2. Select Time & Date</p>
      <p>3. Your Information</p>
      <p>4. Review & Confirm</p>
      <p>5. Confirmation</p>
    </div>
  </main>
  <main
    class="font-inter p-2 bg-offwhite dark:bg-grayewan text-black dark:text-white"
  >
    <div class="p-2">
      <b class="text-2xl">4. Review & Confirmation</b>
      <p>Please review your appointment details before confirmation.</p>
    </div>
    <div
      class="p-2 flex flex-col gap-5 justify-center flex-wrap md:flex-col text-white"
    >
      <div
        class="flex items-center gap-3 bg-slate-50 dark:bg-graybg text-black dark:text-white p-3 rounded-sm"
      >
        <File color="blue" size="45" class="bg-blue-100 p-2.5 rounded-full" />
        <div>
          <b>Services</b>
          <p>Kung ano kinuha mo</p>
        </div>
      </div>
      <div
        class="flex items-center gap-3 bg-slate-50 dark:bg-graybg text-black dark:text-white p-3 rounded-sm"
      >
        <File color="blue" size="45" class="bg-blue-100 p-2.5 rounded-full" />
        <div>
          <b>Date & Time</b>
          <p>Kung ano kinuha mo</p>
        </div>
      </div>
      <div
        class="flex items-center gap-3 bg-slate-50 dark:bg-graybg text-black dark:text-white p-3 rounded-sm"
      >
        <File color="blue" size="45" class="bg-blue-100 p-2.5 rounded-full" />
        <div>
          <b>Location</b>
          <p>Kung ano kinuha mo</p>
        </div>
      </div>
      <div
        class="flex items-center gap-3 bg-slate-50 dark:bg-graybg text-black dark:text-white p-3 rounded-sm"
      >
        <File color="blue" size="45" class="bg-blue-100 p-2.5 rounded-full" />
        <div>
          <b>Your Informations</b>
          <p>Kung ano kinuha mo</p>
        </div>
      </div>
      <div
        class="flex items-center gap-3 bg-slate-50 dark:bg-graybg text-black dark:text-white p-3 rounded-sm"
      >
        <File color="blue" size="45" class="bg-blue-100 p-2.5 rounded-full" />
        <div>
          <b>Additional Information</b>
          <p>Kung ano kinuha mo</p>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center p-2 flex-wrap">
      <button
        class="border-2 border-graybg p-1.5 w-50 cursor-pointer rounded-sm dark:text-white text-black"
        @click="Back"
      >
        Back
      </button>
      <button
        class="bg-blue-950 p-1.5 w-50 cursor-pointer rounded-sm text-white"
        @click="GoInfo"
      >
        Next →
      </button>
    </div>
  </main>
</template>
