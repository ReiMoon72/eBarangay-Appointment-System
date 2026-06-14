<script setup>
import { ref } from "vue";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useRouter } from "vue-router";
import UserInformation from "./UserInformation.vue";
import UserNavbar from "./UserNavbar.vue";

const router = useRouter();

const date = ref(new Date());

//Btn
const PreviousBack = () => {
  router.push("/userbook");
};

const NextStep = () => {
router.push('/UserInfo')
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

  <main class="font-inter p-3">
    <div
      class="flex justify-between p-5 items-center flex-wrap flex-col gap-3 md:flex-row"
    >
      <div class="p-2">
        <div>
          <p class="text-2xl"><b>2. Choose A Date & Time</b></p>
          <p class="text-smool">
            Choose a time and date in you <br />
            liking
          </p>
        </div>
        <VueDatePicker
          v-model="date"
          :time-config="{ enableTimePicker: false }"
          inline
          auto-apply
        />
      </div>
      <div>
        <div class="p-2 text-center">
          <p class="text-2xl"><b>Choose A Time</b></p>
          <p class="text-smool">Appointment Duration: 30 Minutes</p>
          <p></p>
        </div>
        <div
          class="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-3 place-items-center"
        >
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            8:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            8:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            9:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            9:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            10:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            10:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            11:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            11:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            1:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            1:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            2:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            2:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            3:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            3:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            4:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            4:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
          >
            5:00 AM
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div>
        <button
          class="bg-blue-950 p-1.5 w-50 cursor-pointer rounded-sm text-white"
          @click="PreviousBack"
        >
          Back
        </button>
      </div>
      <div>
        <button
          class="bg-blue-950 p-1.5 w-50 cursor-pointer rounded-sm text-white"
          @click="NextStep"
        >
          Next
        </button>
      </div>
    </div>
  </main>

  <!-- <main v-show="UserInfo">
    <div>
      <UserInformation />
    </div>
  </main> -->
</template>
