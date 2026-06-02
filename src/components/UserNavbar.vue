<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../store/authentication";
import { useRouter } from "vue-router";
import WebLogo from "../assets/img/Logo-web.png";

//Images
const Logo = ref(WebLogo);

//Other shits
const router = useRouter();
const authStore = useAuthStore();
const logoutBG = ref(false);

//Btn
const LogOutBtn = () => {
  logoutBG.value = !logoutBG.value;
};

//Back in Home
const backHome = () => {
  router.push({ name: "Home" });
};

//Dark Mode

const toggleDark = () => {
  const isDark = document.documentElement.classList.toggle("dark");

  toggleDark.value = !toggleDark.value;
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    toggleDark.value = false;
  } else {
    document.documentElement.classList.remove("dark");
    toggleDark.value = true;
  }
});
</script>

<template>
  <nav class="font-inter p-3 bg-graybg text-white">
    <div
      class="flex justify-between items-center p-1 flex-col gap-3 md:flex-row"
    >
      <div class="flex items-center">
        <img class="w-20" :src="Logo" />
        <div>
          <p class="text-2xl text-blue-800"><b>eBarangay</b></p>
          <p>Appointment System</p>
        </div>
      </div>
      <div class="flex items-center gap-5 justify-center flex-col md:flex-row">
        <button @click="">Dashboard</button>
        <button>Book Apppointment</button>
        <button>My Appointment</button>
        <button>FAQ</button>
      </div>
      <div class="flex gap-5 items-center">
        <p>
          <b>Welcome Back {{ authStore.user?.name }}</b>
        </p>
        <div>
          <button class="rotate-90 cursor-pointer" @click="LogOutBtn">
            |||
          </button>
        </div>
      </div>
      <div
        class="bg-grayewan text-black w-40 text-center p-2 absolute right-5 top-75 md:top-20"
        v-show="logoutBG"
      >
        <button
          class="cursor-pointer bg-graybg p-1 text-white w-30"
          @click="backHome"
        >
          Logout
        </button>
        <hr class="w-fit bg-white" />
        <button
          class="cursor-pointer bg-graybg p-1 text-white w-30"
          @click="toggleDark()"
        >
          Dark Mode
        </button>
      </div>
    </div>
  </nav>
  <hr class="bg-ultragray" />
</template>
