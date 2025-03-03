<template>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="/charts">charts</RouterLink>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>

</style>