<script setup>
import { onUpdated, ref } from "vue";
import { useLoggerStore } from "@/stores/logger";

const log = useLoggerStore();
const logconsole = ref(null);
let mouseInLog = false;

function mouseover() {
  mouseInLog = true;
}
function mouseleave() {
  mouseInLog = false;
}

onUpdated(() => {
  if (mouseInLog) return;
  logconsole.value.lastElementChild?.scrollIntoView({ block: "nearest" });
});
</script>

<template>
  <div class="grid">
    <label class="block text-xs font-mono text-left uppercase">Output</label>
    <div
      ref="logconsole"
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
      class="flex flex-col mt-2 px-1 w-full h-[200px] rounded-md font-mono bg-slate-300 dark:bg-zinc-950 overflow-y-auto"
      v-html="log.output"
    ></div>
  </div>
</template>
