<template>
  <div class="flex justify-center items-center flex-col flex-wrap m-5 h-full w-full">
      <RouterLink to="/game" class="w-[15%] h-[6%] mb-4">
      <button class="btn shadow-lg border-1 shadow-[#FDFBD7] border-[#FDFBD7] bg-[#756D47] text-[#FDFBD7] w-full h-full">
        PLAY
      </button>
    </RouterLink>
    <RouterLink to="/charts" class="w-[15%] h-[6%] mb-4">
      <button class="btn shadow-lg border-1 shadow-[#FDFBD7] border-[#FDFBD7] bg-[#756D47] text-[#FDFBD7] w-full h-full">
        STATS
      </button>
    </RouterLink>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { getData } from '@/components/functions/getData.js';
import { onMounted } from 'vue';

onMounted(() => {
  getData();
})
</script>

<style scoped>

</style>