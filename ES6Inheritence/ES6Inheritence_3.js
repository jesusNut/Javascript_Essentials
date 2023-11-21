//* super keyword used to access  properties and methods on BASE CLASS PROTOTYPE.
//* Method overriding
//* Multiple and Multi-level inheritence using extends keyword.

//! Method overriding - POSSIBLE
//! Multiple Inheritence -NOT POSSIBLE
//! Multi-level inheritence - POSSIBLE

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
  }
}

const penguin = new Bird();

penguin.walk(); //If the walk() not present in the derived class then, the walk() from base class will be called.

penguin.allDetails();


//==========================================================================================================================

//! concept 2: SUPER KEYWORD USED TO ACCESS  PROPERTIES AND METHODS ON BASE CLASS PROTOTYPE.


//? https://stackoverflow.com/questions/64418755/super-keyword-cannot-access-parent-property-in-javascript

class Base{

  basep = 'default1';
  constructor(val){
      this.val = val;
  }
  basef(){
      return 2;
  }
}

class Test1 extends Base{

  constructor(val,name){
      super(val);
      this.name=name;
  }
  getp(){
      console.log(this.name,this.val);
      console.log(this.basep); //(in case of property) result: 'default1'. 
      console.log(super.basep);//! if "this" is changed to "super" ===>  result: undefined
      console.log(super.basef()); 
      console.log(this.basef());//(in case of methods) this and super both work 
      //but recommended to use super while calling Base class methods
  }
}

let test= new Test1(1,'Raja');
test.getp();