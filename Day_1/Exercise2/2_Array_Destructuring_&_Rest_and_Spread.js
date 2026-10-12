let deck = [5, 9, 7, 1, 8];

// First Question
const getFirstCard = (deck) => {
  let [firstCard] = deck;
  return firstCard;
};
console.log(getFirstCard(deck));

// Second Question
const getSecondCard = (deck) => {
  let [, second] = deck;
  return second;
};
deck = [3, 2, 10, 6, 7];
console.log(getSecondCard(deck));

// Third Question
deck = [10, 7, 3, 8, 5];
const swapTopTwoCards = (deck) => {
  const [firstCard, secondCard, ...rest] = deck;
  newdeck = [secondCard, firstCard, ...rest];
  return newdeck;
};
console.log(swapTopTwoCards(deck));

// Fourth Question
deck = [2, 5, 4, 9, 3];
const discardTopCard = (deck) => {
  const [, ...rest] = deck;
  return rest;
};
console.log(discardTopCard(deck));

//Fifth question
deck = [5, 4, 7, 10];
const insertFaceCards = (deck) => {
  const newValues = ["jack", "queen", "king"];
  const [firstCard, ...rest] = deck;
  const newDeck = [firstCard, ...newValues, ...rest];
  return newDeck;
};
console.log(insertFaceCards(deck));
