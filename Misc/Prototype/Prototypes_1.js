//! https://stackoverflow.com/questions/12661416/it-is-said-that-all-javascript-objects-have-a-prototype-property-but-i-only-see

//* What is a prototype and Prototypical inheritance?

//! PROTOTYPES ARE THE MECHANISM BY WHICH JAVASCRIPT OBJECTS INHERIT FEATURES FROM ONE ANOTHER.

// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype.

// When you try to access a property of an object: if the property can't be found in the object itself,
// the prototype is searched for the property. If the property still can't be found,
// then the prototype's prototype is searched, and so on until either the property is found,
// or the end of the chain is reached, in which case undefined is returned.

//! A prototype property can hold both function and properties.

//* Example 1: Prototype holding a method for a constructor function.

//creating a constructor function with 4 properties and 1 method

let MyAirlines = function (flightCode, headquaters, totalFlights) {
  this.flightCode = flightCode;
  this.headquaters = headquaters;
  this.totalFlights = totalFlights;
  this.printer = function () {
    return `The airlines is ${this.flightCode} operating from "${this.headquaters}" flying ${this.totalFlights} everyday !`;
  };
};

console.log(MyAirlines.prototype); //empty prototype at this point.

//* Using prototype to declare one more new method(function inside an object) for a const. function called MyAirlines.

MyAirlines.prototype.addFlights = function (newFlights) {
  return this.totalFlights + newFlights;
};

//* Create an object and call the method 'addFlights'.
//* The above created function 'addFlights' will be now available for all the Objects getting created using
//* MyAirlines constructor function.

//! This concept is called PROTOTYPICAL INHERITENCE.

const jetAirways = new MyAirlines("Jey airways", "Bihar", -99); //created object

console.log(jetAirways.addFlights(100)); //calling method defined using prototype

console.log(MyAirlines.prototype); //shows methods (here - addFlights) stored in prototype
console.log(jetAirways); //but does not show the method added in proptype in original object.

console.log('-------------------------------------------------------------------------------')

//! RELATION BETWEEN '.__proto__' and 'prototype'.

//! EVERY OBJECT'S OR INSTANCE'S __PROTO__ PROPERTY POINTS TO PROTOTYPE OF ITS CONSTRUCTOR FUNCTION/CLASS

console.log(jetAirways.__proto__); // prototype proprty (__proto__) of jetAirways Object is pointing to 'MyAirlines.prototype'
console.log(jetAirways.__proto__ === MyAirlines.prototype); //true

console.log('-------------------------------------------------------------------------------')

//* Example 2 : Prototype holding a property for a constructor function.

MyAirlines.prototype.crewcount = 599;

console.log(jetAirways.crewcount);

//* Example 3 : use 'getPrototypeOf()' method to get prototype of an object instead of __proto__

var proto = Object.getPrototypeOf(jetAirways);

console.log(proto);

console.log(jetAirways.__proto__);

//* Example 4 : What will happen if the object already has the same property/method which is
//* also defined in prototype.

//! The method which is already present in any object/const. function will be called and not the
//! one which is defined in prototype.

function Animal(name, energy) {
  this.name = name;
  this.energy = energy;

  this.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  };

  this.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  };

  this.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  };
}

Animal.prototype.play = function (mylen) {
  console.log(
    "I will not be called as play method already present in Animal const. func",
    mylen
  );
};

const rabbit = new Animal("Shahi", 666);

rabbit.play(100); //check the same code by commenting play method in Animal const. func.
