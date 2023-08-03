//! Objects are collection of properties, functions and arrays
//! and can have a name like a variable.

//* Creating objects using object literal syntax

//creating a blank object with name 'myobj1'

let myobj1 = {};

console.log(typeof myobj1); //object

// creating objects with properties

//! keys are always String and no need to put them in quotes.
//! value can be of any data type.
//! key value pair needs to be separted using colons

let student = {
  id: 22,
  firstName: "abhishek",
  lastName: "bhardwaj",
  age: 99,
  doj: "20-02-1879",
  address: {
    city: "Los Angeles",
    state: "California",
  },
  skills: ["php", "c++", "gossip"],
};

//! getting entire object as it is.

console.log(student);

//! accessing properties - way 1 [using Dot operator]

console.log(student.id);
console.log(student.firstName);
console.log(student.address);
console.log(student.skills);

//! accessing properties - way 2 [ARRAY KIND OF NOTATION]

console.log(student["id"]);
console.log(student["firstName"]);
console.log(student["address"]);
console.log(student["skills"]);

//more examples:

console.log(student["address"]["city"]);
console.log(student.address.city);

console.log(student["skills"][0]);
console.log(student.skills[0]);

//! accessing PROPERTIES - way 3 [Object.keys() & Object.values() INBUILT METHOD]

const keysArray = Object.keys(Object.keys(student)); //gives string[] of all keys
console.log(keysArray); //[ 'id', 'firstName', 'lastName', 'age', 'doj', 'address', 'skills' ]

const valuesArray = Object.values(student); //gives string[] of all values
console.log(valuesArray);

//! Accessing a property which is not available gives 'undefined'

console.log(student.peace);

//! We can put keys of a property in single quotes in certain scenarios:

//1. I want the key to be 'first<space>named' & 'last<space>named'

let student1 = {
  id: 22,
  "first named": "abhishek",
  "last named": "bhardwaj",
};

//! Scenarios where accessing properties through ARRAY KIND OF NOTATION is the only option

//In above object,
//only way to access 'first named' &  'last named' property is through ARRAY KIND OF NOTATION

//console.log(student1.first named) //gives error

console.log(student1["first named"]); //correct and only way
console.log(student1["last named"]); //correct and only way

// We will take some user input which will define which property to access at run time
//so, lets say user asks to access firstName. Then the only way left to access is using
//ARRY KIND OF NOTATION

let userInputAtRuntime = "firstName";

let student2 = {
  id: 22,
  firstName: "abhishek",
  lastName: "bhardwaj",
};

console.log(student2[userInputAtRuntime]); //abhishek
console.log(student2.userInputAtRuntime); //undefined

//! Adding properties to an object externally.

let student3 = {
  id: 22,
  firstName: "abhishek",
  lastName: "bhardwaj",
};

//add phone no as 7788667788

student3.phoneno = 7788667788;

console.log(student3); //see that phoneno property gets added to the object.
//{
//   id: 22,
//   firstName: 'abhishek',
//   lastName: 'bhardwaj',
//   phoneno: 7788667788
// }

//! Adding methods to an object externally.

let object1 = {
  firstname: "Abhishek",
  lastName: "Bhardwaj",
  age: 99,
};

object1.printDetails = function (currentJob) {
  console.log(
    `${this.firstname} ${this.lastName} who is ${this.age} is a ${currentJob}`
  );
};

object1.printDetails("tester");

//! Modifying properties of an object externally.

student3.firstName = "Khalnayak";

console.log(student3.firstName); //Khalnayak

//! deleting a property of an object - delete keyword

delete student3.lastName;

console.log(student3); //{ id: 22, firstName: 'Kahalnayak', phoneno: 7788667788 }

//! for in loop

//? https://flexiple.com/javascript/loop-through-object-javascript/

//Example 1 : print all properties of an Object

let student4 = {
  id: 22,
  firstName: "abhishek",
  lastName: "bhardwaj",
  age: 99,
  doj: "20-02-1879",
  address: {
    city: "Los Angeles",
    state: "California",
  },
  skills: ["php", "c++", "gossip"],
};

for (const key in student4) {
  if (typeof student4[key] === "object") {
    for (const innerKey in student4[key]) {
      console.log(innerKey + "---" + student4[key][innerKey]);
    }
  } else console.log(key + "---" + student4[key]);
}

//Example 2: print all properties as well as method:

let student5 = {
  id: 22,
  firstName: "abhishek",
  lastName: "bhardwaj",
  age: 99,
  doj: "20-02-1879",
  grettings: function () {
    console.log(this.id + "-------" + this.firstName);
  },
};

for (let key in student5) {
  if (typeof student5[key] === "function") {
    student5[key](); //calling the method greetings
  } else console.log(student5[key]);
}

//! OBJECT METHODS : writing functions inside objects (can use traditional way or arrow functions)

let person = {
  firstName: "Tadika",
  lastName: "Bandari",
  ageCalculator: function (birthyear, currentYear) {
    return currentYear - birthyear;
  },

  doGrettings: (data) => {
    console.log(`hi beautiful..sexy..you gonna die one day ${data} hahaha...`);
  },
};

//accessing object methods

console.log(person.ageCalculator(1992, 2023));
person.doGrettings("mallika sherawat");

//! Objects inside an array

let blocklist = [
  { firstName: "sharda", lastname: "Bhagat", age: 22 },
  { firstName: "Garima", lastname: "Poddar", age: 11 },
  { firstName: "Nehal", lastname: "Duttareya", age: 88 },
];

//accessing properties

console.log(blocklist[1].firstName); //Garima

//iterate above using for-each and for-in loops

blocklist.forEach((objData) => {
  for (const key in objData) {
    console.log(key + "----" + objData[key]);
  }

  console.log("###########");
});

//! this KEYWORD
//! In an object method, 'this' refers to the current object.
//! Methods like call(), apply(), and bind() can refer this to any object. [check from video links provided in notes]

//! this KEYWORD IS NOT ALLOWED WITH ARROW FUNCTIONS.

let dabba1 = {
  maindish: "rice",
  sidedish: "salad",

  eater: function (data) {
    return `${data} is going to eat ${this.maindish} and ${this.sidedish} today !!`;
  },
};

console.log(dabba1.eater("ankush")); //ankush is going to eat rice and salad today !!

//! Assigning DYNAMIC VALUES & KEYS in an object.

let testedBy = "Abhishek";
let machinedId = "22.33.44.55";
let envProperty = "testConfig";

let reportData = {
  testID: 1234,
  runOnDay: new Date(), //dynamic value
  tester: testedBy, //assigned from outside variable
  macId: machinedId.length > 0 ? machinedId : "unknown", //an expression
  [envProperty]: "some data", //dynamic key
};

console.log(reportData["macId"]); //check with empty string on line 4.
console.log(reportData.testConfig); //!'some data' - right way to access dynamic key
console.log(reportData.envProperty); //!undefined - wrong way to access dynamic key