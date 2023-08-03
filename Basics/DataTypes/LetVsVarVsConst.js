//! Variables declared with var are in the function scope.
//! Variables declared as let or const are in the block scope.

function f1() {
  var a = 10;
}
console.log(a); //var, can't be accessed outside of function scope

{
  var b = 100;
}

console.log(b); //100 , as var is not scoped on block level.

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); //let, cannot be accessed outside of block scope

if (" ") {
  //block scope

  const data = 10;
  console.log(data);
}

console.log(data); //const, cannot be accessed outside of block scope

//! Hoisting is allowed for var.
//! Hoisting is NOT ALLOWED FOR let and const.

data = "abc";
console.log(data); //abc
console.log(star); //undefined, but no reference error.

var data;
var star = "somedata";

data1 = "abc";
console.log(data1); //Cannot access 'data1' before initialization

let data1;

//? 'CONST' DECLARATIONS MUST BE INITIALIZED.

//! Reassigning of value allowed for let and var.
//! Reassigning of value NOT ALLOWED for const as const are used for constants.

//! Redeclaration of variables are allowed in case of var in the same scope.
//! Redeclaration of variables are allowed in case of let and const in same scope.

var sage = "abc";

var sage = "def"; //completely valid, and console prints last value.

console.log(sage);

let maze = "abc";

//let maze = 'def'; //Cannot redeclare block-scoped variable 'maze'

const gaze = "abc";

//const gaze = 'def'; //cannot redeclare block-scoped variable 'gaze'

//! Redeclaration of all types of variables are allowed in case of var in the different scope.

let x = 100; //global scope

{
  let x = 200; //block scope

  console.log(x); //200 //concept of varible shadowing
}

console.log(x); //100
