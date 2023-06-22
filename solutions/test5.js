const input = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 95 },
  { name: "David", score: 88 },
];

const getHighestScoredObject = (array) => {
  let highestScore;
  let score = 0;

  if (array.length === 0) {
    highestScore = null;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].score > score) {
      score = array[i].score;
      highestScore = array[i];
    }
  }
  return highestScore;
};

console.log(getHighestScoredObject(input));
