const calc = require("../src/calculator");

describe("add", () => {
  it("adds two positive numbers", () => expect(calc.add(2, 3)).toBe(5));
  it("adds negatives", () => expect(calc.add(-1, -2)).toBe(-3));
  it("adds floats", () => expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3));
});

describe("subtract", () => {
  it("subtracts correctly", () => expect(calc.subtract(10, 4)).toBe(6));
  it("handles negative results", () => expect(calc.subtract(3, 5)).toBe(-2));
});

describe("multiply", () => {
  it("multiplies positives", () => expect(calc.multiply(4, 5)).toBe(20));
  it("multiplying by zero returns zero", () => expect(calc.multiply(999, 0)).toBe(0));
});

describe("divide", () => {
  it("divides correctly", () => expect(calc.divide(10, 2)).toBe(5));
  it("throws on division by zero", () => {
    expect(() => calc.divide(5, 0)).toThrow("Division by zero");
  });
});

describe("power", () => {
  it("raises to power", () => expect(calc.power(2, 10)).toBe(1024));
  it("any number to the 0 is 1", () => expect(calc.power(999, 0)).toBe(1));
});

describe("sqrt", () => {
  it("returns correct square root", () => expect(calc.sqrt(9)).toBe(3));
  it("throws on negative input", () => {
    expect(() => calc.sqrt(-1)).toThrow("negative");
  });
});

describe("modulo", () => {
  it("returns remainder", () => expect(calc.modulo(10, 3)).toBe(1));
  it("throws on modulo by zero", () => {
    expect(() => calc.modulo(5, 0)).toThrow("zero");
  });
});
