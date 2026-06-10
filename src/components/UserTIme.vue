<script setup>
import { ref } from "vue";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useRouter } from "vue-router";

const router = useRouter();

const date = ref(new Date());

//Btn
const NextStep = () => {
  router.back();
};

const NextStep = () => {

};
</script>

<template>
  <main class="font-inter p-3">
    <div
      class="flex justify-between p-5 items-center flex-wrap flex-col gap-3 md:flex-row"
    >
      <div class="p-2">
        <div class="p-2">
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
          @click="NextStep"
        >
          Back
        </button>
      </div>
      <div>
        <button
          class="bg-blue-950 p-1.5 w-50 cursor-pointer rounded-sm text-white"
          @click="PreviousBack"
        >
          Next
        </button>
      </div>
    </div>
  </main>
</template>
