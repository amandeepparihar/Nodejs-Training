let costOf = (sign, currency) => {
  console.log(
    `Your sign costs ${(20 + sign.length * 2).toFixed(2)} ${currency}`,
  );
};

costOf("Happy Birthday Rob!", "dollars");
