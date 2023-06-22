// import the function
const calculateAverage = require("../solutions/test1");

// import { calculateAverage } from "../solutions/test1";

// describe the test suite
// describe("calculateAverage", () => {
// test case 1
it("should return the correct average for an array of positive numbers", () => {
  const numbers = [2, 4, 6, 8, 10];
  const expectedAverage = 6;
  const result = calculateAverage(numbers);
  expect(result).toEqual(expectedAverage);
});

// test case 2
it("should return 0 for an empty array", () => {
  const numbers = [];
  const expectedAverage = 0;
  const result = calculateAverage(numbers);
  expect(result).toEqual(expectedAverage);
});

//   // test case 3
it("should return the correct average for an array of negative numbers", () => {
  const numbers = [-2, -4, -6, -8, -10];
  const expectedAverage = -6;
  const result = calculateAverage(numbers);
  expect(result).toEqual(expectedAverage);
});

//   // test case 4
it("should return the correct average for an array of mixed positive and negative numbers", () => {
  const numbers = [1, -2, 3, -4, 5];
  const expectedAverage = 0.6;
  const result = calculateAverage(numbers);
  expect(result).toBeCloseTo(expectedAverage);
});

calculateAverage(numbers);
