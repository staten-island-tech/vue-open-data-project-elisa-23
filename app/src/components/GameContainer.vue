<template>
        <div v-if="randNames" class="flex flex-wrap flex-row">
        <div class="w-[50%] h-screen bg-[#e2d3cd]">
            <h1>{{ randNames[0].nm }}</h1>
        </div>
        <div class="w-[50%] h-screen bg-[#f5f5dc]">
            <h1>{{ randNames[1].nm }}</h1>
        </div>
    </div>
</template>

<script setup>
import {data, getData} from '@/components/functions/getdata.js';
import { onMounted, reactive } from 'vue';

let randNames = reactive([]);
function getRandNames() {
    const length = data.length;
    for ( let i=0; i<2; i++ ){
        let rand = Math.floor(Math.random() * length);
        console.log(rand);
        while (randNames.includes(data[rand]) === true){
            rand = Math.floor(Math.random() * length);
        }
        randNames.push(data[rand]);
    }
}

onMounted(() => {
    getData();
    getRandNames();
});

</script>

<style scoped>

</style>