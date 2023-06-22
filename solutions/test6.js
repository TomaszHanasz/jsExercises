const inputObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const getKeys = (object) => {
  let keys = [];
  keys.push(Object.keys(object));
  return keys;
};

console.log(getKeys(inputObject));
