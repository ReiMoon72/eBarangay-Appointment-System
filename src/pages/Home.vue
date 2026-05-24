<script setup>
import { ref } from "vue";
import { File, House, Scroll, User, NotepadText } from "@lucide/vue";
</script>

<template>
  <header class="font-inter">
    <div>
      <div class="bg-[url(/img/Bgimage.png)] h-100 bg-cover bg-center">
        <div class="flex flex-col gap-3 p-15">
          <p class="bg-blue-500 text-white w-fit p-2 rounded-full">
            Welcome TO
          </p>
          <p class="text-3xl font-bold">
            <span class="text-blue-800">eBarangay</span><br />
            <span class="text-blue-950">Appointment System</span>
          </p>
          <p>
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

  <header class="font-inter text-2xl p-3 text-blue-950 font-bold">
    <div>
      <p>Our Services</p>
    </div>
  </header>

  <section class="font-inter p-2">
    <div class=" flex items-center justify-between p-3 flex-col flex-wrap gap-3 md:flex-row">
      <div class="bg-gray-100 w-fit p-4 text-center">
        <div class="flex items-center justify-center">
          <File />
        </div>
        <p><b>Barangay Clearance</b></p>
        <p>
          Request Your Barangay <br />
          Clearance Nows
        </p>
      </div>
      <div>
        <User />
        <p><b>Certificate of Indigency</b></p>
        <p>
          Apply for Certificate <br />
          of Indigency
        </p>
      </div>
      <div>
        <House />
        <p><b>Certificate of Residency</b></p>
        <p>
          Request a Certificate <br />
          of Residency.
        </p>
      </div>
      <div>
        <Scroll />
        <p><b>Business Permit</b></p>
        <p>
          Apply For a Barangay <br />
          Business Permit
        </p>
      </div>
      <div>
        <File />
        <p><b>Blotter Request</b></p>
        <p>
          Request a Copy of your <br />
          blotter Report
        </p>
      </div>
      <div>
        <NotepadText />
        <p><b>Barangay Clearance</b></p>
        <p>
          Request Your Barangay <br />
          Clearance Nows
        </p>
      </div>
    </div>
  </section>
</template>
