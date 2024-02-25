<script setup>
import { ref, inject, onMounted, onUnmounted } from "vue";
import { useSystemStore } from "../stores/system";
import { useUICommonStore } from "../stores/uicommon";

const wsquinch = inject("wsquinch");
const sselect = ref(null);
const editorCode = ref(null);
const editorConf = ref(null);
const systore = useSystemStore();
const uicommon = useUICommonStore();
uicommon.fetchstrategies();

const alertHidden = ref(false);
const newStrategy = ref(false);
const configMode = ref(false);
const saving = ref(false);
const deleting = ref(false);
const switchText = ref("New");
const switchLbl = ref("Select strategy");
const newStrategyName = ref("");
const alertText = ref("");
const modeText = ref("Config");

onMounted(() => {
  wsquinch.resolvers = wsquinch.resolvers.filter(
    (func) => func !== wsq__savestrategy
  );
  wsquinch.resolvers = wsquinch.resolvers.filter(
    (func) => func !== wsq__deletestrategy
  );
  wsquinch.resolvers.push(wsq__savestrategy);
  wsquinch.resolvers.push(wsq__deletestrategy);
});

onUnmounted(() => {
  wsquinch.resolvers = wsquinch.resolvers.filter(
    (func) => func !== wsq__savestrategy
  );
  wsquinch.resolvers = wsquinch.resolvers.filter(
    (func) => func !== wsq__deletestrategy
  );
});

function alert(result, alert, disable) {
  alertText.value = result["success"] ? alert : result["error"];
  if (result["info"] !== null) alertText.value = result["info"];
  alertHidden.value = false;
  if (disable == 0) {
    deleting.value = false;
  } else {
    saving.value = false;
  }
  setTimeout(() => {
    alertHidden.value = true;
  }, 3000);
}

function onChange(event) {
  const sname = event.target.value;
  if (sname === "") return;
  if (modeText.value == "Config") {
    editorCode.value.updateCode(uicommon.strategies[sname][0]);
  } else {
    editorConf.value.updateCode(uicommon.strategies[sname][1]);
  }
  if (modeText.value == "Code") {
    uicommon.vscode = uicommon.strategies[sname][0];
  }
}

function sinputSwitch() {
  const b = newStrategy.value;
  newStrategy.value = !b;
  switchText.value = b === true ? "New" : "Select";
  switchLbl.value = b !== true ? "New strategy" : "Select strategy";
}

function Save() {
  const sname = !newStrategy.value
    ? sselect.value.value
    : newStrategyName.value;
  if (sname === "") return;
  saving.value = true;
  if (modeText.value == "Code") {
    editorConf.value.saveCode(`${sname}.json`);
  } else {
    editorCode.value.saveCode(`${sname}.py`);
  }
}

function Delete() {
  const sname = !newStrategy.value
    ? sselect.value.value
    : newStrategyName.value;
  if (sname === "") return;
  deleting.value = true;
  uicommon.deletestrategy(sname);
}

function modeChange() {
  configMode.value = !configMode.value;
  modeText.value = configMode.value == true ? "Code" : "Config";
  const sname = !newStrategy.value
    ? sselect.value.value
    : newStrategyName.value;
  if (sname === "" || !uicommon.strategies.hasOwnProperty(sname)) return;
  if (modeText.value == "Code") {
    uicommon.vsconfig = uicommon.strategies[sname][1];
  } else {
    uicommon.vscode = uicommon.strategies[sname][0];
  }
}

function wsq__savestrategy(result) {
  alert(result, "Saved", 1);
}
function wsq__deletestrategy(result) {
  alert(result, "Deleted", 0);
}
</script>
<template>
  <div class="mb-3 flex">
    <select v-if="!newStrategy"
      class="text-sm font-mono w-[10rem] rounded-xs px-2.5 dark:bg-gray-900 dark:border-gray-900 dark:placeholder-gray-400 dark:text-gray-400"
      ref="sselect" @change="onChange">
      <option value="">{{ switchLbl }}</option>
      <option v-for="strategy in uicommon.systrategies" :value="strategy">
        {{ strategy }}
      </option>
    </select>
    <input v-else v-model="newStrategyName" type="text" :placeholder="switchLbl"
      class="text-sm font-mono w-[10rem] rounded-xs py-0.5 px-2.5 dark:bg-gray-900 dark:border-b-2 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400 focus:!outline-none dark:focus:border-b-2 dark:focus:border-orange-700 dark:active:border-orange-700" />
    <IButton class="w-[48px] ml-4 px-2 py-1.5" :text="'SAVE'" :disabled="!systore.isAuthenticated || saving"
      @click="Save">
    </IButton>
    <IButton class="w-[48px] ml-4 px-2 py-1.5" :text="switchText" :disabled="!systore.isAuthenticated"
      @click="sinputSwitch">
    </IButton>
    <IButton class="w-[48px] ml-4 px-2 py-1.5" text="Delete" :disabled="!systore.isAuthenticated || deleting"
      @click="Delete">
    </IButton>
    <IButton class="w-[48px] ml-4 px-2 py-1.5" :text="modeText" @click="modeChange">
    </IButton>
    <div class="flex ml-auto">
      <span :class="alertHidden ? 'hidden' : ''"
        class="animate-pulse my-auto font-sans text-xs font-bold uppercas text-orange-700">
        {{ alertText }}
      </span>
    </div>
  </div>
  <MonacoEditor v-if="modeText == 'Config'" ref="editorCode" lang="python" inputref="scode" />
  <MonacoEditor v-else ref="editorConf" lang="json" inputref="sconf" />
</template>