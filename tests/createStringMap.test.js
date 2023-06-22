// Import the function to be tested
const createStringMap = require("./your-filename.js");

// Describe the test suite
describe("createStringMap", () => {
    // Test case 1: Test with an empty array
    it("should return an empty Map when given an empty array", () => {
        const input = [];
        const expected = new Map();

        const result = createStringMap(input);

        expect(result).toEqual(expected);
    });

    // Test case 2: Test with an array of strings
    it("should return a Map with string lengths as values", () => {
        const input = ["apple", "banana", "cherry"];
        const expected = new Map([
            ["apple", 5],
            ["banana", 6],
            ["cherry", 6],
        ]);

        const result = createStringMap(input);

        expect(result).toEqual(expected);
    });

    // Test case 3: Test with an array containing an empty string
    it("should include an empty string with a length of 0 in the Map", () => {
        const input = ["apple", "", "cherry"];
        const expected = new Map([
            ["apple", 5],
            ["", 0],
            ["cherry", 6],
        ]);

        const result = createStringMap(input);

        expect(result).toEqual(expected);
    });
});
