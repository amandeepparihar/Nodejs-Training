const buildBirthdaySign = (age) => {
  return `Happy Birthday! What a ${age >= 50 ? "mature" : "young"} fellow you are.`;
};

console.log(buildBirthdaySign(49));
