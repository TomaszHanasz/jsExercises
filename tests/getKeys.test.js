// Import the function to be tested
const getKeys = require("./getKeys");

// Test case 1: Object with multiple keys
test("Returns an array of keys from an object with multiple keys", () => {
    const inputObject = {
        name: "John",
        age: 30,
        city: "New York",
    };
    const expectedOutput = ["name", "age", "city"];

    expect(getKeys(inputObject)).toEqual(expectedOutput);
});

// Test case 2: Object with no keys
test("Returns an empty array for an object with no keys", () => {
    const inputObject = {};
    const expectedOutput = [];

    expect(getKeys(inputObject)).toEqual(expectedOutput);
});

// Test case 3: Object with nested keys
test("Returns an array of keys from an object with nested keys", () => {
    const inputObject = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            country: "USA",
        },
    };
    const expectedOutput = ["name", "age", "address"];

    expect(getKeys(inputObject)).toEqual(expectedOutput);
});
