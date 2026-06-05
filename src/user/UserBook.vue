<script setup>
import { ref } from "vue";
import UserNavbar from "../components/UserNavbar.vue";
import { File } from "@lucide/vue";

//Inputs
const BClerance = ref(false);
</script>

<template>
  <UserNavbar />

  <header class="font-inter p-2">
    <div class="flex justify-baseline flex-col p-6">
      <p class="text-2xl"><b>Book Appointments</b></p>
      <p class="text-semi">
        Fill out the forms and send then wait for the response.
      </p>
    </div>
  </header>

  <main class="font-inter p-2">
    <div class="flex justify-between p-3">
      <p>1. Choose the service you want</p>
      <p>2. Select Time & Date</p>
      <p>3. Your Information</p>
      <p>4. Review & Confirm</p>
      <p>5. Confirmation</p>
    </div>
  </main>

  <main
    class=" flex flex-col items-center m-auto font-inter p-5 bg-offwhite dark:bg-graybg text-black dark:text-white w-180"
  >
    <div class="p-3 flex flex-col items-center">
      <p class="text-2xl"><b>1. Select Services</b></p>
      <p>Choose the service you want to avail.</p>
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-5">
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-fit rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input type="radio" v-model="BClerance" />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Barangay Clearance</b>
            <p class="text-smool">Request for Barangay Clearance</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-fit rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input type="radio" v-model="BClerance" />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Barangay Clearance</b>
            <p class="text-smool">Request for Barangay Clearance</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-fit rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input type="radio" v-model="BClerance" />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Barangay Clearance</b>
            <p class="text-smool">Request for Barangay Clearance</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-fit rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input type="radio" v-model="BClerance" />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Barangay Clearance</b>
            <p class="text-smool">Request for Barangay Clearance</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-fit rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input type="radio" v-model="BClerance" />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Barangay Clearance</b>
            <p class="text-smool">Request for Barangay Clearance</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-fit rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input type="radio" v-model="BClerance" />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Barangay Clearance</b>
            <p class="text-smool">Request for Barangay Clearance</p>
          </div>
        </div>
      </div>
    </div>
    <div class=" p-5 flex justify-end items-center">
      <button class=" bg-blue-950 p-1.5 w-50 cursor-pointer rounded-sm">Next Time & Date →</button>
    </div>
  </main>
</template>
