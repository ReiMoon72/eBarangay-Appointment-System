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
</script>

<template>
  <header class="font-inter">
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

  <header class="font-inter text-2xl p-3  font-bold">
    <div>
      <p>Our Services</p>
    </div>
  </header>

  <section class="font-inter p-2 text-white">
    <div
      class="flex items-center justify-between p-3 flex-col flex-wrap gap-3 md:flex-row"
    >
      <div class="bg-ultragray w-fit p-4 text-center">
        <div class="flex items-center justify-center">
          <File />
        </div>
        <p><b>Barangay Clearance</b></p>
        <p>
          Request Your Barangay <br />
          Clearance Nows
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center">
        <div class="flex items-center justify-center">
          <User />
        </div>
        <p><b>Certificate of Indigency</b></p>
        <p>
          Apply for Certificate <br />
          of Indigency
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center">
        <div class="flex items-center justify-center">
          <House />
        </div>
        <p><b>Certificate of Residency</b></p>
        <p>
          Request a Certificate <br />
          of Residency.
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center">
        <div class="flex items-center justify-center">
          <Scroll />
        </div>
        <p><b>Business Permit</b></p>
        <p>
          Apply For a Barangay <br />
          Business Permit
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center">
        <div class="flex items-center justify-center">
          <File />
        </div>
        <p><b>Blotter Request</b></p>
        <p>
          Request a Copy of your <br />
          blotter Report
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center">
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

  <section class=" font-inter p-2 text-white">
    <div
      class="flex items-center justify-around p-3 flex-col flex-wrap gap-3 md:flex-row"
    >
      <div class="bg-ultragray w-fit p-4 text-center">
        <div class="flex items-center justify-center">
          <Clock />
        </div>
        <p><b>Save Time</b></p>
        <p>
          No more long line and <br />
          waiting a long time
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center">
        <div class="flex items-center justify-center">
          <Anchor />
        </div>
        <p><b>Convenient</b></p>
        <p>
          Easy to access anytime, <br />
          anywhere.
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center">
        <div class="flex items-center justify-center">
          <Lock />
        </div>
        <p><b>Secure</b></p>
        <p>
          Your Private Information <br />
          is safe with us.
        </p>
      </div>
      <div class="bg-ultragray w-fit p-4 text-center">
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
</template>
