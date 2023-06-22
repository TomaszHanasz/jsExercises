// Import the function to be tested
const getObjectValues = require("./getObjectValues");

// Test case 1: Object with multiple key-value pairs
test("Returns an array of values from the object", () => {
    const obj = { name: "John", age: 25, city: "New York" };
    const expected = ["John", 25, "New York"];
    const result = getObjectValues(obj);
    expect(result).toEqual(expected);
});

// Test case 2: Object with a single key-value pair
test("Returns an array with a single value from the object", () => {
    const obj = { name: "Jane" };
    const expected = ["Jane"];
    const result = getObjectValues(obj);
    expect(result).toEqual(expected);
});

// Test case 3: Empty object
test("Returns an empty array when the object is empty", () => {
    const obj = {};
    const expected = [];
    const result = getObjectValues(obj);
    expect(result).toEqual(expected);
});
