<script setup>
import { ref } from "vue";
import UserNavbar from "../components/UserNavbar.vue";
import FAQImage from "../assets/img/FAQ.png";
import { Calendar } from "@lucide/vue";

const FAQ = ref(FAQImage);

//For the FAQ
const Works = ref(false);
const WorksT = ref(false);
const RescheduleSide = ref(false);
const CancelSide = ref(false);
const Devs = ref(false)

//Btn for the FAQ
const FirstFAQ = () => {
  Works.value = !Works.value;
};

const SecondFAQ = () => {
  WorksT.value = !WorksT.value;
};

const ThirdFAQ = () => {
  RescheduleSide.value = !RescheduleSide.value;
};

const CancelBtn = () => {
  CancelSide.value = !CancelSide.value;
};

const DevsFAQ = () =>{
  Devs.value = !Devs.value
}
</script>

<template>
  <UserNavbar />

  <header class="font-inter p-3">
    <div>
      <b class="text-2xl">FAQ Section</b>
      <p class="text-smool">
        Here you can see and click the Fequently Ask Question <br />
        about this website and how it works, and who is the developer behind
        this.
      </p>
    </div>
  </header>

  <main class="font-inter p-2">
    <div class="p-2 flex flex-col gap-1 justify-center">
      <div
        class="flex items-center gap-3 bg-graybg p-3 rounded-sm w-180 flex-col cursor-pointer"
        @click="FirstFAQ"
      >
        <div class="flex gap-3 items-center">
          <div>
            <Calendar
              class="p-2 bg-blue-400 rounded-full"
              size="45"
              color="blue"
            />
          </div>
          <div>
            <b>1. How do i book an Appointment?</b>
            <p class="text-smool">
              You can book an appointment by clicking the 'Book Appointment' and
              selecting a Service and etc.
            </p>
          </div>
        </div>
        <div v-show="Works">
          <p class="text-semi">
            If you're already log in, go to the Book Appointment in the Navbar
            by that In No.1 you need to Choose what Service you want (e.g. Valid
            ID, Barangay Clearance, or Business Permit). After that fill up the
            Time, Date, Personal Info and then you can click confirm and
            Screenshot the Reference Number.
          </p>
        </div>
      </div>
      <!--Second FAQS-->
      <div
        class="flex items-center gap-3 bg-graybg p-3 rounded-sm w-180 flex-col cursor-pointer"
        @click="SecondFAQ"
      >
        <div class="flex gap-3 items-center">
          <div>
            <Calendar
              class="p-2 bg-blue-400 rounded-full"
              size="45"
              color="blue"
            />
          </div>
          <div>
            <b>2. How can i know when i need to go in the Barangay Hall?</b>
            <p class="text-smool">
              If you're wondering are you allowed to go in Barangay Hall just
              wait for approval of admin 1/2 days
            </p>
          </div>
        </div>
        <div v-show="WorksT">
          <p class="text-semi">
            Just wait a little 1/2 days in average of waiting for the approval
            of your appointment. If you're booking got 10 days delayed, just go
            to the barangay hall and show your Reference Number or your latest
            booking in the dashboard. But if your booking got 5 days delayed
            just wait because means our admin is busy.
          </p>
        </div>
      </div>
      <!-- ThirdFAQS -->
      <div
        class="flex items-center gap-3 bg-graybg p-3 rounded-sm w-180 flex-col cursor-pointer"
        @click="ThirdFAQ"
      >
        <div class="flex gap-3 items-center">
          <div>
            <Calendar
              class="p-2 bg-blue-400 rounded-full"
              size="45"
              color="blue"
            />
          </div>
          <div>
            <b>3. Can you Reschedule the appointment?</b>
            <p class="text-smool">
              Yes, you can reschedule the appointment when you schedule it. But
              remember only Date and time.
            </p>
          </div>
        </div>
        <div v-show="RescheduleSide">
          <p class="text-semi">
            Here in our Appointment system you can reschedule the appointment
            but only Time and Date, you can't do that reschedule the Service and
            other.
          </p>
        </div>
      </div>
      <!-- ForthFAQ -->
      <div
        class="flex items-center gap-3 bg-graybg p-3 rounded-sm w-180 flex-col cursor-pointer"
        @click="CancelBtn"
      >
        <div class="flex gap-3 items-center">
          <div>
            <Calendar
              class="p-2 bg-blue-400 rounded-full"
              size="45"
              color="blue"
            />
          </div>
          <div>
            <b>4. Can you cancel the Appointment?</b>
            <p class="text-smool">
              Yes, you can Cencel the appointment just click button red and
              click the okey when it pop up to cancel.
            </p>
          </div>
        </div>
        <div v-show="CancelSide">
          <p class="text-semi">
            You can cancel the appointment, just don't cancel it when the status
            is on Confirm, you can cancel it when it was a Pending or in read.
          </p>
        </div>
      </div>
      <!--LastFAQ-->
      <div
        class="flex items-center gap-3 bg-graybg p-3 rounded-sm w-180 flex-col cursor-pointer"
        @click="DevsFAQ"
      >
        <div class="flex gap-3 items-center">
          <div>
            <Calendar
              class="p-2 bg-blue-400 rounded-full"
              size="45"
              color="blue"
            />
          </div>
          <div>
            <b>5. Who is the dev behind this System?</b>
            <p class="text-smool">
              If you're wondering that who is the developer of this application
              and this website. He is a student and solo dev
            </p>
          </div>
        </div>
        <div v-show="Devs">
          <p class=" text-semi">Rei is the creator of this website, He design this so that people don't need go to 
            any barangay jsut to wait in line and just book a appointment and it was done. He is 
            Graduate in ICT and now he is upcoming Freshman in college.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
