const inputArray = ["hello", "world", "openai"];

const getStringLengths = (array) => {
  let stringLengths = [];
  array.map((el) => {
    stringLengths.push(el.length);
  });
  return stringLengths;
};

console.log(getStringLengths(inputArray));
