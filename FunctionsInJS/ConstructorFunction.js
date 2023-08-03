//! Before the advent of ES6 classes,
//! if we needed to create multiple objects from a single blueprint,
//! we used Constructor functions. So, CONSTRUCTOR FUNCTION IS EQUIVALENT TO ES6 Classes.

//* CONSTRUCTOR FUNCTIONS AND NEW KEYWORD

//! CONSTRUCTOR FUNCTIONS are used to define a custom type and
//! the NEW operator to create multiple objects from this type.

//! Convention 1: The name of a constructor function STARTS WITH A CAPITAL LETTER like Person, Document, etc.
//! Convention 2: A constructor function should be called only with the new operator.
//! Dont use arrow functions to create constructor functions as we can't use this keyword inside it.

//creating a constructor function

let MyAirlines = function (flightCode, headquaters, totalFlights) {
  this.flightCode = flightCode;
  this.headquaters = headquaters;
  this.totalFlights = totalFlights;
  this.printer = function(){

    return `The airlines is ${this.flightCode} operating from "${this.headquaters}" flying ${this.totalFlights} everyday !`
  }
};

//creating objects using new keyword

const etihadAirlines = new MyAirlines('Etihad', 'AbuDhabi', 999);
const emiratesAirlines = new MyAirlines('Emirates', 'Dubai', 1999);
const wideroeAirlines = new MyAirlines('Wideroe', 'Norway', 99);

// console.log(etihadAirlines)
// console.log(emiratesAirlines)
// console.log(wideroeAirlines)

console.log(etihadAirlines.printer())
console.log(emiratesAirlines.printer())
console.log(wideroeAirlines.printer())

//instanceof operator

console.log(etihadAirlines instanceof MyAirlines) //true

