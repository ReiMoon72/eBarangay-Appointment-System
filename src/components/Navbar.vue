<script setup>
import { ref, onMounted } from "vue";
import LogoWeb from "../assets/img/Logo-web.png";
import { Sun, Moon } from "@lucide/vue";
import { useRouter } from "vue-router";

const logo = ref(LogoWeb);
const NavbarShow = ref(true);
const DarkModeBtn = ref(true);

const router = useRouter();

const CloseNavbar = () => {
  NavbarShow.value = !NavbarShow.value;
};

const toggleDark = () => {
  const isDark = document.documentElement.classList.toggle("dark");

  DarkModeBtn.value = !DarkModeBtn.value;
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    DarkModeBtn.value = false;
  } else {
    document.documentElement.classList.remove("dark");
    DarkModeBtn.value = true;
  }
});

const BtnLogin = () => {
  router.push({ name: "Login" });
};

//FAQ Scroll Down

const FAQscroll = (id) => {
  const FAQscrollDown = document.getElementById(id);

  if (FAQscrollDown) {
    FAQscrollDown.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

const BackHome = (id) => {
  const FAQscrollDown = document.getElementById(id);

  if (FAQscrollDown) {
    FAQscrollDown.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
</script>

<template>
  <nav class="top-0 sticky bg-grayewan p-1 text-white">
    <div
      class="flex items-center justify-between p-2 flex-col md:flex-row"
      v-show="NavbarShow"
    >
      <div class="flex items-center">
        <div class="flex items-center">
          <img
            class="w-20 p-1 cursor-pointer"
            @click="BackHome('Home')"
            :src="logo"
          />
          <div>
            <p class="text-2xl"><b>eBarangay</b></p>
            <p>Appointment System</p>
          </div>
        </div>
      </div>
      <div
        class="flex md:gap-16 gap-6 flex-col items-center md:flex-row"
        v-show="NavbarShow"
      >
        <router-link active-class=" underline" to="/">Home</router-link>
        <button class="cursor-pointer" @click="FAQscroll('FAQS')">FAQ</button>
        <router-link active-class=" underline" :to="{ name: 'Contact' }"
          >Contact</router-link
        >
      </div>
      <div
        class="p-2 flex items-center justify-center flex-col md:flex-row gap-3"
      >
        <button
          class="bg-ultragray p-2 w-25 rounded-sm cursor-pointer"
          @click="BtnLogin"
        >
          Log In
        </button>
        <div class="flex items-center">
          <button class="cursor-pointer" @click="toggleDark()">
            <Sun class="duration-300 ease-in-out" v-if="DarkModeBtn" />
            <Moon class="duration-300 ease-in-out" v-else />
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center rotate-90">
      <div class="inline md:hidden" @click="CloseNavbar">
        <button class="cursor-pointer">|||</button>
      </div>
    </div>
  </nav>
</template>
