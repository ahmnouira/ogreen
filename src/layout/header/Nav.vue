<script setup>
const items = [
  {
    title: "Home",
  },
  {
    title: "Forum",
  },
  {
    title: "Features",
  },
  {
    title: "About",
  },
  {
    title: "Blog",
  },
  {
    title: "Contact",
  },
];
</script>

<template>
  <nav class="hidden md:block w-full">
    <ul class="flex justify-center items-center h-16">
      <li v-for="item in items">
        <span
          class="text-orange-700 font-semibold mx-4 hover:text-orange-800 cursor-pointer"
        >
          {{ item.title }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  border-left: 4px solid #27272a;
  border-right: 4px solid #27272a;
}
</style>
