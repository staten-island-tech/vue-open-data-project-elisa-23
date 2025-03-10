<template>
        <div v-if="randNames" class="flex flex-wrap flex-row">
        <div class="w-[50%] h-screen bg-[#e2d3cd]">
            <h1>{{ randNames[0] }}</h1>
        </div>
        <div class="w-[50%] h-screen bg-[#f5f5dc]">
            <h1>{{ randNames[1] }}</h1>
        </div>
    </div>
</template>

<script setup>
import {data} from '@/components/functions/getData.js';
import { onMounted, reactive } from 'vue';

let randNames = reactive([]);
const genders = ["FEMALE", "MALE"];
function getRandNames() {
    const length = data.length;
    let genderRand = Math.floor(Math.random() * 1);
    let gender = genders[genderRand];
    while ( randNames.length !== 2 ){
        let rand = Math.floor(Math.random() * (length-1));
        console.log(rand);
        console.log(data[rand]);
        if (randNames.includes(data[rand]) === false){
            if ((data[rand]).gndr === gender) {
                randNames.push(data[rand]);
            }
        }
        
    }
    console.log(randNames);
}

onMounted(() => {
    getRandNames();
});

</script>

<style scoped>

</style>