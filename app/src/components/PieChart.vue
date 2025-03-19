<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = reactive({
responsive: true,
maintainAspectRatio: false,
});

defineProps({
  chartData: Object
});
</script>

<style scoped>

</style>