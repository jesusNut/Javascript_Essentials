
//! Creating Objects using => Object.create()

//* The Object.create() static method creates a new object,
//* using an existing object as the prototype of the newly created object.


//Steps:

//1. Identify a prototype of an existing object whose copy object you want to create.
const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };

console.log(person.printIntroduction()) //My name is undefined. Am I human? false

//2.use Object.create()
const Abhishek = Object.create(person);

//3. Now just treat it like any other object e.g adding a propery here
Abhishek.name = 'Abhishek';
Abhishek.printIntroduction();  //My name is Abhishek. Am I human? false 

//! Note that : "name" is a property set on "Abhishek", but not on "person"

//4. Inherited properties can be overwritten
Abhishek.isHuman = true;
Abhishek.printIntroduction(); //My name is Abhishek. Am I human? true



