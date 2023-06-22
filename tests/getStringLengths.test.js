// Import the function to be tested
const getStringLengths = require("./exercise2");

// Test case: Array with three strings
test("Return array with string lengths", () => {
    const inputArray = ["hello", "world", "openai"];
    const expectedOutput = [5, 5, 6];
    const result = getStringLengths(inputArray);
    expect(result).toEqual(expectedOutput);
});

// Test case: Array with an empty string
test("Return array with length of empty string", () => {
    const inputArray = [""];
    const expectedOutput = [0];
    const result = getStringLengths(inputArray);
    expect(result).toEqual(expectedOutput);
});

// Test case: Array with no strings
test("Return empty array for no strings", () => {
    const inputArray = [];
    const expectedOutput = [];
    const result = getStringLengths(inputArray);
    expect(result).toEqual(expectedOutput);
});
