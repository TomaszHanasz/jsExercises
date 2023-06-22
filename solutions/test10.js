const numbers = [1, 2, 3, 4, 5];

const sumNumbers = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(sumNumbers(numbers));

module.exports = { sumNumbers };
