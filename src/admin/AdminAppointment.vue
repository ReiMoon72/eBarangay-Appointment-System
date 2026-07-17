<script setup>
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "../store/authentication";
import { FetchAdminAppointment, ChangeStatusUser } from "../services/url.js";
import { ref, onMounted, watch } from "vue";

const router = useRouter();
const route = useRoute();

const DataFound = ref(false);
const error = ref(null);
const Loading = ref(false);
const SearchName = ref("");
const UserAppointID = route.params.UserAppointID;

const AdminFetchAppoints = ref([]);

//Formating the Date & Time
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-PH");
};

const formatTime = (time) => {
  return new Date(time).toLocaleTimeString("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

onMounted(async () => {
  if (Loading.value) return;

  Loading.value = true;
  try {
    const response = await FetchAdminAppointment();
    if (response.data && Array.isArray(response.data.data)) {
      AdminFetchAppoints.value = response.data.data;
    } else {
      AdminFetchAppoints.value = [];
      error.value = "Invalid data format";
    }
  } catch (error) {
    console.error(error);
    AdminFetchAppoints.value = [];
    error.value = error.message;
  } finally {
    Loading.value = false;
  }
});

//For Change Status
const Approve = async (id) => {
  try {
    const response = await ChangeStatusUser.patch(`/admin/appointment/${id}`, {
      Status: "Confirm",
    });
    if (response.status === 200 || response.status === 201) {
      const target = AdminFetchAppoints.value.find(
        (a) => a.UserAppointID === id,
      );
      if (target) target.Status = "Confirm";
    }
  } catch (error) {
    console.log(error);
  }
};

//For Reject
const Reject = async (id) => {
  try {
    const response = await ChangeStatusUser.patch(`/admin/appointment/${id}`, {
      Status: "Rejected",
    });
    if (response.status === 200 || response.status === 201) {
      const target = AdminFetchAppoints.value.find(
        (a) => a.UserAppointID === id,
      );
      if (target) target.Status = "Rejected";
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <header class="font-inter p-5">
    <div>
      <b class="text-2xl">All Appointments</b>
      <p class="text-smool">View and manage the appointments.</p>
    </div>
  </header>
  <hr />

  <main class="font-inter p-2">
    <div class="flex justify-between items-center p-2">
      <p class="w-22 text-center">Fullname</p>
      <p class="text-center">Service</p>
      <p class="w-32 text-center">Phone Number</p>
      <p class="w-25">Date & Time</p>
      <p class="w-48 text-center">Email</p>
      <p class="w-32">Purpose</p>
      <p class="w-24">Status</p>
      <p>Uprove || Not</p>
    </div>
  </main>
  <hr class="w-full" />

  <main class="font-inter p-2">
    <div class="p-2 flex flex-col justify-between items-center gap-4">
      <div class="flex justify-center items-center" v-if="Loading">
        <p>Currently On Loading...</p>
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="AdminFetchAppoints.length === 0"
      >
        <p>No Data Found...</p>
      </div>
      <!--Fetch All-->
      <div
        class="flex justify-between items-center p-2"
        v-for="AdminFetchAppoint in AdminFetchAppoints"
        :key="AdminFetchAppoint.UserAppointID"
      >
        <div>
          <div class="flex justify-between items-center gap-6">
            <p class="w-22">{{ AdminFetchAppoint.Fullname }}</p>
            <p class="w-22">{{ AdminFetchAppoint.Services }}</p>
            <p class="w-32">{{ AdminFetchAppoint.Phonenumber }}</p>
            <p class="w-32">
              {{ formatDate(AdminFetchAppoint.Dates) }} <br />
              {{ formatTime(AdminFetchAppoint.Time) }}
            </p>
            <p class="w-48 truncate">{{ AdminFetchAppoint.Email }}</p>
            <p class="w-32 truncate">{{ AdminFetchAppoint.Purpose }}</p>
            <p class="w-24">{{ AdminFetchAppoint.Status }}</p>
            <div class="flex flex-col justify-center items-center gap-2">
              <button
                class="bg-blue-900 text-white p-1 w-20 rounded-sm cursor-pointer"
                @click="Approve(AdminFetchAppoint.UserAppointID)"
              >
                Approve
              </button>
              <button
                class="bg-red-900 text-white p-1 w-20 rounded-sm cursor-pointer"
                @click="Reject(AdminFetchAppoint.UserAppointID)"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
