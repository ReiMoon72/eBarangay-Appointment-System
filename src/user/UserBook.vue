<script setup>
import { ref, watch } from "vue";
import UserNavbar from "../components/UserNavbar.vue";
import { File } from "@lucide/vue";
import { useRouter } from "vue-router";

//For Imports
const router = useRouter();
const Toaster = ref(false);

//for v-model 1
const ServiceSelected = ref("");

function TimeNext() {
  //Storing the Radio btn value
  localStorage.setItem("ServiceSelected", ServiceSelected.value);

  //Toaster will appeard when the user is not selecting a anything
  if (!ServiceSelected.value) {
    Toaster.value = true;
    setTimeout(() => {
      Toaster.value = false;
    }, 3000);
  } else {
    //Will go to the next web page
    router.push("/usertime");
  }
}

//It will close the toeaster
const CloseToeaster = () => {
  Toaster.value = false;
};
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

  <main
    class="absolute top-30 right-5 bg-glass p-2 w-70 rounded shadow-lg z-50"
    v-show="Toaster"
  >
    <div class="flex justify-between p-2">
      <div class="flex flex-col p-2">
        <b>Please Select a Service first</b>
        <p class="text-sm">before you go into another part.</p>
      </div>
      <div>
        <button class="cursor-pointer" @click="CloseToeaster">✕</button>
      </div>
    </div>
  </main>

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
    class="flex flex-col items-center m-auto font-inter rounded-sm mb-5 p-5 bg-offwhite dark:bg-graybg text-black dark:text-white w-90 md:w-180"
  >
    <div class="p-3 flex flex-col items-center">
      <p class="text-2xl"><b>1. Select Services</b></p>
      <p>Choose the service you want to avail.</p>
    </div>
    <div class="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-2">
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-fit rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input
            type="radio"
            value="Barangay Clearance"
            v-model="ServiceSelected"
          />
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
          <input
            type="radio"
            value="Certificate of Indigency"
            v-model="ServiceSelected"
          />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Certificate of Indigency</b>
            <p class="text-smool">Request for Certificate of Indigency</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-82 rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input
            type="radio"
            value="Certificate of Residency"
            v-model="ServiceSelected"
          />
        </div>
        <div class="flex gap-3 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Certificate of Residency</b>
            <p class="text-smool">Request for Certificate of Residency</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-80 rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input
            type="radio"
            value="Business Permit"
            v-model="ServiceSelected"
          />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Business Permit</b>
            <p class="text-smool">Request for Business Permit</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-80 rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input
            type="radio"
            value="Blotter Request"
            v-model="ServiceSelected"
          />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Blotter Request</b>
            <p class="text-smool">Request for Blotter Request</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-3 h-25 bg-offwhite dark:bg-ultragray text-black dark:text-white p-2 w-80 rounded-xl"
      >
        <div class="flex items-end justify-end">
          <input type="radio" value="Valid ID" v-model="ServiceSelected" />
        </div>
        <div class="flex gap-5 items-center">
          <File class="bg-blue-300 p-2 rounded-full" color=" blue" size=" 50" />
          <div>
            <b>Valid ID</b>
            <p class="text-smool">Request for Valid ID</p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5 flex justify-end items-center">
      <button
        class="bg-blue-950 p-1.5 w-50 cursor-pointer rounded-sm text-white"
        @click="TimeNext"
      >
        Next Time & Date →
      </button>
    </div>
  </main>
</template>
