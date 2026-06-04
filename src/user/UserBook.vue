<script setup>
import UserNavbar from "../components/UserNavbar.vue";
</script>

<template>
  <UserNavbar />

  <header class=" font-inter p-2">
    <div class="flex justify-baseline flex-col p-6">
      <p class="text-2xl"><b>Book Appointments</b></p>
      <p class="text-semi">
        Fill out the forms and send then wait for the response.
      </p>
    </div>
  </header>

  <main class=" font-inter p-2">
    <div class=" flex justify-between p-3">
      <p>1. Choose the service you want</p>
      <p>2. Select Time & Date</p>
      <p>3. Your Information</p>
      <p>4. Review & Confirm</p>
      <p>5. Confirmation</p>
    </div>
  </main>
</template>
