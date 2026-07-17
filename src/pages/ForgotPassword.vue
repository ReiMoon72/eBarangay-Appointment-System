<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ForgetPassword } from "../services/url.js";

const router = useRouter();

const EmailInput = ref("");
const ConfirmPassword = ref("");
const NewPassword = ref("");

const BackToLogin = () => {
  router.push("/login");
};

const NewPassowrdBtn = async () => {
  try {
    const response = await ForgetPassword.patch(`/forgotpassword`, {
      NewPassword: NewPassword.value,
      EmailInput: EmailInput.value,
    });
  } catch (error) {
    console.log("Error has Occured", error);
  }
  if (!EmailInput.value.includes("@")) {
    alert("Email Incorrect include a @ First");
  }
  if (!NewPassowrdBtn !== ConfirmPassword) {
    alert(" Password Doesn't match");
  }
};
</script>

<template>
  <header class="font-inter p-5">
    <div>
      <button
        class="bg-red-900 p-1.5 text-white w-30 rounded-sm cursor-pointer duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-800"
        @click="BackToLogin"
      >
        Back to log in
      </button>
    </div>
  </header>

  <main class="font-inter p-2 text-white">
    <div class="bg-graybg p-5 w-200 m-auto">
      <div class="flex flex-col items-center justify-center p-2">
        <b class="text-2xl">Enter Your Email</b>
        <p class="text-smool">Enter email to have a new password.</p>
      </div>
      <form>
        <div class="flex flex-col justify-center items-center gap-3">
          <label>Enter Your Email: </label>
          <input
            class="p-0.5 rounded-sm border-2 field-sizing-fixed w-70"
            type="email"
            v-model="EmailInput"
          />
          <label>New Password: </label>
          <input
            type="password"
            v-model="NewPassword"
            class="p-0.5 rounded-sm border-2 field-sizing-fixed w-70"
          />
          <label>Confirm Passowrd</label>
          <input
            type="password"
            class="p-0.5 rounded-sm border-2 field-sizing-fixed w-70"
            v-model="ConfirmPassword"
          />
          <button
            class="bg-blue-900 p-1.5 w-30 rounded-sm cursor-pointer duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800"
            @click="NewPassowrdBtn"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  </main>
</template>
