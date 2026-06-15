<script setup>
import { ref } from "vue";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useRouter } from "vue-router";
import UserInformation from "./UserInformation.vue";
import UserNavbar from "../components/UserNavbar.vue";

const router = useRouter();
const DatePicker = ref(new Date());
const Toaster = ref(false);
const selectedTime = ref('');

//Btn
const PreviousBack = () => {
  router.push("/userbook");
};

function NextStep() {
  //Stororight the time and Date
  localStorage.setItem("DatePicker", DatePicker.value);
  localStorage.setItem("selectedTime", selectedTime.value);

  if (!DatePicker.value || !selectedTime.value) {
    Toaster.value = true;
    setTimeout(() => {
      Toaster.value = false;
    }, 3000);
  } else {
    router.push("/UserInfo");
  }
}

function Time(time) {
  selectedTime.value = time
  console.log(time)
}

</script>

<template>
  <UserNavbar />

  <main class="font-inter p-5">
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
    class="absolute top-40 right-5 bg-glass p-2 w-70 rounded shadow-lg z-50 text-white"
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
          v-model="DatePicker"
          :time-config="{ enableTimePicker: false }"
          inline
          auto-apply
          format="yyyy-MM-dd"
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
            @click="Time('8:00')"
          >
            8:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('8:30')"
          >
            8:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('9:00')"
          >
            9:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('9:30')"
          >
            9:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('10:00')"
          >
            10:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('10:30')"
          >
            10:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('11:00')"
          >
            11:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('11:30')"
          >
            11:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('1:00')"
          >
            1:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('1:30')"
          >
            1:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('2:00')"
          >
            2:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('2:30')"
          >
            2:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('3:00')"
          >
            3:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('3:30')"
          >
            3:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('4:30')"
          >
            4:00 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('8:00')"
          >
            4:30 AM
          </button>
          <button
            class="bg-blue-800 text-white w-30 p-2 rounded-sm cursor-pointer"
            @click="Time('5:00')"
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
