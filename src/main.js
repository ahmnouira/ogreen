import { createApp }                      from 'vue'
import { createPinia }                    from 'pinia'
import App                                from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import editorWorker     from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker       from 'monaco-editor/esm/vs/language/json/json.worker?worker';

import Header           from './components/Header.vue'
import Sidebar          from './components/Sidebar.vue'
import Footer           from './components/Footer.vue'
import Terminal         from './components/Terminal.vue'
import ConnectionForm   from './components/ConnectionForm.vue'
import ControlBoard     from './components/ControlBoard.vue'
import Log              from './components/Log.vue'
import IButton          from './components/IButton.vue'
import SystemStatus     from './components/SystemStatus.vue'
import Strategies       from './components/Strategies.vue'
import MonacoEditor     from './components/MonacoEditor.vue'
import Configuration    from './components/Configuration.vue'
import Wsquinch         from './lib/wsquinch'
import                       './index.css'

const routes    = [{
    path: '/',
    name: 'Terminal',
    component: Terminal
  },
  {
    path: '/strategies',
    name: 'Strategies',
    component: Strategies
  },
  {
    path: '/configuration',
    name: 'Configuration',
    component: Configuration
  }
];
const router    = createRouter({
  history: createWebHistory("/"),
  routes
});

const pinia     = createPinia();
const app       = createApp(App);
const wsquinch  = new Wsquinch();

app.use(router);
app.use(pinia);
app.provide('wsquinch', wsquinch);

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    return new editorWorker();
  },
};

app.component('Header',          Header);
app.component('Sidebar',         Sidebar);
app.component('Footer',          Footer);
app.component('Log',             Log);
app.component('ConnectionForm',  ConnectionForm);
app.component('ControlBoard',    ControlBoard);
app.component('IButton',         IButton);
app.component('SystemStatus',    SystemStatus);
app.component('MonacoEditor',    MonacoEditor);
app.component('Configuration',   Configuration);
app.mount('#app');