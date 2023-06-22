// import the function to be tested
const filterEvenNumbers = require("./filterEvenNumbers");

describe("filterEvenNumbers", () => {
    it("should return an array with only the even numbers", () => {
        // Test case 1
        expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);

        // Test case 2
        expect(filterEvenNumbers([10, 21, 32, 45, 56])).toEqual([10, 32, 56]);

        // Test case 3
        expect(filterEvenNumbers([7, 11, 15])).toEqual([]);
    });

    it("should return an empty array if no even numbers are found", () => {
        // Test case 4
        expect(filterEvenNumbers([1, 3, 5, 7, 9])).toEqual([]);

        // Test case 5
        expect(filterEvenNumbers([])).toEqual([]);
    });
});
