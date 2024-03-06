import { defineStore } from "pinia";

export const useSidebarStore = defineStore({
  id: "sidebar",
  state: () => ({
    sidebarOpen: false,
  }),
  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
});
