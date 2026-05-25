<script setup>
import { ref } from "vue";
import MainWebLogo from "../assets/icons/Logo-web-footer.png";

const logoWeb = ref(MainWebLogo);
</script>

<template>
  <!-- Start of the Footer -->

  <footer class="font-inter p-4 bg-blue-950">
    <div class="flex justify-between items-center flex-col gap-3 md:flex-row">
      <div class="text-white flex flex-col gap-3">
        <div class="flex items-center md:flex-row">
          <img class="w-30" :src="logoWeb" />
          <div>
            <p class="text-2xl"><b>eBarangay</b></p>
            <p>Appointment System</p>
          </div>
        </div>
        <p class="text-start">
          Empowering the community for the <br />
          better future through convenient, efficient, <br />
          and transparency Barangay service.
        </p>
        <hr class="md:hidden" />
      </div>
      <div class="text-white flex flex-col items-center gap-2">
        <b class="text-center">Quick Links</b>
        <button>Home</button>
        <button>Services</button>
        <button>Announcement</button>
        <button>About Us</button>
        <button>FAQ</button>
        <button>Contact Us</button>
        <hr class="w-74 md:hidden" />
      </div>
      <div class="text-white flex flex-col items-center gap-2 text-center">
        <b>Services</b>
        <p>Barangay Clearance</p>
        <p>Certificate Of Indecency</p>
        <p>Certificate Of Recidency</p>
        <p>Business Permit</p>
        <p>Blotter Request</p>
        <p>Other More...</p>
        <hr class="w-74 md:hidden" />
      </div>
      <div class="text-white flex flex-col items-center gap-2">
        <b>Contact</b>
        <p>(63) 9234 567 696</p>
        <p>infogram@gmail.com</p>
        <p>
          Barangay Hall, City, <br />
          Phillipines
        </p>
        <p>Monday - Friday</p>
        <p>8:00 AM - 5:00 PM</p>
      </div>
    </div>
  </footer>
</template>
