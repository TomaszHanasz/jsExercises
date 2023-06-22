const input = ["@Hello!", "W@orld", "OpenAI@"];

const countTotalCharacters = (array) => {
  let count = 0;
  let join = array.join("");
  for (let i = 0; i < join.length; i++) {
    count += join[i].length;
  }
  return count;
};

console.log(countTotalCharacters(input));
