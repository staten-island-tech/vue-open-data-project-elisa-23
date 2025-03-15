<script setup>
import { defineProps } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

// Register necessary Chart.js modules
ChartJS.register(ArcElement, Tooltip, Legend);

// Define props for reusable data and options
defineProps({
  chartData: Object,
  chartOptions: Object,
});
</script>

<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>
