class CustomEventEmitter {
  constructor() {
    this._events = {};
  }

  on(eventName, handler) {
    if (this._events[eventName]) {
      this._events[eventName].push(handler);
    } else {
      this._events[eventName] = [handler];
    }
  }

  emit(eventName, ...args) {
    if (this._events[eventName]) {
      this._events[eventName].forEach((event) => {
        event(...args);
      });
    }
  }
}

const emitter = new CustomEventEmitter();

emitter.on("x", (a, b, c) => {
  console.log("emitted event x 1");
  console.log(a);
  console.log(b);
  console.log(c);
});

emitter.on("x", () => {
  console.log("emitted event x 2");
});

emitter.on("y", () => {
  console.log("emitter for y");
});

emitter.emit("x", 1, 2, 3);
emitter.emit("y");
