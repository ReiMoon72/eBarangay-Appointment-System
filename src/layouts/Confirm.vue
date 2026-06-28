<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import UserNavbar from "../components/UserNavbar.vue";

const router = useRouter();

const referenceNumbers = ref("");
const NumberReference = ref("");

//Btn
const Back = () => {
  router.push("/userconfirmation");
};

const SubmitBtn = () => {
  router.push("/userdashboard");
};

//Getting the Random Numbers

onMounted(() => {
  referenceNumbers.value = sessionStorage.getItem("referenceNumbers" || "N/A");
  NumberReference.value = sessionStorage.getItem("NumberReference" || "N/A");
});
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

  <main class="font-inter p-2">
    <div class="flex flex-col gap-2 items-center justify-center">
      <div class="text-center">
        <b class="text-2xl">Appointment Confirm!!</b>
        <p class="text-smool">Your appointment has been successfully booked</p>
      </div>
      <div class="flex flex-col gap-3 text-center bg-green-950 p-5 rounded-sm">
        <p>Your Reference Numbers</p>
        <div
          class="border-2 border-green-700 w-fit p-2 text-center flex items-center m-auto"
        >
          <p class="text-2xl">{{ referenceNumbers }} - {{ NumberReference }}</p>
        </div>
        <div>
          <p>
            Please use this reference number for any <br />
            inquires or when contacting the barangray office.
          </p>
          <p>
            <b>Before You Leave</b> Please Take a Screenshot of you reference
            number. Thank you!
          </p>
        </div>
      </div>
    </div>
  </main>

  <main class="font-inter">
    <div class="flex justify-between items-center p-2 flex-wrap">
      <button
        class="bg-blue-950 p-1.5 w-50 cursor-pointer rounded-sm text-white"
        @click="Back"
      >
        Back
      </button>
      <button
        class="bg-blue-950 p-1.5 w-50 cursor-pointer rounded-sm text-white"
        @click="SubmitBtn"
      >
        Confirm
      </button>
    </div>
  </main>
</template>
