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

    console.log(this.#lockPIN)
    if (this.#lockPIN === 9999) {
      console.log("Hello Hero..welcome to your Tesla Model no XXX.");
    } else {
      console.log("Go to hell you Hooman !!!!!!");
    }
  }
}

const myCar = new Car(9999);
myCar.startEngine();
