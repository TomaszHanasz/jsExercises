// Assuming the function is called 'getHighestScoredObject'
const getHighestScoredObject = require("./yourCodeFile"); // Import the function from your code file

describe("getHighestScoredObject", () => {
    it("should return the object with the highest score", () => {
        const input = [
            { name: "Alice", score: 95 },
            { name: "Bob", score: 85 },
            { name: "Charlie", score: 90 },
            { name: "David", score: 88 },
        ];
        const expectedOutput = { name: "Alice", score: 95 };

        const result = getHighestScoredObject(input);

        expect(result).toEqual(expectedOutput);
    });

    it("should handle ties and return the first object with the highest score", () => {
        const input = [
            { name: "Alice", score: 95 },
            { name: "Bob", score: 90 },
            { name: "Charlie", score: 95 },
            { name: "David", score: 88 },
        ];
        const expectedOutput = { name: "Alice", score: 95 };

        const result = getHighestScoredObject(input);

        expect(result).toEqual(expectedOutput);
    });

    it("should return null if the input array is empty", () => {
        const input = [];
        const expectedOutput = null;

        const result = getHighestScoredObject(input);

        expect(result).toEqual(expectedOutput);
    });
});
