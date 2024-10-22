const { divide, add, subtract, multiply } = require('../test');

test('divide function should return correct result for positive numbers', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divide function should return correct result for negative numbers', () => {
  expect(divide(-10, 2)).toBe(-5);
});

test('divide function should return correct result for division by a negative number', () => {
  expect(divide(10, -2)).toBe(-5);
});

test('divide function should return correct result for division of negative numbers', () => {
  expect(divide(-10, -2)).toBe(5);
});

test('divide function should return null and log error for division by zero', () => {
  console.log = jest.fn(); // Mock console.log
  expect(divide(10, 0)).toBeNull();
  expect(console.log).toHaveBeenCalledWith("Error: Division by zero");
});
// __tests__/test.test.js

test('subtract function should return correct result for positive numbers', () => {
  expect(subtract(10, 2)).toBe(8);
});

test('subtract function should return correct result for negative numbers', () => {
  expect(subtract(-10, 2)).toBe(-12);
});

test('subtract function should return correct result for subtraction by a negative number', () => {
  expect(subtract(10, -2)).toBe(12);
});

test('subtract function should return correct result for subtraction of negative numbers', () => {
  expect(subtract(-10, -2)).toBe(-8);
});

test('subtract function should return zero when subtracting a number from itself', () => {
  expect(subtract(10, 10)).toBe(0);
});
// __tests__/test.test.js

test('add function should return correct result for positive numbers', () => {
  expect(add(10, 2)).toBe(12);
});

test('add function should return correct result for negative numbers', () => {
  expect(add(-10, 2)).toBe(-8);
});

test('add function should return correct result for addition with a negative number', () => {
  expect(add(10, -2)).toBe(8);
});

test('add function should return correct result for addition of negative numbers', () => {
  expect(add(-10, -2)).toBe(-12);
});

test('add function should return correct result for addition with zero', () => {
  expect(add(10, 0)).toBe(10);
  expect(add(0, 10)).toBe(10);
});
// __tests__/test.test.js

test('multiply function should return correct result for positive numbers', () => {
  expect(multiply(10, 2)).toBe(20);
});

test('multiply function should return correct result for negative numbers', () => {
  expect(multiply(-10, 2)).toBe(-20);
});

test('multiply function should return correct result for multiplication by a negative number', () => {
  expect(multiply(10, -2)).toBe(-20);
});

test('multiply function should return correct result for multiplication of negative numbers', () => {
  expect(multiply(-10, -2)).toBe(20);
});

test('multiply function should return zero when multiplying by zero', () => {
  expect(multiply(10, 0)).toBe(0);
  expect(multiply(0, 10)).toBe(0);
});