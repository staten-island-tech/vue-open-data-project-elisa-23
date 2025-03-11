<template>
    <div class="flex flex-wrap flex-row h-full w-full">
        <NameOptions v-for="name in randNames" :name="name" :key="name.nm" />
    </div>
</template>

<script setup>
import { data, getData } from '@/components/functions/getdata.js';
import { onMounted, reactive, ref } from 'vue';
import { selected, selectedNames } from './functions/selection';
import NameOptions from '@/components/NameOptions.vue';

let randNames = reactive([]);
const genders = ["FEMALE", "MALE"];
function getRandNames() {
    const length = data.length;
    let genderRand = Math.floor(Math.random() * 1);
    let gender = genders[genderRand];
    while ( randNames.length !== 2 ){
        let rand = Math.floor(Math.random() * (length-1));
        if (randNames.includes(data[rand]) === false){
            if ((data[rand]).gndr === gender) {
                randNames.push(data[rand]);
            }
        }
        
    }
    selectedNames.length = 0;
    for (name in randNames) {
        selectedNames.push(name);
    }
}

onMounted(async() => {
    await getData();
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