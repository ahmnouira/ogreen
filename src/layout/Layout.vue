<script setup>
import Header from "./header/Header.vue";
import Footer from "./Footer.vue";
import Sidebar from "./Sidebar.vue";
</script>

<template>
  <div class="m-auto grid grid-cols-12 gap-1 text-black dark:text-white">
    <Header />
    <Sidebar />
    <main class="col-span-10 p-8 bg-slate-400 dark:bg-[#02051273]">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
