// dont forget to import your file below
const { sumNumbers } = require("./../solutions/test10.js");

describe("sumNumbers", () => {
  test("should return the sum of all numbers in the array", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(sumNumbers(numbers)).toBe(15);
  });

  test("should return 0 for an empty array", () => {
    const emptyArray = [];
    expect(sumNumbers(emptyArray)).toBe(0);
  });

  test("should handle negative numbers", () => {
    const negativeNumbers = [-1, -2, -3, -4];
    expect(sumNumbers(negativeNumbers)).toBe(-10);
  });

  test("should return the number itself for a single number in the array", () => {
    const singleNumber = [7];
    expect(sumNumbers(singleNumber)).toBe(7);
  });
});
