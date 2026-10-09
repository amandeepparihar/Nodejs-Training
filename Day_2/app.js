import EventEmitter from "events";

const emitter = new EventEmitter();

//to set the maximum number of event listners
emitter.setMaxListeners(2);

// emitter.on("x", () => {
//   console.log("event x fired2");
// });

emitter.on("x", (a, b, c) => {
  console.log("event x fired");
  console.log(a);
  console.log(b);
  console.log(c);
});

emitter.once("abc", () => {
  console.log("event abc fired");
});

//for firing the event
//can fire multiple times
emitter.emit("x", 1, 2, 3);
emitter.emit("x");
emitter.emit("x");

//fired only once as the emitter creadted using once
emitter.emit("abc");
emitter.emit("abc");
emitter.emit("abc");
