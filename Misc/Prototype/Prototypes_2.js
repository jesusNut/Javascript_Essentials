//! Difference & Relation between ".__proto__" and ".prototype"?

//* In reality, the only true difference between .prototype and __proto__ is that
//* the former is a property of a  constructor function,
//* while the later is a property of a class instance.

//! so use .__proto__ with objects and .prototype with constructor functions.

//! //! EVERY OBJECT'S OR INSTANCE'S __PROTO__ PROPERTY POINTS TO PROTOTYPE OF ITS CONSTRUCTOR FUNCTION/CLASS

//? https://javascript.plainenglish.io/proto-vs-prototype-in-js-140b9b9c8cd5

//* Example 1: showing relation between ".__proto__" and ".prototype"

function iPhone() {} // constructor function

iPhone.prototype.faceID = function () {}; // a method for recognizing faces

iPhone.prototype.video = function () {}; // a method for taking 4k video

let newPhone = new iPhone(); // an iPhone 11

//! so, 'newPhone' will contain a property called __proto__ which will
//! point to prtotype of its constructor function i.e. 'iPhone'.

console.log(newPhone.__proto__ === iPhone.prototype); //true

//* Example 2: showing relation between ".__proto__" and ".prototype"

let obj = {
  fname: "abhishek",
  lname: "bhardwaj",
  age: 99,
};

//this is equivalent of writing

let obj11 = new Object({
  fname: "abhishek",
  lname: "bhardwaj",
  age: 99,
});

console.log(obj);
console.log(obj11);

//! so, obj will contain a property called __proto__ which will
//! point to prtotype of its constructor function i.e. Object.

console.log(obj.__proto__ === Object.prototype); //true

//* Example 3:  where one object ACCESSES properties and functions of other object using prototype.

//first object

const obj1 = {
  namer: "abhishek",
  greetings: function () {
    console.log("Hi Hooman !!");
  },
};

//second object

const obj2 = {
  roll: 12345,
};

console.log(obj2.namer); //undefined , as obj2 cannot access properties or methods of obj1

// Steps to solve : set obj2's prototype to contain 'namer' property & 'greetings' method.
//* Here, we have used .__proto__ with obj2 as its is an instance of Object class;
//* as the same can be represented as "obj2= new Object({...})"

console.log(obj2.__proto__ === Object.prototype); //true, as established in example 1

obj2.__proto__ = Object.create(obj1);

obj2.greetings();

//! Usage of Object.create() method:

//* The Object.create() method creates a new object and
//* allows you to specify an object that will be used as the new object's prototype.
