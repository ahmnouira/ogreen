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
import Layout from "./layout/Layout.vue"

</script>
<template>
  <Layout />
</template>