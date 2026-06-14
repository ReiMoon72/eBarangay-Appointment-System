<script setup>
import { ref } from "vue";
import Confirmation from "../layouts/Confirmation.vue";
import { useRouter } from "vue-router";
import UserNavbar from "../components/UserNavbar.vue";

const Info = ref(true);
const router = useRouter();

//Btn
const GoInfo = () => {
  router.push("/userconfirmation");
};

const Back = () => {
  router.push('/usertime');
};
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
    class="bg-offwhite dark:bg-graybg text-black dark:text-white p-3 m-auto rounded-sm font-inter"
  >
    <div>
      <div class="flex flex-col flex-wrap">
        <p class="text-2xl"><b>3. Your Information</b></p>
        <p class="text-smool">Please provide your details for appointment.</p>
      </div>
      <form @click.prevent class="p-2 font-inter">
        <p class="font-bold">Personal Information</p>
        <div
          class="flex justify-between items-center gap-3 flex-wrap flex-col p-2 md:flex-row"
        >
          <div class="flex flex-col">
            <label>Full Name <span class="text-red-700">*</span></label>
            <input
              type="text"
              class="border-2 border-grayewan dark:border-white rounded-sm p-1"
              placeholder="Maria Santos"
            />
          </div>
          <div class="flex flex-col">
            <label>Contact Number <span class="text-red-700">*</span></label>
            <input
              type="number"
              class="border-2 border-grayewan dark:border-white rounded-sm p-1"
              placeholder="09123456789"
            />
          </div>
          <div class="flex flex-col">
            <label>Email Address <span class="text-red-700">*</span></label>
            <input
              type="email"
              class="border-2 border-grayewan dark:border-white rounded-sm p-1"
              placeholder="hotdog@email.com"
            />
          </div>
        </div>
        <div class="flex flex-col p-3">
          <b class="p-2 text-semi">Address</b>
          <div>
            <label class="font-bold"
              >Complete Address <span class="text-red-700">*</span></label
            >
            <input
              type="text"
              class="border-2 border-grayewan dark:border-white rounded-sm w-full p-1"
              placeholder="123 Barangay Sucat, Muntinlupa City"
            />
          </div>
        </div>
        <div class="p-2 mt-2">
          <b>Additional Information</b>
          <div>
            <label>Purpose/Details</label>
            <textarea
              class="border-2 border-grayewan dark:border-white rounded-sm field-sizing-content min-h-20 w-full p-1"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
    <div class="flex justify-between items-center p-2 flex-wrap">
      <button
        class="bg-blue-950 p-1.5 w-50 cursor-pointer rounded-sm text-white"
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
