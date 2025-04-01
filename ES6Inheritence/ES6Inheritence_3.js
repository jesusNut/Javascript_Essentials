//* super keyword used to access  Prototype properties and methods on BASE CLASS PROTOTYPE.
//* super() & super(args) is used for calling parent class constructors from child class.
//* super CAN be used to access parent instance methods.
//! super cannot be used to access instance variables of parent class, in child class.

//* Method overriding - possible for both static and instance methods.
//* Multiple and Multi-level inheritence using extends keyword.

//! Method overriding - POSSIBLE
//! Multi-level inheritence - POSSIBLE
//! MULTIPLE Inheritence -NOT POSSIBLE

//==========================================================================================================================

//! Concept 1 : Demo of method overriding & how to access base class methods.

class Animal {
  constructor() {}

  walk() {
    console.log("Walking ding dong ding dong...");
  }
}

class Bird extends Animal {
  constructor() {
    super();
  }

  walk() {
    //overrides walk() from baseclass
    console.log("Walking kuchuck kuchcuk kuchuk kuchuk...");
  }

  fly() {
    console.log("flying hawa..hawa.. hawa...");
  }

  allDetails() {
    super.walk(); //calling base class walk() method explicitly.
    this.walk();
    this.fly();
    // super.fly(); //! error : child class specific methods not accessible to parent and hence to super.
  }
}

const penguin = new Bird();

penguin.walk(); //If the walk() not present in the derived class then, the walk() from base class will be called.

penguin.allDetails();

//=========================================================================================================================

//! difference from Java: 1

class Vehicle {
  doors = 2;
  getDoors() {
    console.log(`I am from Vehicle..${this.doors}`);
  }
}

class Car extends Vehicle {
  doors = 5;
  getDoors() {
    super.getDoors();
    console.log(`I am from Car.. ${this.doors}`);
  }
}

new Car().getDoors();

//I am from Vehicle..5
//I am from Car.. 5

//! In java

//I am from Vehicle..2
//I am from Car.. 5

//=========================================================================================================================

//! difference from Java: 2

class Vehicle {
  fname = "Abhi";
}

class Car extends Vehicle {
  fname = "Money";

  getAllSDetails() {
    console.log(super.fname); //! super can't be used to access parent instance var.
    console.log(this.fname);
  }
}

new Car().getAllSDetails();

// undefined
// Money

//! BUT,

class Vehicle1 {
  static fname = "Abhi";

  static VehicleName() {
    console.log(`Coming from Vehicle...`);
  }
}

class Car extends Vehicle {
  static getAllDetails() {
    console.log(super.fname); // * super can be used to access Parent class static methods
    super.VehicleName();
  }
}

Car.getAllDetails();

// Abhi
// Coming from Vehicle...

//==========================================================================================================================

//! Overriding static methods in JS :

class Vehicle {
  static getDoors() {
    console.log(`I am from Vehicle..`);
  }
}

class Car extends Vehicle {
  static getDoors() {
    console.log(`I am from Car.. `);
  }

  static fly() {
    console.log(`flying....`);
  }

  static getAllSDetails() {
    super.getDoors();
    this.getDoors();
    this.fly();
  }
}

Car.getAllSDetails();

// I am from Vehicle..
// I am from Car..
// flying....

//==========================================================================================================================

//! concept 2: USING SUPER KEYWORD wrt to instance

//* super() & super(args) is used for calling parent class constructors from child class.
//* super CAN be used to access parent instance methods.
//! super CANNOT be used to access instance variables of parent class, in child class.

//? https://stackoverflow.com/questions/64418755/super-keyword-cannot-access-parent-property-in-javascript

class Base {
  basep = "default1";
  val;

  constructor(val) {
    this.val = val;
  }
  basef() {
    return 2;
  }
}

class Test1 extends Base {
  constructor(val, name) {
    super(val);
    this.name = name;
  }
  getp() {
    // console.log(this.name, this.val);
    // console.log(this.basep); //result: 'default1'.
    // console.log(super.basep); //! superr cannot be used to access parent class instance variables., So ===> 'undefined'
    // console.log(super.basef()); //! super CAN be used to access parent class instance methods., So works fine.
    // console.log(this.basef()); //! (in case of instance methods only) this and super both work
    //but recommended to use super while calling Base class methods
  }
}

let test = new Test1(1, "Raja");
test.getp();

//* EXAMPLE: super keyword used to access Prototype properties on BASE CLASS PROTOTYPE.

class Money {}

Money.prototype.nature = "Violent";

class Dollor extends Money {
  getNature() {
    console.log(`Nature of dollor is : ${super.nature}`); //! accessing inside a child class
  }
}

class Euro extends Money {
  getNature() {
    console.log(`Nature of euro is : ${super.nature}`);
  }
}

let dol1 = new Dollor();
let dol2 = new Dollor();
let eur1 = new Euro();
let eur2 = new Euro();

// dol1.getNature();
// dol2.getNature();
// eur1.getNature();
// eur2.getNature();

// Money.prototype.nature = "Peaceful";

// dol1.getNature();
// dol2.getNature();
// eur1.getNature();
// eur2.getNature();

//! Same concept for accessing Prototype METHODS on BASE CLASS PROTOTYPE as well.

class Todo {}

Todo.prototype.greet = () => {
  console.log(`Hi how are you !!!`);
};

class Child extends Todo {
  greetFromChildClass() {
    super.greet();
  }
}

new Child().greetFromChildClass(); //Hi how are you !!!

Todo.prototype.greet = () => {
  console.log(`Chal be nikal !!!!`); //Chal be nikal !!!!
};

new Child().greetFromChildClass();

//====================================================================================

//! You can only use super from within the child class's methods.
//! You cannot use it from outside the class or from an object instance.

class Parent {
  parentMethod() {
    console.log("Parent method");
  }
}

Parent.prototype.parentPrototypeProperty = "Parent prototype value";

class Child1 extends Parent {
  childMethod() {
    super.parentMethod(); //*correct
    console.log(super.parentPrototypeProperty); //*correct
  }
}

const myChild = new Child1();
myChild.childMethod(); //* works fine

// super.parentMethod(); // Incorrect: Cannot use super outside of class methods
// console.log(super.parentPrototypeProperty); // Incorrect: Cannot use super outside of class methods

//=======================================================================================================

//! concept 3: USING SUPER KEYWORD wrt to static

//* super CAN be used to access parent static methods.
//* super CAN be used to access static variables of parent class, in child class.

class Vehicle {
  static fname = "Abhi";

  static VehicleName() {
    console.log(`Coming from Vehicle...`);
  }
}

class Car extends Vehicle {
  static getAllDetails() {
    console.log(super.fname);
    super.VehicleName();
  }
}

Car.getAllDetails();

// Abhi
// Coming from Vehicle...

//==========================================================================================================================

//! JS does not support multiple inheritence.

class A {}

class B {}

// class C extends A,B{ //! error : classes can only extend a single class

// }
