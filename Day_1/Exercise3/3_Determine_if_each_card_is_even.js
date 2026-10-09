const isEachCardEven = (arr) => {
  const res = arr.every((ele) => ele % 2 == 0);
  console.log(res);
};

isEachCardEven([2, 4, 6, 7]);
