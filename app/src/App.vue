<template>
  <RouterLink to="/">
    HOME
  </RouterLink>
  <RouterLink to="/charts">
    CHARTS
  </RouterLink>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>

</style>