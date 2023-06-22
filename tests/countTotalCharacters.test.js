// Assuming the function name is "countTotalCharacters"
const countTotalCharacters = require("./your-function-file"); // Replace './your-function-file' with the actual path to your function file

describe("countTotalCharacters", () => {
    it("should return the correct total number of characters in all the strings", () => {
        const input = ["Hello", "World", "OpenAI"];
        const result = countTotalCharacters(input);
        expect(result).toEqual(15);
    });

    it("should return 0 for an empty array", () => {
        const input = [];
        const result = countTotalCharacters(input);
        expect(result).toEqual(0);
    });

    it("should handle strings with spaces correctly", () => {
        const input = ["Hello", "World", "Open AI"];
        const result = countTotalCharacters(input);
        expect(result).toEqual(13);
    });

    it("should handle strings with special characters correctly", () => {
        const input = ["@Hello!", "W@orld", "OpenAI@"];
        const result = countTotalCharacters(input);
        expect(result).toEqual(15);
    });
});
