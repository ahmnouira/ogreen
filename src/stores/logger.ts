import { defineStore } from "pinia";

export const useLoggerStore = defineStore("logger", {
  state: () => ({
    messages: [],
  }),
  getters: {
    output: (state) => state.messages.join("<br>"),
  },
  actions: {
    wsq__log(result) {
      const newmessages = result["newmessages"];
      for (var i = 0; i < newmessages.length; i++) {
        let msg = this.ansitohtml(newmessages[i]);
        msg = `<span class="flex items-center whitespace-pre-wrap text-sm">${msg}</span>`;
        this.messages.push(msg);
      }
    },
    ansitohtml(message) {
      const colorMap = {
        32: "green",
        37: "white",
        1: "bold",
      };
      const ansipattern = /\u001b\[(\d+)m(.*?)\u001b\[\d+m/g;
      const translated = message
        .replace("\n", "")
        .replace(ansipattern, (match, code, content) => {
          const color = colorMap[code] || "white";
          if (color === "bold")
            return `<span style="font-weight: bold">${content}</span>`;
          return `<span style="color: ${color}">${content}</span>`;
        });
      return translated;
    },
  },
});
