const numbers = [2, 4, 6, 8, 10];

const calculateAverage = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += array[i] / array.length;
  }
  return console.log(count);
};

calculateAverage(numbers);

module.exports = calculateAverage;
