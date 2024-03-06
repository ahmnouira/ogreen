import { Squinchws } from "./squinchws";

export default class Wsquinch {
  private wsocket;
  private rprefix;
  private resolvers;
  private rresolvers;

  constructor() {
    this.wsocket = new Squinchws();
    this.wsocket.onmessage = this.onmessage.bind(this);
    this.rprefix = "wsq__";
    this.resolvers = [];
    this.rresolvers = {};
  }

  async send(queries, actions) {
    if (!Array.isArray(queries)) {
      queries = [];
    }
    if (!Array.isArray(actions)) {
      actions = [];
    }
    const payload = { queries: queries, actions: actions };
    await this.wsocket.send(JSON.stringify(payload));
  }

  async query(queries: any) {
    let qyrs: any[] = [];
    for (const key of Object.keys(queries)) {
      const value = queries[key];
      qyrs.push({ n: key, v: value });
    }
    await this.send(qyrs, null);
  }

  async action(actions: any) {
    let acs: any[] = [];
    for (const key of Object.keys(actions)) {
      const value = actions[key];
      acs.push({ n: key, v: value });
    }
    await this.send(null, acs);
  }

  async onmessage(event) {
    const rep = JSON.parse(event.data);
    await this.resolver(rep.queries);
    await this.resolver(rep.actions);
  }

  async resolver(entries) {
    for (const [query, value] of Object.entries(entries)) {
      if (this.rresolvers[query] === undefined) {
        const fn = this.resolve(query);
        if (fn === undefined) continue;
        const rep = fn(value);
        if (rep instanceof Promise) {
          await rep;
        }
      }
    }
  }

  resolve(payload) {
    for (let i = 0; i < this.resolvers.length; i++) {
      const rsfunc = `${this.rprefix}${payload}`;
      const rstype = this.resolvers[i].constructor.name;
      if (rstype === "Function") {
        if (this.resolvers[i].name !== rsfunc) continue;
        return this.resolvers[i];
      }
      if (!this.resolvers[i].hasOwnProperty(rsfunc)) continue;
      return this.resolvers[i][rsfunc];
    }
    return undefined;
  }

  // backend ws
  connect(remoteaddress) {
    return this.wsocket.connect(remoteaddress);
  }

  setconnectionstore(store) {
    this.wsocket.store = store;
  }
}
