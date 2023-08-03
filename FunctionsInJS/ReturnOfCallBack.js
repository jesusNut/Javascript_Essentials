//* This is to understand :

//* Return process of a callback function.

//! Callback function always return to main function/HOF.
//! It is then responsibility of HOF/main function to return the callback function itself.

//* How return works :

//* callback func.--> returns 'something' --> main function --> returns 'callback func' --> store in variable.

//Example 1:

//HOF:

function printer(fname, cbck) {
  console.log("I am printing from main function....");
  return cbck(fname);
}

//define callback function:

let myFunc = function (fname) {
  return fname.toUpperCase();
};

//call HOF:

let myResult = printer("abhishek", myFunc);
console.log("🚀 ~ myResult:", myResult); //undefined , if line 18 does not have return.

