<script setup>
import { Megaphone } from "@lucide/vue";
import { ref } from "vue";
import { AnnouncementPosting } from "../services/url.js";

const AnnouncementTItle = ref("");
const AnnouncementMessage = ref("");

async function PostAnnouncemetn() {
  try {
    if (!AnnouncementTItle || !AnnouncementMessage) {
      alert("There was a Plank input");
    }
    const res = await AnnouncementPosting.post("/admin/announcement-post", {
      AnnouncementTItle: AnnouncementTItle.value,
      AnnouncementMessage: AnnouncementMessage.value,
    });
  } catch (error) {
    console.log(error);
  }

  AnnouncementTItle.value = "";
  AnnouncementMessage.value = "";
}
</script>

<template>
  <header class="font-inter p-2">
    <b class="text-2xl">Post Announcement</b>
    <p class="text-smool">Post a announcement to inform the residence.</p>
  </header>

  <main class="font-inter p-5">
    <div class="flex justify-between">
      <form @click.prevent class="border-2 p-3 w-130 rounded-sm">
        <b class="text-2xl">Announcement Details</b>
        <div class="flex flex-col p-2 gap-5">
          <b>Title *</b>
          <input
            class="border-2 border-grayewan p-1 rounded-md field-sizing-fixed w-100"
            type="text"
            placeholder="Enter Announcement Title"
            v-model="AnnouncementTItle"
          />
          <b>Message *</b>
          <textarea
            v-model="AnnouncementMessage"
            class="border-2 border-grayewan p-1 rounded-md field-sizing-content w-100 h-25"
          ></textarea>
          <div>
            <button
              class="bg-blue-900 p-1 w-30 text-white rounded-sm cursor-pointer hover:bg-blue-800 duration-300 ease-in-out"
              @click="PostAnnouncemetn"
            >
              Post
            </button>
          </div>
        </div>
      </form>
      <div class="border-2 p-4 rounded-sm">
        <b class="text-2xl">Announcement Preview</b>
        <div class="flex flex-col border-2 p-5 w-130 gap-5">
          <div class="flex items-center gap-3">
            <Megaphone
              size="60"
              color="white"
              class="bg-blue-900 rounded-full p-3"
            />
            <b>{{ AnnouncementTItle }}</b>
          </div>
          <hr />
          <div class="field-sizing-content">
            <p class="wrap-break-word">
              {{ AnnouncementMessage }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
