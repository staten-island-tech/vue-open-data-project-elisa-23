<template>
    <div class="h-[70%] w-[65%] bg-[#f6f2ef] rounded-md absolute right-[1%] top-[2%] text-[#352f46]">
        <div class="flex flex-wrap flex-row h-[70%] w-full p-[1%] overflow-y-scroll">
            <NameButton v-if="loaded" @click="selectedName = name" v-for="name in filteredData" :name="name" :key="name" class="m-[1%] montserrat" />
        </div>
        <div class="bg-[#e9e9e2] m-[2%] w-[96%] h-[23%] rounded-md">
            <p class="montserrat text-sm font-thin p-[2%] flex justify-between"><span class="text-left">SELECTED: {{ selectedName }}</span><span class="text-right">{{ selectedEth }}</span></p>
            <p class="montserrat text-sm font-thin p-[2%]">CHART: {{ selectedChart }}</p>
            <button @click="clear" class="relative bottom-[25%] right-[-89.5%] montserrat font-thin text-sm btn bg-[#cdc0b0] hover:bg-[#cee5ed] w-[10%] h-[30%] border-0 shadow-none">clear</button>
        </div>
    </div>
    <div class="h-[96%] w-[32%] bg-[#f6f2ef] rounded-md absolute left-[1%] top-[2%] p-[1%]">
        <BarChart :key="chartKey" v-if="BarSelected" :chart-data="barData" :chart-options="barOptions" class="self-center h-[98%] w-[98%]" />
    </div>
    <div class="h-[24%] w-[65%] bg-[#f6f2ef] rounded-md absolute right-[1%] bottom-[2%] flex flex-wrap flex-row text-[#352f46]">
        <div class="bg-[#e9e9e2] m-[2%] pt-[3%] h-[82%] w-[23%] rounded-md flex flex-col flex-wrap justify-items-center items-center">
            <button @click="selectedChart = 'PIE'; BarSelected = false" class="btn border-0 shadow-none bg-[#cdc0b0] hover:bg-[#cee5ed] w-[80%] h-[30%]">
                <p>PIE</p>
            </button>
            <br>
            <button @click="selectedChart = 'BAR'; BarSelected = true" class="btn border-0 shadow-none bg-[#cdc0b0] hover:bg-[#cee5ed] w-[80%] h-[30%]">
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
import { getData,getFilteredData, filteredData, data } from './functions/getdata.js';
import { onMounted, ref, watch, reactive } from 'vue';
import NameButton from './NameButton.vue';
import BarChart from './BarChart.vue';
import PieChart from './PieChart.vue';

const selectedName = ref('');
const selectedChart = ref('');
const selectedEth = ref('');
const loaded = ref(false);

const nameSelected = ref(false);
const ethSelected = ref(false);
const BarSelected = ref(false);

const chartKey = ref(0);

const barData = reactive({
  labels: [],
  datasets: [
  ],
});

const barOptions = reactive({
responsive: true,
maintainAspectRatio: false,
plugins: {
    legend: {
        display: false
    }
}
});

function getResultantData() {
    barData.labels = [];
    barData.datasets = [];
    let label = '';
    let resultantData = [];
    if (selectedName.value !== '') {
        label += selectedName.value;
        let fillerData = data.filter((name) => name.nm === selectedName.value);
        resultantData = fillerData;
    } 
    if (selectedEth.value !== '') {
        label += (' ' + selectedEth.value);
        if (resultantData.length !== 0) {
            resultantData = resultantData.filter((name) => name.ethcty === selectedEth.value);
        } else {
            resultantData = data.filter((name) => name.ethcty === selectedEth.value);
        }
    }
    barData.labels.push(label);
    resultantData.forEach((name) => {
        if (selectedName.value !== '') {
            barData.datasets.push({
            label: `${name.ethcty} COUNT`,
            data: [name.cnt],
            backgroundColor: "#cdc0b0",
            borderWidth: 0,
        });
        } else {
            barData.datasets.push({
            label: `${name.nm} COUNT`,
            data: [name.cnt],
            backgroundColor: "#cdc0b0",
            borderWidth: 0,
        });
        }
    });
    chartKey.value++;
}

function clear() {
    selectedName.value = '';
    selectedChart.value = '';
    selectedEth.value = '';
    nameSelected.value = false;
    ethSelected.value = false;
    BarSelected.value = false;
}

function refreshData(option) {
    if (option === 'name') {
        nameSelected.value = true;
        if (selectedName.value === '') {
            nameSelected.value = false;
        }
    } else {
        ethSelected.value = true;
        if (selectedEth.value === '') {
            ethSelected.value = false;
        }
    }
}

watch(selectedEth, () => {
    refreshData('eth');
});

watch(selectedName, () => {
    refreshData('name');
});

watch([selectedEth, selectedName], () => {
    getResultantData();
})

onMounted(async() => {
    await getData();
    await getFilteredData('nm');
    loaded.value = true;
});

</script>

<style scoped>

</style>