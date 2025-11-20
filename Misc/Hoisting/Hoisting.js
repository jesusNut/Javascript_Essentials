//* HOISTING : Hoisting is JavaScript's default behavior of
//* moving all declarations to the top of the current scope.

//? https://www.youtube.com/watch?v=E5af3VAaGCs&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=73&t=1327s

/**================================================================================================
 *!    JavaScript only hoists declarations, not initializations.
 *================================================================================================**/

//? SUMMARY---------------------------------------------------------------------------------

//! Var and traditional functions : HOISTED.
//! let, const, arrow functions, function expressions & classes - HOISTED BUT DIFFERENTLY

//? -----------------------------------------------------------------------------------------
//! How var hoisting works ??

//* 1. var variables do not have a Temporal Dead Zone (TDZ).
//* 2. Declaration and Initialization: When var variables are hoisted, they are both declared and initialized to undefined at the beginning of their scope.
//* 3. Access Before Declaration: You can access a var variable before its actual declaration in the code, and it will have the value undefined.
//. Function Scope: var variables have function scope (or global scope if declared outside any function).

//----------------------------- EXAMPLE 1 --------------------------------------------------

 

//Equivalent for above:

// var data; // Declaration hoisted to the top
// data = 10; // Assignment remains in place
// console.log(data); // Using variable after assignment

//----------------------------- EXAMPLE 2 --------------------------------------------------

console.log(data1); //undefined
var data1 = 10;

//Equivalent for above:

// var data1; // Declaration hoisted to the top, initialized to undefined
// console.log(data1); // Accessing the variable after hoisting, before assignment
// data1 = 10; // Assignment remains in place

//? ==============================================================================================================================================================================

//! LET and CONST - //! How let and const hoisting works ??

//? 1. Declaration Only: let and const variables are declared during hoisting, but they are not initialized.
//? 2. Temporal Dead Zone (TDZ): They enter the Temporal Dead Zone (TDZ).
//?    The TDZ is a period from the start of the scope until the line where the variable is ACTUALLY declared.
//! 3. Access Before Declaration: If you try to access a let or const variable before its declaration
//!   (while it's in the TDZ), you will get a ReferenceError.
// Block Scope: let and const variables have block scope, meaning they are only accessible within the block (e.g., if statement, for loop, {}) where they are defined.
// const and Reassignment: const variables must be initialized when they are declared, and their values cannot be reassigned.

//----------------------------- EXAMPLE 1 --------------------------------------------------

data = 10;
console.log(data2); //! Ref error.
let data2;

//equivalent:

// {
// TDZ starts here ---------------------------------->
//   let data; // Declaration (hoisted by JS)
// ----------------------------------------------------->
//   data = 10;
//   console.log(data); //! ReferenceError
// -------------------------------------------------->
//   <let data;> // Actual declaration point, TDZ ends here.
// }

//----------------------------- EXAMPLE 2 --------------------------------------------------

console.log(data3); //! Ref error.
let data3 = 10;

//equivalent:

//{
// TDZ starts here ---------------------------------->
//  let data; // Declaration (hoisted by JS)
// -------------------------------------------------->
//  console.log(data); // ReferenceError
// -------------------------------------------------->
//   <let data = 10;> // Actual declaration and initialization, TDZ ends here.
// }

//----------------------------- EXAMPLE 3 --------------------------------------------------

let data;
console.log(data);
data = 10;

//equivalent:

//{
  // TDZ starts here ---------------------------------->
 //let data; // Actual Declaration and assigned undefined.
  // TDZ ends here-------------------------------------------------->
  //console.log(data); // Output: undefined
 //data = 10; // Assignment
//}

//----------------------------- EXAMPLE 4 --------------------------------------------------

//! VVI - check in notes


{
  const say = () => console.log(msg);
  let msg = "hi";
  say(); //hi
}


{
  const say = () => console.log(msg);
  say(); //! Ref error
  let msg = "hi";
}

//? ==============================================================================================================================================================================

//! Traditional function definitions are  hoisted.

jamoon(); //calling function before function declaration

function jamoon() {
  //function declaration

  console.log("i love jamoon");
}

//! Function expressions or arrow functions are NOT HOISTED.

// printer(); //Cannot access 'printer' before initialization

// myarrow("abhishek"); //Cannot access 'myarrow' before initialization

let printer = function () {
  console.log("I cant be hoisted");
};

let myarrow = (data) => {
  console.log("I cant be hoisted..", data);
};

//! Class declarations are NOT HOISTED in JavaScript.
//! which means you cannot use a class before it is declared.

const adidas = new Shoe("purple"); //Cannot access 'Shoe' before initialization

class Shoe {
  //class declaration
  color;

  constructor(color) {
    this.color = color;
  }

  get shoeColor() {
    console.log(`The shoe color is ; ${this.color}`);
  }
}
