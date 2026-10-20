/**
 * Core calculator logic — pure functions, no side effects.
 * Each function returns { result } or throws a descriptive Error.
 */

/**
 * Add two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide a by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} When b is zero.
 */
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed.");
  return a / b;
}

/**
 * Raise a to the power of b.
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculate the square root of n.
 * @param {number} n
 * @returns {number}
 * @throws {Error} When n is negative.
 */
function sqrt(n) {
  if (n < 0) throw new Error("Cannot take square root of a negative number.");
  return Math.sqrt(n);
}

/**
 * Calculate the modulo of a / b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} When b is zero.
 */
function modulo(a, b) {
  if (b === 0) throw new Error("Modulo by zero is not allowed.");
  return a % b;
}

module.exports = { add, subtract, multiply, divide, power, sqrt, modulo };
