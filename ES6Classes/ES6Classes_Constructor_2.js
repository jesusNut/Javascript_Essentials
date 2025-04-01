//! In order to write constructor, use keyword 'constructor'[Not like java where its equal to classname]
//! Constructors are used to initialize objects.
//! If you don't provide your own constructor,
//! then AN EMPTY DEFAULT CONSTRUCTOR WILL BE SUPPLIED FOR YOU.

//! A class cannot have more than one constructor method.
//! SO, CONSTRUCTOR OVERLOADING IS NOT POSSIBLE IN JS.[Not like Java]

class Car {
  #lockPIN; //its good to initialize instance variables.
  // But the code works well even without it.

  constructor(lockPIN) {
    this.#lockPIN = lockPIN;
  }

  startEngine() {
    console.log(this.#lockPIN);
    if (this.#lockPIN === 9999) {
      console.log("Hello Hero..welcome to your Tesla Model no XXX.");
    } else {
      console.log("Go to hell you Hooman !!!!!!");
    }
  }
}

const myCar = new Car(9999);
myCar.startEngine();

//----------------------------------------------------------------------------------

//! You can create instance properties directly inside the constructor
//! without declaring them as class fields,
//!  but you still cannot create private fields directly in the constructor without declaring them in the class body.

class Abc {
  constructor(publicInst) {
    this.publicInst = publicInst; //* works fine
  }
}

console.log(new Abc('Money').publicInst); 

// class Abcd {
//   constructor(#publicInst) { //! Error
//     this.#publicInst = #publicInst; 
//   }
// }