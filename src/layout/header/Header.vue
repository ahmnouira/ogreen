<script setup>
import Select from "@/components/select.vue";
import Nav from "./Nav.vue";
import UserInfo from "./UserInfo.vue";

import { useConnectionStore } from "@/stores/connection";
import Divider from "@/components/shared/Divider.vue";

const connectionStore = useConnectionStore();
</script>

<template>
  <header class="col-span-full bg-slate-400 dark:bg-[#02051273]">
    <div class="flex justify-between items-center min-h-16">
      <div class="px-4 w-[480px]">
        <Select />
      </div>
      <Nav />
      <UserInfo :name="'Med Aymen'" :plan="'Business plan'" :avatar="''" />
    </div>
  </header>
</template>
