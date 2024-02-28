import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import Overview from "./pages/Overview.vue";
import ConnectionForm from "./components/ConnectionForm.vue";
import IButton from "./components/IButton.vue";
import Strategies from "./components/Strategies.vue";
import MonacoEditor from "./components/MonacoEditor.vue";
import Configuration from "./components/Configuration.vue";
import Wsquinch from "./lib/wsquinch";
import "./index.css";

const routes = [
  {
    path: "/",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/strategies",
    name: "Strategies",
    component: Strategies,
  },
  {
    path: "/configuration",
    name: "Configuration",
    component: Configuration,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

const pinia = createPinia();
const app = createApp(App);
const wsquinch = new Wsquinch();

app.use(router);
app.use(pinia);
app.provide("wsquinch", wsquinch);

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    return new editorWorker();
  },
};

app.component("ConnectionForm", ConnectionForm);
app.component("IButton", IButton);
app.component("MonacoEditor", MonacoEditor);
app.component("Configuration", Configuration);

app.mount("#app");
