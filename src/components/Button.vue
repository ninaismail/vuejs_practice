<template>
    <button class="text-center px-4 py-3 rounded-full shadow-lg"
    :class="{ 'bg-black text-white' : isPrimary }">{{ message }}</button>
</template>

<script setup>
const props = defineProps({
    message: String,
    isPrimary: Boolean
})
</script>