//* Map :
//! The Map object HOLDS KEY-VALUE PAIRS and REMEMBERS THE ORIGINAL INSERTION ORDER OF THE KEYS.
//! Any value (both objects and primitive values) may be used as either a key or a value.
//! A key in the Map may only occur once; it is unique in the Map's collection.
//! If an element with the same key already exists, the element will be updated.
//!  A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.

//? https://www.javascripttutorial.net/es6/javascript-map/
//? https://levelup.gitconnected.com/simple-introduction-to-map-in-javascript-6786034f9154

//*  Advantages of MAP over Objects:

//1. A key of an object must be a string or a symbol, you cannot use an object as a key.

//2. An object does not have a property that represents the size of the map.

//* creating a Map and assigning value : WAY 1

let demoMap = new Map([
  ["apple", 11],
  ["oranges", 22],
  ["pineapple", 33],
  ["cherry", 44],
  ["grapes", 55],
]);

console.log(demoMap);

// result:

// Map(5) {
//     'apple' => 11,
//     'oranges' => 22,
//     'pineapple' => 33,
//     'cherry' => 44,
//     'grapes' => 55
//   }

//* creating a Map and assigning value : WAY 2 using set() method
//! set method is chainable.

let demoMap1 = new Map();

demoMap1
  .set("Diwali", 11)
  .set("Holi", 22)
  .set("Gudi parva", 33)
  .set("guru purnima", 44);

console.log(demoMap1);

// result :
// Map(4) {
//     'Diwali' => 11,
//     'Holi' => 22,
//     'Gudi parva' => 33,
//     'guru purnima' => 44
//   }

// If an element with the same key already exists, the element will be updated.

demoMap1.set("Gudi parva", 999);

console.log(demoMap1);

//result :
// Map(4) {
//     'Diwali' => 11,
//     'Holi' => 22,
//     'Gudi parva' => 999,
//     'guru purnima' => 44
//   }

//* useful methods-

//* SIZE property : size

console.log(demoMap1.size); //4

//* GET method - get(key)
//* returns the value associated with the key.
//* If the key does not exist, it returns 'undefined'.

console.log(demoMap1.get("Gudi parva")); //999
console.log(demoMap1.get("foo")); //undefined

//* DELETE method : delete()
//* removes an element specified by the key.
//* It returns TRUE if the element is in the map, or FALSE if it does not.

console.log(demoMap1.delete("Gudi parva")); //true
console.log(demoMap1);
//result
//Map(3) { 'Diwali' => 11, 'Holi' => 22, 'guru purnima' => 44 }

console.log(demoMap1.delete("Gudi parva")); //false
demoMap1.set("Gudi parva", 999); //setting again for further examples.

//* CLEAR method : clear()
//* deletes all entries of a map

demoMap.clear();
console.log(demoMap); //Map(0) {}

//* HAS method : has()
//* To check if a key exists in the map, you use the has() method.

console.log(demoMap1.has("Gudi parva")); //true
console.log(demoMap1.has("foo")); //false

//! METHODS FOR ITERATIONS OVER MAPS:

//* KEYS method : keys()
//* returns a new Iterator that contains the keys for elements in insertion order.

for (const item of demoMap1.keys()) {
  console.log(item);
}

//result :
// Diwali
// Holi
// guru purnima
// Gudi parva

//* VALUES method : values()
//* returns a new iterator object that contains values for each element in insertion order.

for (const item of demoMap1.values()) {
  console.log(item);
}

//result:
// 11
// 22
// 44
// 999

//* ENTRIES method : entries()
//* returns an iterator object that contains an array of [key,value] of each element in the Map object.

for (const [key, value] of demoMap1.entries()) {
  console.log(`${value} is present with key as : ${key}`);
}

//result:
// 11 is present with key as : Diwali
// 22 is present with key as : Holi
// 44 is present with key as : guru purnima
// 999 is present with key as : Gudi parva

//! ITERATION OF MAP USING FOR-OF LOOP

for (const [key, value] of demoMap1) {
  console.log(`${value} is present with key as : ${key}`);
}

//result:
// 11 is present with key as : Diwali
// 22 is present with key as : Holi
// 44 is present with key as : guru purnima
// 999 is present with key as : Gudi parva

//! CONVERTING EITHER KEYS OR VALUES OF A MAP INTO AN ARRAY

let arrayOfKeys = [...demoMap1.keys()];
console.log(arrayOfKeys);

//result:
//[ 'Diwali', 'Holi', 'guru purnima', 'Gudi parva' ]

let arrayOfValues = [...demoMap1.values()];
console.log(arrayOfValues);

//result:
//[ 11, 22, 44, 999 ]

//! CONVERTING A MAP INTO AN OBJECT - works for simple MAPs
//! For complex MAPs follow :
//? https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map

const myMap = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

let resultantObj = Object.fromEntries(myMap);

console.log(resultantObj); //{ foo: 'bar', baz: 42 }
console.log(resultantObj.constructor); //[Function: Object]

//! CONVERTING AN OBJECT INTO A MAP

let someObj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    z: 11,
    y: 12,
  },
};

const resultantMap = new Map(Object.entries(someObj));

console.log(resultantMap);

//{ 'a' => 1, 'b' => 2, 'c' => 3, 'd' => { z: 11, y: 12 } }

//! CONVERTING A MAP INTO JSON - works for simple MAPs
//! For complex MAPs follow :
//? https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map

//way :: map -> Object -> JSON string

const map = new Map([
  ["name", "bobby hadz"],
  ["country", "Chile"],
]);

const json = JSON.stringify(Object.fromEntries(map));
console.log(json);

//{"name":"bobby hadz","country":"Chile"}

//! CONVERTING A JSON STRING INTO A MAP
//? https://bobbyhadz.com/blog/javascript-convert-map-to-json

//way :: JSON string -> Object -> Map

let jsonData = `{
  "id": 22,
  "firstName": "abhishek",
  "lastName": "bhardwaj",
  "age": 99,
  "doj": "20-02-1879",
  "address": {
    "city": "Los Angeles",
    "state": "California"
  },
  "skills": [
    "php",
    "c++",
    "gossip"
  ]
}`;

const myMap2 = new Map(Object.entries(JSON.parse(jsonData)));

console.log(myMap2);

//Map(7) {
//   'id' => 22,
//   'firstName' => 'abhishek',
//   'lastName' => 'bhardwaj',
//   'age' => 99,
//   'doj' => '20-02-1879',
//   'address' => { city: 'Los Angeles', state: 'California' },
//   'skills' => [ 'php', 'c++', 'gossip' ]
// }
