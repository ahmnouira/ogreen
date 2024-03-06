<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-[480px] px-4">
    <div class="flex items-center justify-end">
      <div class="flex flex-col mx-4">
        <p class="text-gray-200">{{ props.name }}</p>
        <p class="text-gray-500 text-xs">{{ props.plan }}</p>
      </div>
      <div class="rounded-full border-orange-700 border w-12 h-12">
        <img alt="" />
      </div>
    </div>
  </div>
</template>
