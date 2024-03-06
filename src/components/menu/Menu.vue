<script setup lang="ts">
type Menu = {
  items: [];
};

const props = defineProps({
  title: { type: String, required: true },
  onClick: { type: Function, required: true },
});
</script>

<template>
  <div
    class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  ></div>
</template>
