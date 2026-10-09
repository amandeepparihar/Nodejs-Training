// JS objects have a special property called prototype that is either null or reference to another object

let a = {
  name: "deep",
  lang: "js",
  // run: () => {
  //     console.log("running")
  // }
};

let p = {
  run2: () => {
    console.log("runnning 2");
  },
};

let p2 = {
  run3: () => {
    console.log("running 3");
  },
};

a.__proto__ = p;
p.__proto__ = p2;

a.run3();
