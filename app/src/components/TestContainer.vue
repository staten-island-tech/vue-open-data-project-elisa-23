<template>
  <div style="width: 600px; height: 400px;">
    <BarChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import BarChart from "./BarChart.vue";

const chartData = reactive({
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
});

const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false,
});
</script>

<style scoped>

</style>