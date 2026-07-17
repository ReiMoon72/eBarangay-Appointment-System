<script setup>
import { ref, onMounted } from "vue";
import { Megaphone } from "@lucide/vue";
import { AnnouncementGetAdmin } from "../services/url.js";

const AnnouncementLoading = ref(false);
const FetchAnnounceFal = ref(false);
const error = ref(null);

const GetAnnouncementFetchs = ref([]);

//Fetching the data from Announcement
onMounted(async () => {
  //Preventing a Multiple Calls
  if (AnnouncementLoading.value) return;

  AnnouncementLoading.value = true;
  try {
    const repsonsive = await AnnouncementGetAdmin();

    if (repsonsive.data && Array.isArray(repsonsive.data.data)) {
      GetAnnouncementFetchs.value = repsonsive.data.data;
    } else {
      GetAnnouncementFetchs.value = [];
      error.value = "Invalid data format";
    }
  } catch (error) {
    console.log(error);
    GetAnnouncementFetchs.value = [];
    error.value = error.message;
  } finally {
    AnnouncementLoading.value = false;
  }
});
</script>

<template>
  <header class="font-inter p-2">
    <b class="text-2xl">All Announcement Made</b>
    <p class="text-smool">View all the announcement you made</p>
  </header>

  <hr />

  <main class="font-inter">
    <div>
      <div
        v-if="AnnouncementLoading"
        class="flex items-center justify-center p-5"
      >
        <p>Loading Announcements...</p>
      </div>

      <div
        class="flex items-center justify-center p-5"
        v-else-if="GetAnnouncementFetchs.length === 0"
      >
        <p>No Data Announcement Fetch...</p>
      </div>
      <div
        v-for="GetAnnouncementFetch in GetAnnouncementFetchs"
        :key="GetAnnouncementFetch.AnnouncementID"
      >
        <div class="p-3 flex items-center gap-8 bg-grayewan text-white">
          <Megaphone
            size="60"
            color="white"
            class="bg-blue-900 rounded-full p-3"
          />
          <div class="flex flex-col gap-2">
            <b class="text-2xl">{{ GetAnnouncementFetch.AnnouncementTitle }}</b>
            <p>{{ GetAnnouncementFetch.AnnouncementMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
