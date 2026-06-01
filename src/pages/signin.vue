<script setup>
import { ref } from "vue";
import LogoIMG from "../assets/img/Logo-web.png";
import { Calendar, ScanFace, MessageCircle, User } from "@lucide/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const SignUp = () =>{
  router.push({ name: 'Login'})
} 
//For Logo
const Logo = ref(LogoIMG);
</script>

<template>
  <section class="font-inter p-5">
    <div class="flex items-center justify-center">
      <div
        class="bg-gray-400 bg-blend-multiply hidden bg-[url(/img/cloud-bg.png)] h-120 w-130 md:h-155 bg-cover bg-center rounded-l-sm"
      >
        <div class="flex items-center text-white">
          <img class="w-25" :src="Logo" />
          <div>
            <b class="text-2xl"> eBarangay</b>
            <p>Appointment System</p>
          </div>
        </div>
        <div class="text-white p-5">
          <p>
            <b class="text-2xl">Create Your Account</b> <br />
            Sign up now to get started with your <br />
            Appointment and Request.
          </p>
        </div>
        <div class="text-white p-3 flex flex-col gap-15">
          <div class="flex items-center">
            <Calendar class="p-1.5 rounded-md" size="50" color="blue" />
            <p>
              <b>Easy Online Appointment</b> <br />Book Goverment Services
              <br />
              in just a few clicks.
            </p>
          </div>
          <div class="flex items-center">
            <ScanFace class="p-1.5 rounded-md" size="50" color="blue" />
            <p>
              <b>Easy Online Appointment</b> <br />Book Goverment Services
              <br />
              in just a few clicks.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <MessageCircle class="p-1.5 rounded-md" size="50" color="blue" />
            <p>
              <b>Easy Online Appointment</b> <br />Book Goverment Services
              <br />
              in just a few clicks.
            </p>
          </div>
        </div>
      </div>
      <form
        @click.prevent
        class="font-inter flex flex-col gap-2 items-center justify-center bg-amber-50 text-black w-90 md:w-130 h-160 md:h-155 rounded-r-sm p-2 md:p-8"
      >
        <div class="text-blue-950">
          <p class="text-2xl"><b>Create an account</b></p>
          <p>Fill the details to create your account</p>
        </div>
        <label>Full Name: </label>
        <input
          class="border-2 p-1 rounded-sm border-grayewan w-85 md:w-100"
          type="text"
          v-model="emailAdress"
        />
        <label>Email Address: </label>
        <input
          class="border-2 p-1 rounded-sm border-grayewan w-85 md:w-100"
          type="text"
          v-model="emailAdress"
        />
        <label>Phone Number: </label>
        <input
          class="border-2 p-1 rounded-sm border-graybg w-85 md:w-100"
          type="password"
          v-model="passwordEmail"
        />
        <label>Password: </label>
        <input
          class="border-2 p-1 rounded-sm border-graybg w-85 md:w-100"
          type="password"
          v-model="passwordEmail"
        />
        <label>Confirm Password: </label>
        <input
          class="border-2 p-1 rounded-sm border-graybg w-85 md:w-100"
          type="password"
          v-model="Confirmpassword"
        />
        <div class="flex flex-col items-baseline gap-2">
          <div>
            <input type="checkbox" /> I agree to the
            <span class="text-blue-700">Term of Use</span> and
            <span class="text-blue-700">Privacy Policy</span>
          </div>
          <button
            class="bg-blue-800 flex items-center p-1.5 w-85 md:w-100 justify-center text-white cursor-pointer"
          >
            <User /> Sign Up
          </button>
        </div>
        <div class=" flex items-center m-auto gap-6">
            <p>Already Have a Account?</p>
            <button class=" text-blue-800 cursor-pointer" @click="SignUp">Sign In</button>
        </div>
      </form>
    </div>
  </section>
</template>
