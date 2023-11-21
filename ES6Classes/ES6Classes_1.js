//* Class
//* public and private instance variables.
//* public and private instance methods.
//* accessing instance variables and instance methods inside instance methods.
//* getters and setters.
//* Method overloading - NOT POSSIBLE in JS

//! class is created using class keyword. It is ES6 concept.
//! class name should start with uppercase.
//! In class we can have private and public - instance and static variables.
//! In class we can have private and public - instance and static methods.

class Mobile {
  //while declaring the instance or static variables, no need to write var/let/const.
  //It is a good practice to declare variables. Otherwise we can directly write
  //instance variables inside constructors as well.

  //? DECLARING VARIABLES:

  phoneModel = "Oneplus"; //we can provide initial values for variables, remains same for every object.

  price; //If initial value not provided, we might get undefined.

  #unlockPIN = 1234; //use # infront of var and functions to make it private.

  //? WRITING FUNCTIONS FOR THE CLASS:

  //! Writing 'function' keyword with methods(function) inside of class gives error.

  makeCall() {
    console.log("calling all debtors....."); //instance method
  }

  getTime() {
    return "the time now is : " + " 12PM"; //instance method with return type
  }

  getUnlockPIN() {
    console.log(this.getTime()); //calling an instance method inside another instance method.

    //! MANDATORY TO USE 'this' keyword to access instance methods [Not like java] inside class.

    return this.#unlockPIN;

    //! MANDATORY TO USE 'this' keyword to access instance variables [Not like java] inside class.

    //! private variables can be accessed inside classes scope only & cant be accessed outside class scope.
  }

  getAllData() {
    return ` Data returned is ${this.phoneModel} and its priced at $ ${this.price}`;

    //using instance variables inside of instance method.

    //! Mandatory to use 'this' keyword to access instance variables [Not like java] inside class.
  }

  //? WRITING GETTERS AND SETTERS

  //write getter and setters to access private variable.
  //use 'get' & 'set' to write getters and setters. Use them like properties and not methods.

  get unlockPIN() {
    return this.#unlockPIN;
  }

  set unlockPIN(overriderPIN) {
    this.#unlockPIN = overriderPIN;
  }
}

//creating objects and accessing class members

const myMobile1 = new Mobile();

// console.log(myMobile1.price); //undefined
// myMobile1.price = 999.99;
// console.log(myMobile1.price); //999.99
// console.log(myMobile1.phoneModel); //Oneplus
// myMobile1.phoneModel = "Nokia";
// console.log(myMobile1.phoneModel); //Nokia
// myMobile1.makeCall();
// console.log(myMobile1.getTime());
// console.log(myMobile1.getUnlockPIN())
//console.log(myMobile1.getAllData());

// console.log(myMobile1.unlockPIN) //! 1234 (accessing getter as a property and not a method)
// myMobile1.unlockPIN = 9876;      //! (accessing setter as a property and not a method)
// console.log(myMobile1.unlockPIN) //9876

//! METHOD OVERLOADING IS NOT POSSIBLE IN JS.
//! JavaScript does allow us to create multiple functions with the same name. But it overrides the previously written function.
//! It always calls the last declared function irrespective of how many functions you have declared with same name.


//------------------------------------------------------------------------------------

//* ********* Multiple ways to write methods inside a class*********

class Wheat {

  constructor(quality) {
    this.quality = quality;
  }

  //way 1

  printOne() {
    console.log(`I am one kg wheat of ${this.quality} quality.`);
  }

  //way 2

  printTwo = function () {
    console.log(`I am one kg wheat of ${this.quality} quality.`);
  }

  //way 3

  printThree = ()=>{
    console.log(`I am one kg wheat of ${this.quality} quality.`);
  }

}


const pack1 = new Wheat('High');

pack1.printOne();
pack1.printTwo();
pack1.printThree();

//todo : Arrow Function returns undefined when called from an object but
//todo   returns a string when called from a class instance.

//? https://stackoverflow.com/questions/73430164/arrow-function-returns-undefined-when-called-from-an-object-but-returns-a-string