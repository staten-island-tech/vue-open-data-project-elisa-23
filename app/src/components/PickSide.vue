<template>
    <div class="flex flex-wrap flex-row">
        <div class="w-[50%] h-screen bg-[#e2d3cd]">
            <h1>{{ randName[0].nm }}</h1>
        </div>
        <div class="w-[50%] h-screen bg-[#f5f5dc]">
            <h1>{{ randName[1].nm }}</h1>
        </div>
    </div>
</template>

<script setup>
defineProps(
    {randName: Object}
)
</script>

<style scoped>

</style>