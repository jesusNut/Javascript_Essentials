//* Important functions of Object class

//? https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript

//! 1. Merging two objects - Object.assign() & spread Operator

//* WAY 1: Object.assign()

let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

let obj2 = {
  d: 4,
  e: 5,
  f: 6,
};

//Object.assign(obj1, obj2); //merge obj2 into obj1

//console.log(obj1);

//* WAY 2: using spread operator

let resultantObj = {
  ...obj1,
  ...obj2,
};

console.log(resultantObj);

//! 2. Object.keys() & Object.values()

let obj3 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.keys(obj3));
console.log(Object.values(obj3));

//! 3. Object.enteries() -  CONVERT AN OBJECT INTO ARRAY.
//! Creates a nested array of the key/value pairs of an object.

let obj4 = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    z: 11,
    y: 12,
  },
};

console.log(Object.entries(obj4));

//[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', { z: 11, y: 12 } ] ]

//! 4. Object.fromEntries() - transforms a list of key-value pairs
//! e.g., MAP into an object.

const myMap = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

let resultantObj1 = Object.fromEntries(myMap);

console.log(resultantObj1); //{ foo: 'bar', baz: 42 }
console.log(resultantObj1.constructor); //[Function: Object]

//! ***** Usage of JSON.stringify()

//Problem statement : I need to print each & every property of an object below:

let myObj = {
  fname: "abhishek",
  lname: "bhardwaj",
  age: 99,
  isRich: true,
  address: {
    street: "30 downing street",
    city: "Las Vagas",
    state: "Bihar",
  },
};

//printing values using for-in loop without JSON.stringify

for (const key in myObj) {
  console.log(`${key}------${myObj[key]}`);
}

//result :
// fname------abhishek
// lname------bhardwaj
// age------99
// isRich------true
// address------[object Object] //* Pay attention here, the actual property could not be printed

//* SOLUTION: printing values using for-in loop with JSON.stringify

for (const key in myObj) {
  console.log(`${key}------  ${JSON.stringify(myObj[key])}`);
}

//result:
// fname------  "abhishek"
// lname------  "bhardwaj"
// age------  99
// isRich------  true
// address------  {"street":"30 downing street","city":"Las Vagas","state":"Bihar"}
