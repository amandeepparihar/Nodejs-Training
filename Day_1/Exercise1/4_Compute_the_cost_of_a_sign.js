const costOf = (sign, currency) => {
  return `Your sign costs ${(20 + sign.length * 2).toFixed(2)} ${currency}`;
};

console.log(costOf("Happy Birthday Rob!", "dollars"));
