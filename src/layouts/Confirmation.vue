<script setup>
import { File } from "@lucide/vue";
import { ref, onMounted } from "vue";
import UserNavbar from "../components/UserNavbar.vue";
import { useRouter } from "vue-router";
import { UserServicesAPi } from "../services/url.js";
// import axios from "axios";

const router = useRouter();
const SelectedService = ref("");
const DateSelected = ref("");
const TimeSelected = ref("");
const fullName = ref("");
const PhoneNumber = ref("");
const emailaddress = ref("");
const barangayAdd = ref("");
const purpose = ref("");

//Btn
const Back = () => {
  router.push("/userInfo");
};

//Random Number
const GoInfo = async () => {
  //Generate the Random Number
  const referenceNumbers =
    "EVT- " + Math.floor(100000 + Math.random() * 900000);
  const NumberReference = Math.floor(100000 + Math.random() * 900000);

  //Going to Save it
  sessionStorage.setItem("referenceNumbers", referenceNumbers);
  sessionStorage.setItem("NumberReference", NumberReference);

  try {
    await UserServicesAPi.post("/userconfirmation", {
      fullName: fullName.value,
      DateSelected: DateSelected.value,
      SelectedService: SelectedService.value,
      TimeSelected: TimeSelected.value,
      purpose: purpose.value,
      barangayAdd: barangayAdd.value,
      PhoneNumber: PhoneNumber.value,
      emailaddress: emailaddress.value,
    });
    router.push("/confirm");
  } catch (error) {
    console.log(error);
  }
};

//The services
onMounted(() => {
  SelectedService.value = localStorage.getItem("ServiceSelected");
});

//Date & TIme
onMounted(() => {
  DateSelected.value = localStorage.getItem("DatePicker");
  TimeSelected.value = localStorage.getItem("selectedTime");
});

//Personal Info
onMounted(() => {
  fullName.value = localStorage.getItem("Fullname");
  PhoneNumber.value = localStorage.getItem("phoneNumber");
  emailaddress.value = localStorage.getItem("EmailAdd");
  barangayAdd.value = localStorage.getItem("BarangayAddress");
  purpose.value = localStorage.getItem("PurposeDetail");
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
          <p>{{ SelectedService }}</p>
        </div>
      </div>
      <div
        class="flex items-center gap-3 bg-slate-50 dark:bg-graybg text-black dark:text-white p-3 rounded-sm"
      >
        <File color="blue" size="45" class="bg-blue-100 p-2.5 rounded-full" />
        <div>
          <b>Date & Time</b>
          <div class="flex flex-col">
            <p>{{ DateSelected }}</p>
            <p>{{ TimeSelected }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex items-center gap-3 bg-slate-50 dark:bg-graybg text-black dark:text-white p-3 rounded-sm"
      >
        <File color="blue" size="45" class="bg-blue-100 p-2.5 rounded-full" />
        <div>
          <b>Location</b>
          <p>{{ barangayAdd }}</p>
        </div>
      </div>
      <div
        class="flex items-center gap-3 bg-slate-50 dark:bg-graybg text-black dark:text-white p-3 rounded-sm"
      >
        <File color="blue" size="45" class="bg-blue-100 p-2.5 rounded-full" />
        <div>
          <b>Your Informations</b>
          <div class="flex flex-row gap-3">
            <p>{{ fullName }}</p>
            <p>{{ PhoneNumber }}</p>
          </div>
          <div>
            <p>{{ emailaddress }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex items-center gap-3 bg-slate-50 dark:bg-graybg text-black dark:text-white p-3 rounded-sm"
      >
        <File color="blue" size="45" class="bg-blue-100 p-2.5 rounded-full" />
        <div>
          <b>Additional Information</b>
          <p>{{ purpose }}</p>
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
