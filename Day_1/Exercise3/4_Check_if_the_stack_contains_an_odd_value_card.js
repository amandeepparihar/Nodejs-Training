const doesStackIncludeOddCard = (arr) => {
  const res = arr.some((ele) => ele % 2 !== 0);
  console.log(res);
};

doesStackIncludeOddCard([3, 2, 6, 4, 8]);
