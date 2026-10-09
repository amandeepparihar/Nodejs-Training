const getFirstOddCard = (arr) => {
  const res = arr.find((ele) => ele % 2 !== 0);
  console.log(res);
};
getFirstOddCard([4, 2, 8, 7, 9]);
