<script setup>
import { ref } from "vue";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref(new Date());

const DateSubmit = () => {
  if (!date.value) {
    alert("Pick a Date First");
  }

  console.log("Your Date Submit is: ", date.value);
};
</script>

<template>
  <main class="font-inter p-3">
    <div class=" flex justify-between p-5 items-center flex-wrap flex-col gap-3 md:flex-row">
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
        <div class="p-2">
          <p class="text-2xl"><b>Choose A Time</b></p>
          <p class="text-smool">Appointment Duration: 30 Minutes</p>
          <p></p>
        </div>
        <div>
          <!--All Times-->
        </div>
      </div>
    </div>
  </main>
</template>
