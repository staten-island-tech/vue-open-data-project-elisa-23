<template>
  <RouterLink to="/">
    <button class="btn shadow-lg border-1 shadow-[#FDFBD7] border-[#FDFBD7] bg-[#756D47] text-[#FDFBD7] m-2">
      HOME
    </button>
  </RouterLink>
  <RouterLink to="/charts">
    <button class="btn shadow-lg border-1 shadow-[#FDFBD7] border-[#FDFBD7] bg-[#756D47] text-[#FDFBD7] m-2">
      CHARTS
    </button>
  </RouterLink>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>

</style>