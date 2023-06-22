const numbers = [7, 11, 15];

const filterEvenNumbers = (array) => {
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers.push(array[i]);
    }
  }
  return evenNumbers;
};

console.log(filterEvenNumbers(numbers));
