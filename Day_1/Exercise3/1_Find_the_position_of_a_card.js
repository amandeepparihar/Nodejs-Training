const getCardPosition = (arr, card) => {
  console.log(arr.findIndex((ele) => ele === card));
};

const card = 2;
getCardPosition([9, 7, 3, 2], card);
