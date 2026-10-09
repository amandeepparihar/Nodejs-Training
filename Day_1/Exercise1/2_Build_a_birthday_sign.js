let buildBirthdaySign = (age) => {
  console.log(
    `Happy Birdhday! What a ${age >= 50 ? "mature" : "young"} fellow you are.`,
  );
};

buildBirthdaySign(49);
