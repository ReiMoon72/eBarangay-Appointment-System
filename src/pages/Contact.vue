<script setup>
import { Mail, Phone, MapPin, Clock } from "@lucide/vue";
import { ref, reactive, onMounted } from "vue";
import { SendImial } from "../services/url.js";

const imial = reactive({
  nume: "",
  email: "",
  subject: "",
  missage: "",
});

const SubmitBtnEmail = async () => {
  try {
    const responseEmail = await SendImial.post("/contact", {
      nume: imial.nume,
      email: imial.email,
      subject: imial.subject,
      missage: imial.missage,
    });

    alert("The Email Has been Send!!");

    //clean the inputs after send
    imial.nume = "";
    imial.email = "";
    imial.subject = "";
    imial.missage = "";
  } catch (error) {
    console.error("Request pipeline tracking catch exception:", error);
  }
};
</script>

<template>
  <header
    class="font-inter p-5 flex flex-col justify-center items-center md:flex-col"
  >
    <b class="text-2xl">Get in touch</b>
    <p class="text-smool">
      We'd love to hear from you. Send us a message and we'll respond as soon as
      possible.
    </p>
  </header>

  <main class="font-inter p-2 text-white">
    <div
      class="flex justify-between items-center flex-col gap-5 p-2 md:flex-row flex-wrap"
    >
      <div
        class="bg-graybg w-75 rounded-md border-1 flex gap-1 flex-col items-center justify-center p-5"
      >
        <Mail color="lightblue" />
        <p>Email</p>
        <p class="cursor-pointer text-blue-300">rsa563820@gamil.com</p>
      </div>
      <div
        class="bg-graybg w-75 rounded-md border-1 flex flex-col gap-1 items-center justify-center p-5"
      >
        <Phone color="lightblue" />
        <p>Phone</p>
        <p class="text-blue-300">(63+)3457347333</p>
      </div>
      <div
        class="bg-graybg w-75 rounded-md border-1 flex flex-col gap-1 items-center justify-center p-5"
      >
        <MapPin color="lightblue" />
        <p>Location</p>
        <p class="text-blue-300">Sitio Sucat, Muntinlupa City</p>
      </div>
      <div
        class="bg-graybg w-75 rounded-md border-1 flex flex-col gap-1 items-center justify-center p-5"
      >
        <Clock color="lightblue" />
        <p>Location</p>
        <p class="text-blue-300">Mon - Fri: 8:00AM - 5:00PM</p>
      </div>
    </div>
  </main>

  <form
    class="font-inter bg-graybg w-fit md:w-190 p-2 rounded-sm m-auto text-white"
    @click.prevent
  >
    <div class="text-[20px] p-2">
      <p>Send us a Message</p>
    </div>
    <div class="flex flex-col justify-center gap-4 text-white md:flex-col">
      <div class="flex flex-col gap-1">
        <label>Name </label>
        <input
          class="bg-ultragray w-90 md:w-full rounded-[5px] border-2 border-transparent focus:border-blue-900 focus:outline-none p-1.5 duration-300"
          type="text"
          v-model="imial.nume"
          placeholder="Your Full Name"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label>Email </label>
        <input
          class="bg-ultragray w-90 md:w-full rounded-[5px] border-2 border-transparent focus:border-blue-900 focus:outline-none p-1.5 duration-300"
          type="text"
          v-model="imial.email"
          placeholder="your.email@gamil,com"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label>Subject </label>
        <input
          class="bg-ultragray w-90 md:w-full rounded-[5px] border-2 border-transparent focus:border-blue-900 focus:outline-none p-1.5 duration-300"
          type="text"
          v-model="imial.subject"
          placeholder="How can we help?"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label>Message </label>
        <textarea
          class="bg-ultragray w-90 md:w-full rounded-[5px] h-25 border-2 border-transparent focus:border-blue-900 focus:outline-none p-1.5 duration-300"
          v-model="imial.missage"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div class="">
        <button
          class="bg-blue-800 p-2 w-90 md:w-full cursor-pointer hover:bg-blue-900 active:bg-blue-700 duration-300"
          @click="SubmitBtnEmail"
        >
          Send Message
        </button>
      </div>
    </div>
  </form>
</template>
