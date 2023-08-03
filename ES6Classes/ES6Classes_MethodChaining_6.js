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

