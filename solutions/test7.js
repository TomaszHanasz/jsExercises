const input = [
  { name: "John", age: 25 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 32 },
];

const getNamesAboveAge = (array, age) => {
  let names = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].age >= age) {
      names.push(array[i].name);
    }
  }
  return names;
};

console.log(getNamesAboveAge(input, 30));
