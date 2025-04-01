//! How to chain methods in a class

//* Example 1:

class Employee {
  #fname;
  #lname;
  #fullName = "";

  constructor(fname, lname, age, salary) {
    this.#fname = fname;
    this.#lname = lname;
  }

  appendSalutation() {
    this.#fname = "Mr." + this.#fname;
    return this;
  }

  setFullName() {
    this.#fullName = this.#fname + " " + this.#lname;
    return this;
  }

  getGreetings() {
    return "Welcome to HIS HIGHNESS... " + this.#fullName;
  }
}


const abhishek = new Employee('Karan','Bahadur');

const greetings = abhishek.appendSalutation().setFullName().getGreetings();
console.log("🚀 ~ greetings:", greetings)

//! 'this' returned from a static method will refer the class, not the Object


let Student = class {
  static univ = "SLIET";

  static greet() {
    console.log(`Hi... how are you?`);
    return this;
  }

  static greetNight() {
    console.log(`Good Night !`);
    return this;
  }

  print() {
    console.log(`I will print something!!`);
  }
};

let abhi = new Student("Abhishek", 22);
console.log(Student.greet().greetNight().univ);  //* works fine.
// Hi... how are you?
// Good Night !
// SLIET
//console.log(Student.greet().print()); //! ERROR - print() needs Object to be accessed.

