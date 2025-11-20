//* Inheritence when the derived class has a constructor explicitly written in it.

/**========================================================================
 **    ☠️☠️ Concept of  Implicit Constructor Inheritance in JS/TS ☠️☠️
 *========================================================================**/

//! 🎃🎃🎃 In JS and TS, if a subclass doesn't define its own constructor,
//! it inherits the superclass's constructor automatically. 🎃🎃🎃

class Mobile {
  num;
  static ram = "4GB";

  constructor(num) {
    this.num = num;
  }

  makecall() {
    console.log(`calling on ${this.num}`);
  }

  makeSMS() {
    console.log(`SMS on ${this.num}`);
  }

  static getRamDetails() {
    console.log("Ram in this mobile contains.." + this.ram);
  }
}

class Oneplus extends Mobile {}

const oplus = new Oneplus(7777777777);

//* 🎃🎃🎃 Below statements will work fine without any constructor 🎃🎃🎃 because :
//* We have not explicitly written any constructor in derived class - Oneplus.
//! In Java, same concept gives error as we have to explicitly write a Constructor with a super() call with one arg.

console.log(oplus.num);
oplus.makeSMS();
oplus.makecall();

//* so write now my derived class in equivalent to :

// class Oneplus extends Mobile {

//     constructor(...args) {
//         super(...args);
//     }
// }

//! BUT, JAVASCRIPT REQUIRES THE CHILD CLASS TO CALL SUPER() EXPLICITLY IF IT HAS A EXPLICITLY WRITTEN CONSTRUCTOR.
//*  the super() call must be the first statement within the derived class's constructor.
class Oppo extends Mobile {
  constructor(num) {
    //we have to make super call to base class explicitly, otherwise errors.
    //? ERROR if line 53 commented out : Must call super constructor in derived class before accessing 'this' or returning from derived constructor at line 49.
    super(num);
  }
}

const oppoObject = new Oppo(88888888);

console.log(oppoObject.num);
oppoObject.makeSMS();
oppoObject.makecall();

//* EXAMPLE 2:

class Animal {
  constructor() {}

  walk() {
    console.log("Walking ding dong ding dong...");
  }
}

class Bird extends Animal {
  constructor() {
    //we have to make super call to base class explicitly, otherwise errors.
    //? ERROR if line 76 commented out : Must call super constructor in derived class before accessing 'this' or returning from derived constructor at line 73.
    //super();
  }
  fly() {
    console.log("flying hawa..hawa.. hawa...");
  }
}

const hen = new Bird();

hen.walk();
