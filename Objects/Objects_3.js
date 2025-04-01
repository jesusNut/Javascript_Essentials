
//! Creating Objects using => Object.create()

//* The Object.create() static method creates a new object,
//* using an existing object as the prototype of the newly created object.


//*** Usage 1

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

//3. Understand : 
//! Object.create(person) creates a new object (Abhishek) whose prototype is set to person.
//! It doesn't copy the properties of person directly onto Abhishek.

console.log(Abhishek); //{} , It means Abhishek doesn't have its own properties, but it inherits properties from 'person' through its prototype.

//4. Now just treat it like any other object e.g adding a propery here
Abhishek.name = 'Abhishek';
Abhishek.printIntroduction();  //My name is Abhishek. Am I human? false 

//! Note that : "name" is a property set on "Abhishek", but not on "person".
console.log(person); //name property will not be present here

//4. Inherited properties can be overwritten
Abhishek.isHuman = true;
Abhishek.printIntroduction(); //My name is Abhishek. Am I human? true



//** Usage 2 

const sdata = {
  getData(){
    console.log(`Hi I am ${this.fname} aged ${this.age}.`);
  },
};

const newLocal = Object.create(sdata, {
  fname: {
    value: "Abhishek",
  },
  age: {
    value: 99,
  },
});

console.log(Object.getPrototypeOf(newLocal) === sdata);
newLocal.getData();
console.log(newLocal);

