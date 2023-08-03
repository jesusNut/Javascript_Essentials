//* super keyword used to access Base class properties and methods
//* Method overriding
//* Multiple and mUlti-level inheritence uinsg extends keyword.

//! Method overriding - POSSIBLE
//! Multiple Inheritence -NOT POSSIBLE
//! Multi-level inheritence - POSSIBLE

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
    super.walk(); //calling base class walk explicitly.
    this.walk();
    this.fly();
  }
}

const penguin = new Bird();

penguin.walk(); //If the walk() not present in the derived class then, the walk() from base class will be called.

penguin.allDetails();
