<template>
    <div class="h-[70%] w-[65%] bg-[#f6f2ef] rounded-md absolute right-[1%] top-[2%] ">
        <div class="flex flex-wrap flex-row h-[70%] w-full p-[1%] overflow-y-scroll">
            <NameButton @click="selectedName = name" v-for="name in filteredData" :name="name" :key="name" class="m-[1%] montserrat" />
        </div>
        <div class="bg-[#e9e9e2] m-[2%] w-[96%] h-[23%] rounded-md">
            <p class="montserrat text-sm font-thin p-[2%] flex justify-between"><span class="text-left">SELECTED: {{ selectedName }}</span><span class="text-right">{{ selectedEth }}</span></p>
            <p class="montserrat text-sm font-thin p-[2%]">CHART: {{ selectedChart }}</p>
        </div>
    </div>
    <div class="h-[96%] w-[32%] bg-[#f6f2ef] rounded-md absolute left-[1%] top-[2%]">

    </div>
    <div class="h-[24%] w-[65%] bg-[#f6f2ef] rounded-md absolute right-[1%] bottom-[2%] flex flex-wrap flex-row">
        <div class="bg-[#e9e9e2] m-[2%] pt-[3%] h-[82%] w-[23%] rounded-md flex flex-col flex-wrap justify-items-center items-center">
            <button @click="selectedChart = 'PIE'" class="btn border-0 shadow-none bg-[#cdc0b0] hover:bg-[#cee5ed] w-[80%] h-[30%]">
                <p>PIE</p>
            </button>
            <br>
            <button @click="selectedChart = 'BAR'" class="btn border-0 shadow-none bg-[#cdc0b0] hover:bg-[#cee5ed] w-[80%] h-[30%]">
                <p>BAR</p>
            </button>
        </div>
        <div class="bg-[#e9e9e2] m-[2%] pt-[3%] h-[82%] w-[69%] rounded-md flex flex-col flex-wrap justify-items-center items-center">
            <button @click="selectedEth = 'ASIAN AND PACIFIC ISLANDER'" class="btn border-0 shadow-none bg-[#cdc0b0] hover:bg-[#cee5ed] w-[45%] h-[30%]">
                <p>ASIAN AND PACIFIC ISLANDER</p>
            </button>
            <br>
            <button @click="selectedEth = 'HISPANIC'" class="btn border-0 shadow-none bg-[#cdc0b0] hover:bg-[#cee5ed] w-[45%] h-[30%]">
                <p>HISPANIC</p>
            </button>
            <br>
            <button @click="selectedEth = 'BLACK NON HISPANIC'" class="btn border-0 shadow-none bg-[#cdc0b0] hover:bg-[#cee5ed] w-[45%] h-[30%]">
                <p>BLACK NON HISPANIC</p>
            </button>
            <br>
            <button @click="selectedEth = 'WHITE NON HISPANIC'" class="btn border-0 shadow-none bg-[#cdc0b0] hover:bg-[#cee5ed] w-[45%] h-[30%]">
                <p>WHITE NON HISPANIC</p>
            </button>
            <br>
        </div>
    </div>
</template>

<script setup>
import { getData,getFilteredData, filteredData } from './functions/getdata.js';
import { onMounted, ref } from 'vue';
import NameButton from './NameButton.vue';

const selectedName = ref('');
const selectedChart = ref('');
const selectedEth = ref('');

onMounted(async() => {
    await getData();
    await getFilteredData('nm');
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