<script setup>
import { inject } from "vue";
import { useLoggerStore } from "./stores/logger";
import { useSystemStore } from "./stores/system";
import { useConnectionStore } from "./stores/connection";
import { useUICommonStore } from "./stores/uicommon";

const wsquinch = inject("wsquinch");
const connection = useConnectionStore();
const systore = useSystemStore();
const log = useLoggerStore();
const uicommon = useUICommonStore();
systore.wsquinch = wsquinch;
uicommon.wsquinch = wsquinch;
wsquinch.setconnectionstore(connection);
wsquinch.resolvers = [log, systore, uicommon];
</script>
<template>
  <div
    class="container m-auto grid grid-cols-12 gap-1 text-black dark:text-white"
  >
    <Header />
    <Sidebar />
    <main class="col-span-10 p-8 bg-slate-400 dark:bg-[#02051273]">
      <router-view />
    </main>
    <Footer />
  </div>
</template>