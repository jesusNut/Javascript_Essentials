/**
 *  * Rest parameter and 'arguments' object
 *
 *   @definition
 *
 *  * 1. The rest param is denoted by ...<paramName>
 *  * The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
 *
 *  * 2. 'arguments' object made available within the function body only
 *  * 3. The 'arguments' can be access by array-like notation arguments[i]
 *  * 4. It has a length property
 *  ! 5. We must provide an array type to the rest parameter.
 *  ! 6. The Rest Parameters must appear last in the Parameter list.
 *
 */

//write a function to add any number of numbers

function addNumbers(numOne, numTwo, ...anything) {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  return sum;
}

const totalSum = addNumbers(5, 6, 7, 8, 9);

console.log("🚀 ~ totalSum:", totalSum);
