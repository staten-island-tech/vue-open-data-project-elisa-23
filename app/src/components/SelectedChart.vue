<template>
  <div class="h-full w-[90%] self-cetner">
    <BarChart :chart-data="chartData" class="h-full w-full self-center" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import BarChart from "./BarChart.vue";
import { selectedNames } from "./functions/selection";

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
</script>

<style scoped>

</style>