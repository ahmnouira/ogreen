<script setup>
import { computed } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  value: { type: String, required: true },
});

const title = computed(() => props.title + ":");
</script>

<template>
  <div class="flex">
    <p class="w-24 text-orange-700 text-lg">{{ title }}</p>
    <span class="text-gray-200">{{ props.value }}</span>
  </div>
</template>
