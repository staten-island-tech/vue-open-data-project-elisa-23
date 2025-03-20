<template>
  <div>
    <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
Chart as ChartJS,
Title,
Tooltip,
Legend,
BarElement,
CategoryScale,
LinearScale,
} from "chart.js";
import { reactive } from "vue";

/* Register required Chart.js components */
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

defineProps({
  chartData: Object, 
  chartOptions: Object
});
</script>
