<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();

const BackInHome = () =>{
    router.push({ name: "Home"})
}

</script>

<template>

    <h1>Hello User</h1>

    <button class=" bg-blue-950 p-2 text-white" @click="BackInHome">
        Log Out
    </button>
</template>