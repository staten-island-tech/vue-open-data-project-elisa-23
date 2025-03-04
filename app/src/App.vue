<template>
  <div class="dropdown dropdown-hover dropdown-right">
    <div tabindex="0" role="button" class="btn m-1 h-12 w-14">
      <img src="/hamburger.png" alt="hamburger button" class="cover h-5 w-5">
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-black rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <RouterLink to="/">
          HOME
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/charts">
          CHARTS
        </RouterLink>
      </li>
    </ul>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>

</style>