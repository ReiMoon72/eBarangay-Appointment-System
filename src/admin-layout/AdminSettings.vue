<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const DarkMude = ref(true);

//For Dark Mdoe
const DarkModeBtn = () => {
  const darkIs = document.documentElement.classList.toggle("dark");

  DarkMude.value = !DarkMude.value;
  localStorage.setItem("theme", darkIs ? "darkIs" : "light");
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "darkIs") {
    document.documentElement.classList.add("darkIs");
    DarkModeBtn.value = false;
  } else {
    document.documentElement.classList.remove("darkIs");
    DarkModeBtn.value = true;
  }
});
</script>

<template>
  <header class="font-inter p-3">
    <div>
      <b class="text-2xl">Settings</b>
    </div>
  </header>
  <hr />

  <header class="font-inter p-3">
    <div class="text-2xl">
      <p>Dark Mode</p>
    </div>
  </header>

  <main class="font-inter p-2">
    <div class="flex gap-10 items-center">
      <div>
        <button
          class="text-white bg-grayewan p-1.5 w-30 rounded-sm cursor-pointer"
          @click="DarkModeBtn()"
        >
          <p v-if="DarkMude">Dark Mode</p>
          <p v-else>Light Mode</p>
        </button>
      </div>
    </div>
  </main>
</template>
