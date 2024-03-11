<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as monaco from "monaco-editor";
import { useUICommonStore } from "../stores/uicommon";

const uicommon = useUICommonStore();
const editorcom = ref(null);
let editor = null;

const props = defineProps({ inputref: String, lang: String });
let inputref = null;
if (props.inputref == "scode") {
  inputref = uicommon.editorcode;
}
if (props.inputref == "sconf") {
  inputref = uicommon.editorconfig;
}
if (props.inputref == "mconf") {
  inputref = uicommon.editormainconf;
}

onMounted(() => {
  // monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  //     target: monaco.languages.typescript.ScriptTarget.Latest,
  //     module: monaco.languages.typescript.ModuleKind.CommonJS,
  //     noEmit: true,
  // });
  editor = monaco.editor.create(editorcom.value, {
    value: inputref,
    language: props.lang,
    theme: "vs-dark",
    tabSize: 4,
  });
});

onUnmounted(() => {
  if (props.inputref == "scode") {
    uicommon.vscode = getCode();
  }
  if (props.inputref == "sconf") {
    uicommon.vsconfig = getCode();
  }
  if (props.inputref == "mconf") {
    uicommon.vsmainconfig = getCode();
  }
  monaco.editor.getModels().forEach((model) => model.dispose());
});

const getCode = () => {
  return editor.getValue();
};

const updateCode = (code) => {
  uicommon.editorstrategy = code;
  editor.setValue(code);
};

const saveCode = (filename) => {
  uicommon.savestrategy(filename, editor.getValue());
};

defineExpose({ updateCode, saveCode, getCode });
</script>
<template>
  <div ref="editorcom" class="h-full" />
</template>
