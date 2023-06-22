// Import the function to be tested
const getNamesAboveAge = require("./your-file.js"); // Replace 'your-file.js' with the actual file name

describe("getNamesAboveAge", () => {
    // Test case 1
    it("returns an empty array if input array is empty", () => {
        const input = [];
        const age = 30;
        const result = getNamesAboveAge(input, age);
        expect(result).toEqual([]);
    });

    // Test case 2
    it("returns an empty array if no person is above the specified age", () => {
        const input = [
            { name: "John", age: 25 },
            { name: "Alice", age: 28 },
            { name: "Bob", age: 30 },
        ];
        const age = 40;
        const result = getNamesAboveAge(input, age);
        expect(result).toEqual([]);
    });

    // Test case 3
    it("returns an array of names of people above the specified age", () => {
        const input = [
            { name: "John", age: 25 },
            { name: "Alice", age: 28 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 32 },
        ];
        const age = 30;
        const result = getNamesAboveAge(input, age);
        expect(result).toEqual(["Bob", "Charlie"]);
    });
});
