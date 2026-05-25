<script setup>
import { ref } from "vue";
import {
  File,
  House,
  Scroll,
  User,
  NotepadText,
  Clock,
  Anchor,
  Lock,
  FolderCode,
} from "@lucide/vue";
import FAQImage from "../assets/img/FAQ.png";

//For FAQ Section
const FAQ = ref(FAQImage);
const FAQ1 = ref(false);
const FAQ2 = ref(false);
const FAQ3 = ref(false);
const FAQ4 = ref(false);
const FAQ5 = ref(false);

const ShowFAQ1 = () => {
  FAQ1.value = !FAQ1.value;
};

const ShowFAQ2 = () => {
  FAQ2.value = !FAQ2.value;
};

const ShowFAQ3 = () => {
  FAQ3.value = !FAQ3.value;
};

const ShowFAQ4 = () => {
  FAQ4.value = !FAQ4.value;
};

const ShowFAQ5 = () => {
  FAQ5.value = !FAQ5.value;
};
</script>

<template>
  <header class="font-inter" id="Home">
    <div>
      <div class="bg-[url(/img/Bgimage.png)] h-120 md:h-100 bg-cover bg-center">
        <div class="flex flex-col gap-3 p-15">
          <p class="bg-blue-500 text-white w-fit p-2 rounded-full">
            Welcome TO
          </p>
          <p class="text-3xl font-bold">
            <span class="text-blue-800">eBarangay</span><br />
            <span class="text-blue-950">Appointment System</span>
          </p>
          <p class="md:text-black">
            text-white No need for a paper. Just Log in <br />
            Select your appointment, wait for confirmation, <br />
            and then you’re goods to go.
          </p>
          <button
            class="bg-blue-800 p-2 text-white rounded-sm w-fit cursor-pointer"
          >
            Appointment Services →
          </button>
        </div>
      </div>
    </div>
  </header>

  <!--Offers-->

  <header class="font-inter text-2xl p-3 font-bold">
    <div>
      <p>Our Services</p>
    </div>
  </header>

  <section class="font-inter p-3 text-white bg-graybg">
    <div
      class="flex items-center justify-between p-3 flex-col flex-wrap gap-3 md:flex-row"
    >
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <File />
        </div>
        <p><b>Barangay Clearance</b></p>
        <p>
          Request Your Barangay <br />
          Clearance Nows
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <User />
        </div>
        <p><b>Certificate of Indigency</b></p>
        <p>
          Apply for Certificate <br />
          of Indigency
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <House />
        </div>
        <p><b>Certificate of Residency</b></p>
        <p>
          Request a Certificate <br />
          of Residency.
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <Scroll />
        </div>
        <p><b>Business Permit</b></p>
        <p>
          Apply For a Barangay <br />
          Business Permit
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <File />
        </div>
        <p><b>Blotter Request</b></p>
        <p>
          Request a Copy of your <br />
          blotter Report
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <NotepadText />
        </div>
        <p><b>Barangay Clearance</b></p>
        <p>
          Request Your Barangay <br />
          Clearance Nows
        </p>
      </div>
    </div>
  </section>

  <!--Why Need-->

  <header class="font-inter text-2xl p-3">
    <div>
      <p><b>Why you need to use eBarangay</b></p>
    </div>
  </header>

  <section class="font-inter p-3 text-white bg-graybg">
    <div
      class="flex items-center justify-around p-3 flex-col flex-wrap gap-3 md:flex-row"
    >
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <Clock />
        </div>
        <p><b>Save Time</b></p>
        <p>
          No more long line and <br />
          waiting a long time
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <Anchor />
        </div>
        <p><b>Convenient</b></p>
        <p>
          Easy to access anytime, <br />
          anywhere.
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <Lock />
        </div>
        <p><b>Secure</b></p>
        <p>
          Your Private Information <br />
          is safe with us.
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center rounded-sm">
        <div class="flex items-center justify-center">
          <FolderCode />
        </div>
        <p><b>Transparent</b></p>
        <p>
          Track Your request and <br />
          appointments.
        </p>
      </div>
    </div>
  </section>

  <!-- FAQ -->

  <header class="text-2xl font-inter p-3">
    <div>
      <p><b>Frequently Asked Questions</b></p>
    </div>
  </header>

  <section class=" font-inter p-5" id="FAQS">
    <div class=" flex justify-between items-center flex-col p-3 gap-5 md:flex-row">
      <div>
        <img class=" md:w-150" :src="FAQ" />
      </div>
      <div class="bg-grayewan text-white p-10 w-93.5 md:w-110 flex flex-col items-center justify-center rounded-sm">
        <div
          class="bg-graybg p-5 w-89.5 flex flex-col items-start justify-center gap-2"
        >
          <button class="cursor-pointer" @click="ShowFAQ1">
            What is the eBarangay Appointment System?
          </button>
          <p v-show="FAQ1">
            The eBarangay Appointment System allows <br />
            residents to book barangay services <br />
            online quickly and conveniently.
          </p>
          <hr />
        </div>
        <hr class="w-fit" />
        <div
          class="bg-graybg p-5 w-89.5 flex flex-col items-start justify-center gap-2"
        >
          <button class="cursor-pointer" @click="ShowFAQ2">
            How do I book an appointment?
          </button>
          <p v-show="FAQ2">
            Simply create an account, choose a service, <br />
            select your preferred date and time, then confirm your appointment.
          </p>
        </div>
        <hr class="w-fit" />
        <div
          class="bg-graybg p-5 w-89.5 flex flex-col items-start justify-center gap-2"
        >
          <button class="cursor-pointer" @click="ShowFAQ3">
            What services are available in the system?
          </button>
          <div v-show="FAQ3">
            <p>Available services may include:</p>
            <ul class="list-disc p-4">
              <li>Barangay Clearance</li>
              <li>Certificate of Indigency</li>
              <li>Certificate of Residency</li>
              <li>Business Permit</li>
              <li>Blotter Request</li>
              <li>Barangay Clearance</li>
            </ul>
          </div>
        </div>
        <hr class="w-fit" />
        <div
          class="bg-graybg p-5 w-89.5 flex flex-col items-start justify-center gap-2"
        >
          <button class="cursor-pointer" @click="ShowFAQ4">
            What documents should I bring during my appointment?
          </button>
          <p v-show="FAQ4">
            SRequired documents vary depending on the selected service. <br />
            The system will display the needed requirements before confirmation.
          </p>
        </div>
        <hr class="w-fit" />
        <div
          class="bg-graybg p-5 w-89.5 flex flex-col items-start justify-center gap-2"
        >
          <button class="cursor-pointer" @click="ShowFAQ5">
            Is my personal information secure?
          </button>
          <p v-show="FAQ5">
            Yes. The system securely protects user information and <br />
            follows proper data privacy practices.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
