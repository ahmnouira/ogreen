<script setup>
import { inject, ref } from "vue";
import { useSystemStore } from "@/stores/system";

const alertHidden = ref(false);
const alertText = ref("");

const wsquinch = inject("wsquinch");
const systatus = useSystemStore();

wsquinch.resolvers.push(wsq__start);

function wsq__start(result) {
  alert(result, "Success");
}

function alert(result, alert) {
  alertText.value = result["success"] ? alert : result["error"];
  if (result["info"] !== null) alertText.value = result["info"];
  alertHidden.value = false;
  setTimeout(() => {
    alertHidden.value = true;
  }, 3000);
}

async function CTL(s) {
  const cmd = s === 1 ? "start" : "stop";
  if (systatus.estatus === 1) return;
  if (systatus.estatus === 2 && s === 1) return;
  if (systatus.estatus === 0 && s === 0) return;
  const query = { queries: [], actions: [{ n: cmd, v: null }] };
  systatus.estatus = 1;
  await wsquinch.wsocket.send(JSON.stringify(query));
}
</script>
<template>
  <div class="flex pb-5 mb-5 border-b-slate-700 border-b-2">
    <div class="">
      <IButton v-if="!systatus.isRunning" @click="CTL(1)" class="w-[48px] px-2 py-1.5" :text="'RUN'" :disabled="!systatus.isAuthenticated || systatus.isBusy || systatus.isRunning
        ">
      </IButton>
      <IButton v-else @click="CTL(0)" class="w-[48px] px-2 py-1.5" :text="'STOP'" :disabled="!systatus.isAuthenticated || systatus.isBusy || !systatus.isRunning
        ">
      </IButton>
    </div>
    <div class="ml-auto">
      <span :class="alertHidden ? 'hidden' : ''"
        class="animate-pulse my-auto font-sans text-xs font-bold uppercas text-orange-700">
        {{ alertText }}
      </span>
    </div>
  </div>
</template>
