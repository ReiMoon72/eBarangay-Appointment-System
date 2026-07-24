<script setup>
import { ref, onMounted } from "vue";
import UserNavbar from "../components/UserNavbar.vue";
import { File } from "@lucide/vue";
import { AnnouncementFetchUserSide } from "../services/url.js";

const Announcements = ref([]);
const Loading = ref(false);
const error = ref(null);

onMounted(async () => {
  //Prevent a infinite callback(i guest) from backend
  if (Loading.value) return;

  Loading.value = true;
  try {
    const resultFatch = await AnnouncementFetchUserSide();

    if (resultFatch.data && Array.isArray(resultFatch.data.data)) {
      Announcements.value = resultFatch.data.data;
    } else {
      Announcements.value = [];
      error.value = "There are a error";
    }
  } catch (error) {
    console.log("There was a error", error);
    Announcements.value = [];
    error.value = error.value;
  } finally {
    Loading.value = false;
  }
});
</script>

<template>
  <UserNavbar />

  <header class="font-inter p-2">
    <b class="text-2xl">Announcement Board</b>
    <p class="text-semi">
      This site where you can see the old or past announcement of the barangay
    </p>
  </header>

  <!-- <main class="font-inter p-2">
    <div class="bg-grayewan rounded-sm p-3">
      <div class="flex flex-col gap-5">
        <div>
          <b class="text-2xl">Announcement Board</b>
        </div>
        <div v-if="Loading">
          <p>Loading...</p>
        </div>
        <div v-else-if="Announcements.length === 0">
          <p>There Are no Announcement</p>
        </div>
        <div
          v-else
          v-for="Announcement in Announcements"
          :key="Announcement.AnnouncementID"
        >
          <div class="flex flex-col gap-2">
            <b>{{ Announcement.AnnouncementTitle }}</b>
            <hr />
            <p>{{ Announcement.AnnouncementMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </main> -->

  <main class="font-inter">
    <div class="bg-grayewan p-2 flex flex-col gap-2">
      <div v-if="Loading" class="flex items-center justify-center p-5">
        <p>Loading Announcements...</p>
      </div>
      <div
        class="flex items-center justify-center p-5"
        v-else-if="Announcements.length === 0"
      >
        <p>No Data Announcement Fetch...</p>
      </div>
      <div
        v-for="Announcement in Announcements"
        :key="Announcement.AnnouncementID"
      >
        <div class="p-3 flex items-center gap-8 text-white">
          <File size="60" color="white" class="bg-blue-900 rounded-full p-3" />
          <div class="flex flex-col gap-2">
            <b>{{ Announcement.AnnouncementTitle }}</b>
            <hr />
            <p>{{ Announcement.AnnouncementMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
