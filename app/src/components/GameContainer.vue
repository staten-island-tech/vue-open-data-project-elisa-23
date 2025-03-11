<template>
    <GameSetup v-if="gameInProgress" />
</template>

<script setup>
import GameSetup from '@/components/GameSetup.vue';
import { selected } from './functions/selection.js';
import { watch, ref, onMounted } from 'vue';

const gameInProgress = ref(true);
const gameEnded = ref(false);

function updateValues(){
    if (gameInProgress.value === true) {
        gameInProgress.value = false;
        gameEnded.value = true;
    } else {
        gameInProgress.value = true;
        gameEnded.value = false;
    }
}

onMounted(() => {
    gameInProgress.value = true;
    gameEnded.value = false;
})

watch(selected, () => {
    updateValues();
});


</script>

<style scoped>

</style>