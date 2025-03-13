<template>
    <div class="flex flex-wrap flex-row h-full w-full">
        <GameCards v-for="name in randNames" :name="name" :key="name.nm" />
    </div>
</template>

<script setup>
import { data, getData } from '@/components/functions/getdata.js';
import { onMounted, reactive } from 'vue';
import { selectedNames } from './functions/selection';
import GameCards from '@/components/GameCards.vue';

let randNames = reactive([]);
function getRandNames() {
    const length = data.length;
    while ( randNames.length !== 2 ){
        let rand = Math.floor(Math.random() * (length-1));
        if (randNames.includes(data[rand]) === false){
            randNames.push(data[rand]);
        }
    }
    selectedNames.length = 0;
    randNames.forEach((name) => {
        selectedNames.push(name);
    })
}

onMounted(async() => {
    await getData();
    getRandNames();
});

</script>

<style scoped>
</style>