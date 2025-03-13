<template>
    <h4 class="pl-6 montserrat text-md">{{ name.nm }}</h4>
    <p class="pl-6 montserrat text-sm font-thin">GENDER: {{ name.gndr }}</p>
    <p class="pl-6 montserrat text-sm font-thin">ETHNICITY: {{ name.ethcty }}</p>
    <p class="pl-6 montserrat text-sm font-thin">RANK IN ETHNICITY: {{ name.rnk }}</p>
    <p class="pl-6 montserrat text-sm font-thin">COUNT: {{ name.cnt }}</p>
    <br>
</template>

<script setup>
defineProps({
    name: Object
})
</script>

<style scoped>

</style>