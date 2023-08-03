//! Functions can be written in JS in mutiple ways

//* Writing functions in multiple ways

// traditional named function

function welcomer1() {
  console.log("Hello human");
}

// function expressions

let welcomer2 = function () {
  console.log("Hello human");
};

// arrow functions

let welcomer3 = () => {
  console.log("Hello human");
};

//Anonymous functions : see the codes below;

//* Example 1 : Function without parameter.

function gretter() {
  console.log("Hello human");
}

//gretter();  //calling a function

//* Example 2 : Function with parameters.

//? https://www.w3schools.com/js/js_function_parameters.asp

//! JavaScript function definitions do not specify data types for parameters.

//! JavaScript functions do not perform type checking on the passed arguments.

//! JavaScript functions do not check the number of arguments received.

function greetWithName(name, age) {
  console.log(
    "Hello human : " +
      name +
      " ..hahaha..you are : " +
      age +
      " You will die soon."
  );
}

// greetWithName('abhishek', 30)

//* Example 3 : Function with return

//! Return statements must be last statement to execute in a function

//Example a.: write a function returning a String

let data = function fullName(firstName, lastName) {
  return firstName.toUpperCase() + "--" + lastName.toUpperCase();
};

//console.log(fullName('abhishek','bhardwaj'))
//console.log(data)

//! Every function returns a UNDEFINED value if it does not return something explicitly.

//Example b.: print return of a function which does not return anything

let jethalal = function () {
  console.log("Ae ..pagal aurat....");
};

let myResult = jethalal();
console.log("🚀 ~ myResult:", myResult); //undefined

//* Example 4 : Function with default values of parameters

//! If a function is called with missing arguments (less than declared),
//! the MISSING VALUES ARE SET TO UNDEFINED.

function multiplier_old(multiplyBy, intendedNo) {
  console.log(intendedNo * multiplyBy);
}

//multiplier_old(5); //NaN as 5*undefined is calculated

//The below function will take first arg as 2 and sencond arg as 100.

function multiplier(multiplyBy = 2, intendedNo = 100) {
  console.log(intendedNo * multiplyBy);
}

// multiplier(5,200);// 5*200=1000
// multiplier(5); //5*100=500
// multiplier(); //2*100=200

//* Example 5 : FUNCTION EXPRESSIONS / Assigning functions to variables / named functions

let myFunction = function (a, b) {
  console.log(a + b);
};

//myFunction(22,33)

//* Example 6 : ARROW FUNCTIONS

let ageDeterminer = (currentYear, birthYear) => {
  return currentYear - birthYear;
};

//console.log(`the age of human is : ${ageDeterminer(2023, 1992)}`)

//* Example 6 : IIFE - Immediately Invoked Functional Expressions
//* Self invoking functions
//* concept of anonymous functions and its usage.

//we can write an nonymous function and invoke it at the same time.

//way 1: traditional ways

(function (myname) {
  console.log(`hey man ${myname}..you are awesome man !!`);
})("abhishek");

//way 2: using arrow functions

// ((myname) => {

//   console.log(`hey man ${myname}..you are awesome man !!`);
// })('Nibba')

//! HAVING TWO SELF-INVOKING FUNCTIONS IN THE SAME SCRIPT CAUSES A PROBLEM.

//! typeof operator on any function returns 'function'

let somefunc = () => {
  return "Hey hooman !!!";
};

console.log(typeof somefunc);

//! The 'toString()' method returns the function body as a string.

console.log(somefunc.toString());

//! use '.length' property to know the number of arguments of any 3rd party/unknown function

function adder(a, b, c) {
  return a + b + c;
}

console.log(adder.length); //3
