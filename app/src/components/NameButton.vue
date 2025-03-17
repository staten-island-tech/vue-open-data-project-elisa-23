<template>
    <button class="btn border-0 shadow-none bg-[#cdc0b0] hover:bg-[#cee5ed] w-[9%] h-[7%]">
        <p>{{ name }}</p>
    </button>
</template>

<script setup>
defineProps({
    name: String
})
</script>

<style scoped>

</style>