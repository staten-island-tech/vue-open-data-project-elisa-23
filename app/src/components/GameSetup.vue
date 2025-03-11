<template>
    <div v-if="loaded" class="flex flex-wrap flex-row h-full w-full">
        <NameOptions v-if="randomSelected" v-for="name in randNames" :name="name" :key="name.nm" />
    </div>
</template>

<script setup>
import { data, getData } from '@/components/functions/getdata.js';
import { onMounted, reactive, ref } from 'vue';
import { selected, update, randNames } from './functions/selection';
import NameOptions from '@/components/NameOptions.vue';

let selectedNames = reactive([]);
const genders = ["FEMALE", "MALE"];
function getRandNames() {
    const length = data.length;
    let genderRand = Math.floor(Math.random() * 1);
    let gender = genders[genderRand];
    while ( randNames.length !== 2 ){
        let rand = Math.floor(Math.random() * (length-1));
        console.log(rand);
        console.log(data[rand]);
        if (selectedNames.includes(data[rand]) === false){
            if ((data[rand]).gndr === gender) {
                selectedNames.push(data[rand]);
            }
        }
        
    }
    randNames = selectedNames;
}

let loaded = ref(false);
let randomSelected = ref(false);
onMounted(async() => {
    await getData();
    loaded.value = true;
    await getRandNames();
    randomSelected.value = true;
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