<template>
    <div class="flex flex-col p-[5%] items-center w-[35%] h-[65%] rounded-4xl bg-gradient-to-b from-[#eedfcc] via-[#eedfcc] to-[#cdc0b0] hover:from-[#cee5ed] hover:via-[#cee5ed] shadow-none border-none m-auto">
        <h3 class="montserrat text-[4.5rem] font-bold text-[#352f46] mb-[10%]">{{ name.nm }}</h3>
        <div class="bg-gradient-to-r from-[#f3eae0] via-transparent to-[#f3eae0] h-[15%] w-[110%] rounded-full flex flex-row items-center pl-[5%] pr-[5%] mb-[10%]">
            <div class="text-[0.8rem] montserrat text-left w-[25%]">ethnicity</div>
            <div class="w-[50%] text-center">{{ name.ethcty }}</div>
            <div class="text-[0.8rem] montserrat text-right w-[25%]">ethnicity</div>
        </div>
        <button @click="update(name)" class="bg-[#f3eae0] hover:bg-[#a0d8ef] h-[15%] w-[110%] rounded-full flex flex-row items-center pl-[5%] pr-[5%]">
            <div class="text-[1rem] montserrat text-center w-full">SELECT</div>
        </button>
    </div>
</template>

<script setup>
defineProps({
    name: Object,
})
</script>

<style scoped>

</style>