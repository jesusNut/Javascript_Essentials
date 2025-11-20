"use strict";

/**
 * Common Error Objects in JS
 *
 * * @types
 * 1. Error - Base object for user error
 * 2. ReferenceError
 * 3. SyntaxError
 * 4. TypeError
 *
 */

//! Prove that Error is the base class of all errors in JS/TS:

const data = new ReferenceError();

console.log(
  Object.getPrototypeOf(ReferenceError.prototype) === Error.prototype
); //true

// One
console.log(x); // ReferenceError: x is not defined

// Two
// let a = 10
// let a = 20
console.log(a); // SyntaxError: Identifier 'a' has already been declared

// Three
const BROWSER = "chrome";
BROWSER = "firefox";
console.log(BROWSER); // TypeError: Assignment to constant variable.

//! Handling errors :
try {
  // Code that might throw different types of errors
  const result = JSON.parse(userInput);
  if (typeof result !== "object" || result === null) {
    throw new TypeError("Input must be a non-null object.");
  }
  // ... more code that might throw other errors ...
} catch (e) {
  if (e instanceof SyntaxError) {
    console.error("Syntax error in JSON:", e.message);
  } else if (e instanceof TypeError) {
    console.error("Type error:", e.message);
  } else if (e instanceof Error) {
    console.error("A general error occurred:", e.message);
  } else {
    console.error("An unknown error occurred:", e);
  }
}
