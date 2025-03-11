<template>
    <img src="/crib.png" alt="a crib imgage" class="absolute z-[999] bottom-[-10%] left-0 right-0 ml-auto mr-auto">
    <div v-if="loaded" class="flex flex-wrap flex-row">
        <button :value="randName[0]" :v-model="selected" class="btn w-[50%] h-screen bg-[#e2d3cd] shadow-none border-none">
            <h1 class="text-5xl text-[#615049] font-extrabold">{{ randNames[0].nm }}</h1>
        </button>
        <div class="btn w-[50%] h-screen bg-[#f5f5dc] shadow-none border-none">
            <h1 @click.prevent.once="" class="text-5xl text-[#615049] font-extrabold">{{ randNames[1].nm }}</h1>
        </div>
    </div>
</template>

<script setup>
import { data, getData } from '@/components/functions/getData.js';
import { onMounted, reactive, ref } from 'vue';
import { selected } from './variables/gameVars';

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

let loaded = ref(false);
onMounted(async() => {
    await getData();
    loaded.value = true;
    getRandNames();
});

</script>

<style scoped>

</style>