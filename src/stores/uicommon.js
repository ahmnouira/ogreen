import { defineStore } from "pinia";

export const useUICommonStore = defineStore("uicommon", {
  state: () => ({
    strategies: {},
    vscode: `from base.objects import OGREEN

  class Strategy(OGREEN):

    def __init__(self, c):
      super().__init__(c)
      self.print = self.c.logger.simpleprint
        
    def onbar(self):
      return
      #symbol = self.symbol.upper()
      #self.print(f"[dev1][onbar] {symbol} ")

    def ontick(self):
      return
      #symbol = self.symbol.upper()
      #self.print(f"[dev1][ontick] {symbol} ")
    `,
    vsconfig: `{
  "broker":"binance",
  "market":"USDT",
  "symbols":"BTC,ETH,LTC,BNB",
  "events": ["ontick", "onbar"],
  "code":"dev0",
  "plugins":{
    "telegram": {"chatid":"", "botid":""},
    "rsi1d": {"bind":"rsi", "period":"1d", "length":14},
    "rsi4h": {"bind":"rsi", "period":"4h", "length":14},
    "rsi1m": {"bind":"rsi", "period":"1m", "length":14}
  }
}`,
    vsmainconfig: `{
  "strategies": ["dev0"],
  "simulation": true,
  "backtest": {
      "enabled":false,
      "start":"01/01/20 00:00:00",
      "end":"01/01/22 00:00:00"
  },
  "klinesfill": {
      "nofill": false,
      "wait": 0
  },
  "ecores": 1,
  "stress": 0,
  "stress-cpu-throttle": 1,
  "wserver": true,
  "brokers": {
      "binance": {
          "privatekey": ""
      }
  },
  "pilots": {
      "sha":      {"passwd": "369", "permit": 0},
      "testuser": {"passwd": "369", "permit": 0}
  }
}`,
  }),
  getters: {
    systrategies: (state) => Object.keys(state.strategies),
    editorcode: (state) => state.vscode,
    editorconfig: (state) => state.vsconfig,
    editormainconf: (state) => state.vsmainconfig,
  },
  actions: {
    async savestrategy(name, code) {
      const s = { savestrategy: { name: name, code: code } };
      await this.wsquinch.action(s);
    },
    async saveconfig(code) {
      const s = { saveconfig: { code: code } };
      await this.wsquinch.action(s);
    },
    async deletestrategy(name) {
      const s = { deletestrategy: { name: name } };
      await this.wsquinch.action(s);
    },
    async fetchstrategies() {
      const strats = { strategies: null };
      await this.wsquinch.query(strats);
    },
    async wsq__strategies(result) {
      this.strategies = result;
    },
    async wsq__config(result) {
      this.vsmainconfig = result;
    },
  },
});
