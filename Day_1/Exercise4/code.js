let delayedUpperCase = (arg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof arg === "string") {
        resolve(arg.toUpperCase());
      } else {
        reject(arg);
      }
    }, 500);
  });
};

delayedUpperCase("deep")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
