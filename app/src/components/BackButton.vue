<template>
    <div class="tooltip tooltip-right bg-transparent h-[5%] w-[5%] shadow-transparent absolute left-0 top-[3%]">
        <div class="tooltip-content bg-transparent">
            <div class="animate-bounce text-[#352f46] text-[0.625rem] font-black">Go Back</div>
        </div>
        <RouterLink to="/">
            <button class="w-full h-full">
            <img src="/back.png" alt="Back Button" class="place-self-center h-[90%] w-[55%]">
            </button>
        </RouterLink>
    </div>
    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>

</style>