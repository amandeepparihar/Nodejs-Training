const getFirstEvenCardPosition = (arr) => {
  const res = arr.find((ele) => ele % 2 === 0);
  // console.log(res)
  const pos = arr.findIndex((ele) => ele == res);
  console.log(pos);
};

getFirstEvenCardPosition([5, 2, 3, 1]);
