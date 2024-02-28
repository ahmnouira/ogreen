<script setup lang="ts">
const props = defineProps({
    text: { type: String },
});
</script>

<template>
    <div class="h-36 flex justify-center items-center dark:bg-zinc-900">
        <h1 class="text-2xl font-semibold">{{ props.text }}</h1>
    </div>
</template>
