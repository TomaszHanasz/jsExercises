const obj = { name: "John", age: 25, city: "New York" };

const getObjectValues = (object) => {
  return Object.values(object);
};

console.log(getObjectValues(obj));
