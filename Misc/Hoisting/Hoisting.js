//* HOISTING : Hoisting is JavaScript's default behavior of
//* moving all declarations to the top of the current scope.

//? SUMMARY---------------------------------------------------------------------------------

//! Var and traditional functions : HOISTED.
//! let, const, arrow functions, function expressions & classes - NOT HOISTED

//? -----------------------------------------------------------------------------------------
//! VAR - allows hoisting

data = 10; //assignment

console.log(data); //using variable before declaration.

var data; //declaration

//! LET and CONST - DOES NOT ALLOW hoisting

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

const adidas = new Shoe('purple'); //Cannot access 'Shoe' before initialization


class Shoe { //class declaration
  color;

  constructor(color) {
    this.color = color;
  }

  get shoeColor(){

    console.log(`The shoe color is ; ${this.color}`);
  }
}
