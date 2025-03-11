<template>
    <GameSetup v-if="gameInProgress" />
</template>

<script setup>
import GameSetup from '@/components/GameSetup.vue';
import { watch } from 'vue';

let gameInProgress = true;
let gameEnded = false;

</script>

<style scoped>

</style>