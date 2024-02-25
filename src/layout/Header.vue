<script setup>
import { useConnectionStore } from '../stores/connection';

const connectionStore = useConnectionStore();
</script>
<template>
  <header class="col-span-full p-4 bg-slate-400 dark:bg-[#02051273]">
    <div class="flex justify-between">
      <ConnectionForm />
      <div class="flex items-center ml-5">
        <span class="text-xs uppercase tracking-wide">Status</span>
        <div class="h-2 w-2 ml-2 bg-green-500 rounded-full" v-if="connectionStore.isConnected"></div>
        <div class="h-2 w-2 ml-2 bg-red-500 rounded-full" v-else></div>
      </div>
    </div>
  </header>
</template>