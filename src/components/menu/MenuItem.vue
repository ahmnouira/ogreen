<script setup lang="ts">
type MenuItem = {
  title: string;
  selected: boolean;
  onClick: () => void;
};
const props = defineProps<MenuItem>();
</script>
<template>
  <div class="py-1" role="none">
    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
    <a
      href="#"
      class="text-gray-700 block px-4 py-2 text-sm"
      role="menuitem"
      tabindex="-1"
      id="menu-item-0"
      >{{ props.title }}</a
    >
    >
  </div>
</template>
