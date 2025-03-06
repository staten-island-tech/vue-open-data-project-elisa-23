<template>
    <PickSide />
</template>

<script setup>
import PickSide from '@/components/PickSide.vue';
import {data, getData} from '@/components/functions/getdata.js'

onMounted(() => {
    getData();
});
</script>

<style scoped>

</style>