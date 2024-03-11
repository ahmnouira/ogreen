<script setup>
import ItemInfo from "./header/ItemInfo.vue";
import Divider from "@/components/shared/Divider.vue";
</script>

<template>
  <aside class="col-span-2 bg-slate-400 dark:bg-zinc-900">
    <div class="p-2 mt-4">
      <ul>
        <li class="mb-2">
          <router-link class="block p-3 text-sm uppercase" to="/"
            >Overview</router-link
          >
        </li>
        <li class="mb-2">
          <router-link class="block p-3 text-sm uppercase" to="/strategies"
            >Strategies</router-link
          >
        </li>
        <li class="mb-2">
          <router-link to="/configuration" class="block p-3"
            >Configuration</router-link
          >
        </li>
        <li class="mb-2">
          <a href="#" class="block p-3">Stats</a>
        </li>
      </ul>
    </div>
  </aside>
</template>
