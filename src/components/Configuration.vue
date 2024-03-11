<script setup>
import { ref, inject, onMounted, onUnmounted } from "vue";
import { useSystemStore } from "../stores/system";
import { useUICommonStore } from "../stores/uicommon";

const wsquinch = inject("wsquinch");
const systore = useSystemStore();
const uicommon = useUICommonStore();

const editorConf = ref(null);
const alertHidden = ref(false);
const csaving = ref(false);
const alertText = ref("");

onMounted(() => {
  wsquinch.resolvers = wsquinch.resolvers.filter(
    (func) => func !== wsq__saveconfig
  );
  wsquinch.resolvers.push(wsq__saveconfig);
});

onUnmounted(() => {
  wsquinch.resolvers = wsquinch.resolvers.filter(
    (func) => func !== wsq__saveconfig
  );
});

function alert(result, alert) {
  alertText.value = result["success"] ? alert : result["error"];
  if (result["info"] !== null) alertText.value = result["info"];
  alertHidden.value = false;
  csaving.value = false;
  setTimeout(() => {
    alertHidden.value = true;
  }, 3000);
}

function Save() {
  csaving.value = true;
  const code = editorConf.value.getCode();
  uicommon.saveconfig(code);
}

function wsq__saveconfig(result) {
  alert(result, "Saved");
}
</script>
<template>
  <div class="mb-3 flex">
    <IButton
      class="w-[48px] ml-4 px-2 py-1.5"
      :text="'SAVE'"
      :disabled="!systore.isAuthenticated || csaving"
      @click="Save"
    >
    </IButton>
    <div class="flex ml-auto">
      <span
        :class="alertHidden ? 'hidden' : ''"
        class="animate-pulse my-auto font-sans text-xs font-bold uppercas text-orange-700"
      >
        {{ alertText }}
      </span>
    </div>
  </div>
  <MonacoEditor ref="editorConf" lang="json" inputref="mconf" />
</template>
