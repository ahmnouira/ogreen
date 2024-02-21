export class Squinchws {
  constructor() {
    this.remoteaddress = null;
    this.url = null;
    this.instance = null;
    this.store = null;
    this.onmessage = null;
  }

  connect(remoteaddress) {
    this.remoteaddress = remoteaddress.trim();
    if (this.remoteaddress == "") {
      this.error = "[WebSocket] Invalid Remote Address";
      return -1;
    }
    this.store.connecting = true;
    this.url = "ws://" + remoteaddress;
    this.instance = new WebSocket(this.url);
    this.instance.addEventListener("message", async (event) => {
      await this.onmessage(event);
    });
    this.instance.addEventListener("open", () => {
      this.onconnected();
    });
    this.instance.addEventListener("close", (event) => {
      this.onclose(event);
    });
    this.instance.addEventListener("error", (error) => {
      this.onerror(error);
    });
    return 1;
  }

  onconnected() {
    this.store.connecting = false;
    this.store.connected = true;
    this.store.lasterror = "";
    console.log("[Wsquinch] Connected");
  }

  async send(message) {
    if (this.instance && this.instance.readyState === WebSocket.OPEN) {
      this.instance.send(message);
    }
  }

  onclose(event) {
    this.store.error = "[Wsquinch] Closed with code " + event.code;
    this.store.connected = false;
    console.log(this.store.error);
  }

  onerror(error) {
    this.store.error = "[Wsquinch] Remote Unreachable";
    this.store.connecting = false;
    this.store.connected = false;
    console.log(this.store.error);
  }

  close() {
    if (this.instance) {
      this.instance.close();
    }
  }
}
