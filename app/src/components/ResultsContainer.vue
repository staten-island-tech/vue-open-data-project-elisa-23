<template>
    <div class="w-full h-screen flex">
        <div class="w-[75%] h-[70%] bg-[#f6f2ef] self-center justify-self-center m-auto rounded-md p-3 flex flex-wrap">
            <div class="text-left text-[#352f46] place-self-start w-[35%]">
                <h2 class="text-4xl montserrat text-center pt-8">YOU {{ results }}!</h2>
                <br>
                <ResultsText v-for="name in selectedNames" :name="name" :key="name.nm" />
                <br>
                <h2 class="text-2xl montserrat text-center pt-8">SCORE: {{ score }}</h2>
                <h4 class="text-sm montserrat text-center font-extralight">HIGH SCORE: {{ highScore }}</h4>
                <br>
                <div class="flex flex-wrap flex-col items-center w-full">
                    <button @click="selected = ''" class="btn bg-[#f6f2ef] text-[#352f46]">CONTINUE</button>
                </div>
            </div>
            <div class="w-[65%]">
                <BarChart :chart-data="chartData" :chart-options="chartOptions" class="h-full w-full self-center" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { selected, selectedNames } from './functions/selection';
import { score, highScore } from './functions/otherVar.js';
import ResultsText from './ResultsText.vue';
import BarChart from "./BarChart.vue";
import { ref, onMounted, watch, reactive } from 'vue';

const chartOptions = reactive({
responsive: true,
maintainAspectRatio: false,
});

const chartData = reactive({
  labels: [selectedNames[0].nm, selectedNames[1].nm],
  datasets: [
    {
      label: "Count",
      data: [selectedNames[0].cnt, selectedNames[1].cnt],
      backgroundColor: "#cdc0b0",
      borderWidth: 0,
    },
  ],
});

const results = ref('');
function calc() {
    let max = 0;
    let rank = 0;
    let betterName = '';
    selectedNames.forEach((name) => {
        if (parseInt(name.cnt) > max) {
            betterName = name.nm;
            max = name.cnt;
            rank = name.rnk;
        } else if (parseInt(name.cnt) === max) {
            if (name.rnk < rank) {
                betterName = name.nm;
                max = name.cnt;
                rank = name.rnk;
            } else if (name.rnk === rank) {
				 betterName = selected.value;
            }
        }
    });
    if (betterName === selected.value) {
        results.value = 'WIN';
        score.value ++;
        if (score.value > highScore.value) {
            highScore.value = score.value;
        }
    } else {
        results.value = 'LOSE';
        score.value = 0;
    }
}

onMounted(() => {
    calc();
})

watch(selected, () => {
	calc();
})
</script>

<style scoped>

</style>