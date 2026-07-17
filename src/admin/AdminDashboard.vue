<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authentication";
import Adminnavbar from "../admin-layout/Adminnavbar.vue";
import { Calendar, Megaphone, Info, Settings } from "@lucide/vue";

const authStore = useAuthStore();
const router = useRouter();

//Button

const AppointmentBtn = () => {
  router.push({ name: 'AdminAppointment'})
}

const PostBtn = () =>{
  router.push({ name: 'AnnouncmentPost'})
}

const SeePostBtn = () =>{
  router.push({ name: 'SeeAnnouncement'})
}

const SeetingsBtn = () => {
  router.push({ name: 'AdminSettings'})
}
</script>

<template>
  <header class="font-inter">
    <div class="bg-graybg text-white p-6">
      <h1>
        Welcome back <span class="font-bold">{{ authStore.user?.name }}</span>
      </h1>
    </div>
  </header>

  <section class="font-inter p-5">
    <div>
      <b class=" text-3xl">Hello {{ authStore.user?.name }}</b>
      <p class="text-smool">
        Good Morning/Afternoon/Evening. <br />
        The Wrok Load is Ready Now.
      </p>
    </div>
  </section>

  <main class="font-inter p-2">
    <div class=" flex justify-center items-center gap-15 p-10">
      <div
        class="border-2 rounded-sm w-50 h-55 flex flex-col items-center justify-center gap-2 p-1"
      >
        <Calendar
          color="white"
          size="50"
          class="rounded-full bg-blue-700 p-2"
        />
        <div class="flex flex-col gap-2 items-center justify-center">
          <b>Appointments</b>
          <p class="text-center">
            View & Manage all <br />
            Appointments.
          </p>
          <button class="cursor-pointer text-blue-600" @click="AppointmentBtn">Manage ></button>
        </div>
      </div>
      <!--Post Announce-->
      <div
        class="border-2 rounded-sm w-50 h-55 flex flex-col items-center justify-center gap-2 p-1"
      >
        <Megaphone
          color="white"
          size="50"
          class="rounded-full bg-blue-700 p-2"
        />
        <div class="flex flex-col gap-2 items-center justify-center">
          <b>Post Announce</b>
          <p class="text-center">
            Post Announcements <br />
            And Inform
          </p>
          <button class="cursor-pointer text-blue-600" @click="PostBtn">Manage ></button>
        </div>
      </div>
      <!--See Post-->
      <div
        class="border-2 rounded-sm w-50 h-55 flex flex-col items-center justify-center gap-2 p-1"
      >
        <Info color="white" size="50" class="rounded-full bg-blue-700 p-2" />
        <div class="flex flex-col gap-2 items-center justify-center">
          <b>See Post</b>
          <p class="text-center">
            See Announce Post <br />
            Delete Post
          </p>
          <button class="cursor-pointer text-blue-600" @click="SeePostBtn">Manage ></button>
        </div>
      </div>
      <!--Settings-->
      <div
        class="border-2 rounded-sm w-50 h-55 flex flex-col items-center justify-center gap-2 p-1"
      >
        <Settings color="white" size="50" class="rounded-full bg-blue-700 p-2" />
        <div class="flex flex-col gap-2 items-center justify-center">
          <b>Settings</b>
          <p class="text-center">
            Fix and Find your <br />
            Right Settings
          </p>
          <button class="cursor-pointer text-blue-600" @click="SeetingsBtn">Manage ></button>
        </div>
      </div>
    </div>
  </main>
</template>
