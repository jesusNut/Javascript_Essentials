//* How to implement inheritence using prototype concept before the ES6 classes concept.

//! ***CONCEPT : Usage of call()

let object1 = {
  firstname: "Abhishek",
  lastName: "Bhardwaj",
  age: 99,
};

object1.printDetails = function (currentJob) {
  console.log(
    `${this.firstname} ${this.lastName} who is ${this.age} is a ${currentJob}`
  );
};

object1.printDetails("tester");

let object2 = {
  firstname: "Kadam",
  lastName: "Badana",
  age: 999,
};

object1.printDetails.call(object2, "yogi");

//! *** CONCEPT : Below is the way to inherit without using extends keyword of ES6 classes.
//! This is called Prototypical Inheritence.

//* EXAMPLE 1:

//const function - behaving like base class

function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log("walking on " + this.legs + " legs");
};

function Bird(legs) {
  Animal.call(this, legs);
}

// creating a child called 'Bird' which will inherit 'Animal' using prototype.

Bird.prototype = Object.create(Animal.prototype);

const hen = new Bird(4);

hen.walk(); //with line

//* EXAMPLE 2 : 

//const function - behaving like base class

let car = function (wheels, engine, color) {
  this.wheels = wheels;
  this.engine = engine;
  this.color = color;
};

car.prototype.printDetails = function () {
  console.log(`${this.wheels}------${this.engine}----${this.color}`);
};

// creating a child 'Honda' which will inherit 'car' using prototype.

//* Step 1 : Inherit every property and method from within car constructor function.

let Honda = function (wheels, engine, color, price) {
  car.call(this, wheels, engine, color);
  this.price = price;
};

//* Step 2 : Inherit 'printDetails' method from within car prototype.

//Honda.prototype = Object.create(car.prototype); //! way 1 : create an object holding 'car.prototype' , later assigned to prototype of Honda.
const hondaObj1 = new Honda(8, "500cc", "red", 999.99); //first object
const hondaObj2 = new Honda(88, "900cc", "blue", 777.77); //second object

//! both ways 1 and 2 are valid as we know that :

console.log(hondaObj1.__proto__ === Honda.prototype); //true
console.log(hondaObj2.__proto__ === Honda.prototype); //true

hondaObj1.__proto__ = Object.create(car.prototype); //! way 2
hondaObj2.__proto__ = Object.create(car.prototype); //! way 2

hondaObj1.printDetails();
hondaObj2.printDetails();

//! difference between way 1 and way 2

//* See, in way 1, we are setting the prototype of the constructor function named 'Honda' as
//* the object holding prototype of car (having 'printDetails' method ).
//* So, both objects 'hondaObj1' & 'hondaObj2' will have access to 'printDetails' method  as both
//* are objects created from constructor function named 'Honda'.

//* But in case of Way 2, we have to use (as 'hondaObj1' & 'hondaObj2' are objects and
//* in case of objects we use '.__proto__') and set '.__proto__' property of both objects individually.

//* comment way 1 while using way 2 ; then run and vice-versa.
