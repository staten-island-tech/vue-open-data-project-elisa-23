<template>
    <!-- <div class="w-full h-full absolute overflow-hidden">
        <img src="/crib.png" alt="a crib imgage" class="absolute z-[999] bottom-[-20%] left-0 right-0 ml-auto mr-auto">
    </div> -->
    <div v-if="loaded" class="flex flex-wrap flex-row h-full w-full">
        <div class="flex flex-col p-[5%] items-center w-[35%] h-[65%] rounded-4xl bg-gradient-to-b from-[#eedfcc] via-[#eedfcc] to-[#cdc0b0] hover:from-[#cee5ed] hover:via-[#cee5ed] shadow-none border-none m-auto">
            <h3 class="montserrat text-[4.5rem] font-bold text-[#352f46] mb-[10%]">{{ randNames[0].nm }}</h3>
            <div class="bg-gradient-to-r from-[#f3eae0] via-transparent to-[#f3eae0] h-[15%] w-[110%] rounded-full flex flex-row items-center pl-[5%] pr-[5%] mb-[10%]">
                <div class="text-[0.8rem] montserrat text-left w-[25%]">ethnicity</div>
                <div class="w-[50%] text-center">{{ randNames[0].ethcty }}</div>
                <div class="text-[0.8rem] montserrat text-right w-[25%]">ethnicity</div>
            </div>
            <button @click="update(randNames[0])" class="bg-[#f3eae0] hover:bg-[#a0d8ef] h-[15%] w-[110%] rounded-full flex flex-row items-center pl-[5%] pr-[5%]">
                <div class="text-[1rem] montserrat text-center w-full">SELECT</div>
            </button>
        </div>
        <div class="flex flex-col p-[5%] items-center w-[35%] h-[65%] rounded-4xl bg-gradient-to-b from-[#eedfcc] via-[#eedfcc] to-[#cdc0b0] hover:from-[#cee5ed] hover:via-[#cee5ed] shadow-none border-none m-auto">
            <h3 class="montserrat text-[4.5rem] font-bold text-[#352f46] mb-[10%]">{{ randNames[1].nm }}</h3>
            <div class="bg-gradient-to-r from-[#f3eae0] via-transparent to-[#f3eae0] h-[15%] w-[110%] rounded-full flex flex-row items-center pl-[5%] pr-[5%] mb-[10%]">
                <div class="text-[0.8rem] montserrat text-left w-[25%]">ethnicity</div>
                <div class="w-[50%] text-center">{{ randNames[1].ethcty }}</div>
                <div class="text-[0.8rem] montserrat text-right w-[25%]">ethnicity</div>
            </div>
            <button @click="update(randNames[1])" class="bg-[#f3eae0] hover:bg-[#a0d8ef] h-[15%] w-[110%] rounded-full flex flex-row items-center pl-[5%] pr-[5%]">
                <div class="text-[1rem] montserrat text-center w-full">SELECT</div>
            </button>
        </div>
    </div>
</template>

<script setup>
import { data, getData } from '@/components/functions/getData.js';
import { onMounted, reactive, ref } from 'vue';
import { selected, update } from './functions/selection';

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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap');

.montserrat {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }
</style>