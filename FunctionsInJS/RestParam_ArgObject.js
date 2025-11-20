/**
 *  * Rest parameter and 'arguments' object
 *
 *   @definition
 *
 *  * REST params: The rest param is denoted by ...<paramName> and it acts like a real array.
 *  * The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
 *  !  The Rest Parameters must appear last in the Parameter list.
 */

//! Example - 1

function dataHolder(a, b, ...rest) {
  console.log(a); //22
  console.log(b); //33
  console.log(rest); //[ 44, 55, 66 ]
  console.log(rest[0]);// 44
  console.log(rest[1]);// 55
  console.log(rest[2]);// 66
  console.log(rest[3]);// undefined
}

dataHolder(22,33,44,55,66);

//! Example - 2

function printer(a, b, ...rest) {
  console.log(`${a}---${b}`);
  console.log(`Rest in this function are : ${rest.length}`); //6
  rest.forEach((ele) => console.log(ele));
}

printer(
  `abhishek`,
  `bhardwaj`,
  `manish`,
  `kumar`,
  `sarthak`,
  `Mehta`,
  `john`,
  `doe`
);

//! The rest parameter (...rest) collects only the arguments that are passed to the function after the explicitly named parameters (a and b in your case).

//! **********************************************************************************************************************************/

//* 'arguments' Object:

// The arguments object is an array-like object that is available inside all non-arrow functions.
// It contains ALL the arguments passed to the function, regardless of the function's parameter list.
// In your case, it will contain 5, 6, 7, 8, and 9.
// 'arguments' object made available within the function body only.
// The 'arguments' can be access by array-like notation arguments[i]
// It has a length property


//! Example:  Add all numbers using 'arguments' object

function addNumbers(numOne, numTwo, ...anything) {
  let sum = 0;
  console.log(`Arguments in this function are : ${arguments.length}`); //5
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  return sum;
}

const totalSum = addNumbers(5, 6, 7, 8, 9);

console.log("🚀 ~ totalSum:", totalSum);

