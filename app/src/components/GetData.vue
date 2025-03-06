<template>
</template>

<script setup>
import { onMounted } from 'vue';
import { data } from '@/variables/var';

async function getData() {
    try {
        let response = await fetch("https://data.cityofnewyork.us/resource/25th-nujf.json");
        if (response.status != 200) {       /* 200 = it works */
            throw new Error(response);
        } else {
            data.names = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
        alert("Apologies, the data has been lost. Please reboot.")
    }
}

onMounted(() => {
    getData();
});

</script>

<style scoped>

</style>