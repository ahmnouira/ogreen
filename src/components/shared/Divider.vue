<script setup lang="ts">
const props = defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div v-if="props.vertical" class="h-16 w-1 divider"></div>
  <div v-if="!props.vertical" class="h-1 w-full divider"></div>
</template>

<style scoped>
.divider {
  background-color: #27272a;
}
</style>
