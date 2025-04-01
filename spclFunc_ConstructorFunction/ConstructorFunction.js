//* Before the advent of ES6 classes,
//* if we needed to create multiple objects from a single blueprint,
//* we used Constructor functions. So, CONSTRUCTOR FUNCTION IS EQUIVALENT TO
//* ES6 Classes.

//? https://www.programiz.com/javascript/constructor-function

//! CONSTRUCTOR FUNCTIONS AND NEW KEYWORD

//* CONSTRUCTOR FUNCTIONS are used to define a custom type (using this keyword) and
//* the NEW operator to create multiple objects from this type.

//! Convention 1: The name of a constructor function STARTS WITH A CAPITAL LETTER like Person, Document, etc.
//! Convention 2: A constructor function should be called only with the new operator.
//! Dont use arrow functions to create constructor functions as we can't use this keyword inside it.
//! but inside a traditionally written constructor function, arrow function can be used with 'this'.

//------------------------------------------------------------------------------------------------------------

//* ############## Using the "this" Keyword #####################

//! When the 'this' keyword is used in a constructor function, it refers to newly created object instance that is being constructed.

//------------------------------------------------------------------------------------------------------------

//* ############## CREATING A CONSTRUCTOR FUNCTION  WITHOUT PARAMETERS #####################

function User1() {
  this.name = 'Alien';
  this.age = 9999; //! semicolon is mandatory.
  this.coward = true;
  // this.printDetails = function () { //! methods needs to be created with this keyword only.
  //   console.log(`Details for this alien is ${this.name}---${this.age}---${this.coward}`);
  // }
  this.printDetails =  () =>{ //! inside a traditionally written constructor function, arrow function can be used with 'this'.
    console.log(`Details for this alien is ${this.name}---${this.age}---${this.coward}`);
  }

}

var user1 = new User1();
var user2 = new User1();
var user3 = new User1();

user1.printDetails();
user2.printDetails();
user3.printDetails();

// Details for this alien is Alien---9999---true     
// Details for this alien is Alien---9999---true     
// Details for this alien is Alien---9999---true    

//------------------------------------------------------------------------------------------------------------

//* ############## CREATING A CONSTRUCTOR FUNCTION  WITH PARAMETERS #####################


//! 👻👻PLEASE NOTE👻👻: here iataCode,iataHanger,fleetSize behaves like instance varibles,
//! i.e. separate copy for each created object as per parameter values ALTHOUGH not explicitly declared.

let MyAirlines = function (flightCode, headquaters, totalFlights) {

  this.iataCode = flightCode;
  this.iataHanger = headquaters;
  this.fleetSize = totalFlights;
  this.printer = function () {
    return `The airlines is ${this.iataCode} operating from "${this.iataHanger}" flying ${this.fleetSize} everyday !`
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

//? https://www.javascripttutorial.net/javascript-instanceof/ 

console.log(etihadAirlines instanceof MyAirlines) //true
console.log(etihadAirlines instanceof Object) //true

//------------------------------------------------------------------------------------------------------------

//* ############## IMPORTANT POINTS ABOUT CONSTRUCTOR FUNCTIONS #####################

//! *********** Adding a Property to a Constructor function **************

//! WE CANNOT ADD A NEW PROPERTY TO AN CONSTRUCTOR FUNCTION THE SAME WAY WE ADD A NEW PROPERTY
//! TO AN EXISTING OBJECT/OBJECT LITERAL.

//-------------------------------------------------
//object litral created object
let someObj1 = {
  name: 'Abhishek'
}
//adding property right way for Object literals
someObj1.networth = '1000 Billions NJ';
//accessing externally added property
console.log(someObj1.networth); //1000 Billions NJ
//-------------------------------------------------
//constructor function
function Gurga() {
  this.name = 'abhishek';
  this.age = '999';
}
//adding property wrong way
Gurga.networth = '100000 DOLLOR';
console.log(Gurga.networth) //100000 DOLLOR
//creating its object and accessing networth
let abhi = new Gurga();
console.log(abhi.networth); //undefined

//! SO, TO ADD A NEW PROPERTY TO A CONSTRUCTOR WHICH CAN BE ACCESSED BY ALL OBJECTS CREATED OUT OF IT using new KEYWORD
//! , WE MUST ADD IT TO THE CONSTRUCTOR FUNCTION.

//-------------------------------------------------
//constructor function
function Alien() {
  this.name = 'abhishek';
  this.age = '999';
  //adding property right way
  this.networth = '100000 INR';
}
//creating its objects and accessing networth
let raka = new Alien();
console.log(raka.networth); //100000 INR
let dhaka = new Alien();
console.log(dhaka.networth); //100000 INR


//! *********** Adding a Method to a Constructor function **************

//same concept as above

// WE CANNOT ADD A NEW METHOD TO AN CONSTRUCTOR FUNCTION THE SAME WAY YOU ADD A NEW METHOD TO AN EXISTING OBJECT/OBJECT LITERAL.

// ADDING METHODS TO AN OBJECT CONSTRUCTOR MUST BE DONE INSIDE THE CONSTRUCTOR FUNCTION.

//! *********** Adding a Property to an Object created using Constructor function **************

function Wrestler(name, weight) {
  this.name = name;
  this.weight = weight;
}
const ray = new Wrestler();
const undertaker = new Wrestler();

//adding a property to 'ray'.
ray.nationality = 'PKMKB'; //The property will be added ONLY to 'ray'. Not to 'undertaker'. (Not to any other Wrestler objects).
console.log(ray.nationality); //PKMKB
console.log(undertaker.nationality); //undefined

//! *********** Adding a Method to an Object created using Constructor function ****************

function Sumo(name, weight) {
  this.name = name;
  this.weight = weight;
}
const yakazumo = new Sumo('yakzumo', 999);
const honchikai = new Sumo('honchikai', 1000);

//adding a method to 'yakazumo'.
yakazumo.printDetails = function () { //The property will be added ONLY to 'yakazumo'. Not to 'honchikai'. (Not to any other Sumo objects).
  console.log(`name is ${this.name} and weight is ${this.weight}`);
}
yakazumo.printDetails(); //name is yakzumo and weight is 999
honchikai.printDetails();//TypeError: honchikai.printDetails is not a function


//* ############## Constructor vs Object Literal #####################

// An object literal is typically used to create a single object whereas
// a constructor is useful for creating multiple objects.