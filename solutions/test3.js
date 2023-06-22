const input = ["apple", "banana", "cherry"];

const createStringMap = (array) => {
  const mapOfString = new Map();
  array.forEach((el) => {
    const count = el.length;
    mapOfString.set(el, count);
  });

  return console.log(mapOfString);
};

createStringMap(input);
