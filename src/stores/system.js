import { defineStore } from "pinia";
import { inject } from "vue";

export const useSystemStore = defineStore("system", {
  state: () => ({
    estatus: 0, // 0: standby  1: isbusy 2: running
    mode: "Unknown",
    ecores: 0,
    nstrategies: 0,
    nsymbols: 0,
    ememory: 0,
    estream: false,
    nengineson: 0,
    authenticated: 0,
    wsengineon: 0,
    wseconnected: 0,
    sysperf: {
      stomem: 0,
      ccycle: 0,
      ctontick: 0,
      ctonbar: 0,
      ttostrat: 0,
      btostrat: 0,
      throughput: 0,
      euptime: 0,
      wsticks: 0,
      wstpp: 0,
      eticks: 0,
      eonticks: 0,
      eonbars: 0,
      stpp: 0,
      throughput: 0,
      euptime: 0,
    },
    wsquinch: null,
  }),
  getters: {
    isBusy: (state) => state.estatus === 1,
    isRunning: (state) => state.estatus === 2,
    isAuthenticated: (state) => state.authenticated === 1,
    getestate(state) {
      return {
        mode: state.mode,
        ecores: state.ecores,
        nstrategies: state.nstrategies,
        nsymbols: state.nsymbols,
        ememory: state.ememory,
        estream: state.estream,
        authenticated: state.authenticated === 1 ? "Yes" : "No",
        wseon: state.wsengineon === 1 ? "ON" : "OFF",
        ewstreamon: state.wseconnected === 1 ? "Streaming" : "Not streaming",
        perf: state.sysperf,
      };
    },
  },
  actions: {
    init() {
      this.wsquinch = inject("wsquinch");
    },
    async wsq__systatus(result) {
      this.mode = result["mode"];
      this.ecores = result["ecores"];
      this.ememory = result["ememory"];
      this.nstrategies = result["nstrategies"];
      this.nsymbols = result["nsymbols"];
      this.estream = result["estream"];
      this.nengineson = result["nengineson"];
      this.authenticated = result["authenticated"];
      this.wsengineon = result["wsengineon"];
      this.wseconnected = result["wseconnected"];
      this.sysperf = result["sysperf"];
      if (this.nengineson > 0) this.estatus = 2;
      if (this.nengineson === 0) this.estatus = 0;
      if (this.authenticated === 1) return;
      //todo auth only onconnected
      const auth = { auth: { name: "sha", pwd: "369" } };
      await this.wsquinch.action(auth);
    },
  },
});
