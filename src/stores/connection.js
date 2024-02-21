import { defineStore } from "pinia";

export const useConnectionStore = defineStore("connection", {
  state: () => ({
    connected: false,
    connecting: false,
  }),
  getters: {
    isConnected: (state) => state.connected,
    isConnecting: (state) => state.connecting,
    noConnect: (state) => state.connected || state.connecting,
  },
});
