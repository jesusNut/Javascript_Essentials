//=============================================
//!☄️☄️☄️ SYMBOL ☄️☄️☄️
//==============================================

//! Symbols in TS/JS are a 🌼 primitive data type🌼 introduced in ECMAScript 2015 (ES6).
//! Each time you call the Symbol() function, a new, unique symbol value is created. 


let mark1 = Symbol('Money');
let mark2 = Symbol('Money');

console.log(mark1===mark2); //false

//=============================================
//!☄️☄️☄️ USAGE OF SYMBOLS ☄️☄️☄️
//==============================================


// Create two unique symbols
const COLOR = Symbol('color');
const SIZE = Symbol('size');

// Create an object
const myObject = {
  name: 'Box',
  [COLOR]: 'red',   // Using the Symbol as a key
  [SIZE]: 'large',  // Using another Symbol as a key
  material: 'cardboard'
};

// Accessing properties using string keys
console.log(myObject.name);      // Output: Box
console.log(myObject.material);  // Output: cardboard

// Accessing properties using Symbol keys
console.log(myObject[COLOR]);     // Output: red
console.log(myObject[SIZE]);      // Output: large

// Trying to access with a string literal (won't work directly)
console.log(myObject['color']);   // Output: undefined
console.log(myObject['size']);    // Output: undefined

// Trying to access with a dot operator (won't work directly)
console.log(myObject.color);   // Output: undefined
console.log(myObject.size);    // Output: undefined

// Symbols are not enumerable by default with for...in
console.log('Properties using for...in:');
for (const key in myObject) {
  console.log(key); // Output: name, material (Symbols are skipped)
}

// Getting Symbol keys using Object.getOwnPropertySymbols()
const symbolKeys = Object.getOwnPropertySymbols(myObject);
console.log('Symbol keys:', symbolKeys); // Output: [ Symbol(color), Symbol(size) ]

// Accessing values using the Symbol keys obtained
console.log(myObject[symbolKeys[0]]); // Output: red (value of COLOR)
console.log(myObject[symbolKeys[1]]); // Output: large (value of SIZE)



//=============================================
//!☄️☄️☄️ ACTUAL USAGE OF SYMBOL ☄️☄️☄️
//==============================================

let url = "https://run.mocky.io/v3/735baa69-5a22-4e26-84dc-20c297ad2c06";

//expected response:

// {
//     "name": "Murugan",
//     "age": 99,
//     "description": "A simple example JSON object.",
//     "inStock": true,
//     "categories": ["fullname", "fullname","study"]
//   }

//! Pay attention that first two string values in categories is same.

//hit the URL and get the response back.
async function fetchMeData(url) {
  let myres = await fetch(url, { method: "get" });
  return myres;
}

let myres = await fetchMeData(url); //getting response
let myresinJson = await myres.json(); //getting response in json

//==========================================================================================================

//! 🪐🪐🪐 OUR AIM : Use the first two strings in categories as dynamic key. 🪐🪐🪐

//! ISSUE : 🥴🥴 When we use first two strings in categories as dynamic key 🥴🥴:
//! key for age will update the key of name.
//! We use Symbols to avoid this issue.

// let mydata = {
//   [myresinJson.categories[0]]: myresinJson.name,
//   [myresinJson.categories[1]]: myresinJson.age,
// };

// console.log(mydata.fullname); //99
// console.log(mydata.fullname); //99

//==========================================================================================================

//! SOLUTION :🌿🌿🌿 We know that symbols are always unique and immutable 🌿🌿🌿.
//! Although first two 'string' values in categories are same, but when we use Symbols for the same,
//! the two symbols will always be unique.

// let firstkey = Symbol(myresinJson.categories[0]);
// let secondkey = Symbol(myresinJson.categories[1]);

// let mydata = {
//   [firstkey]: myresinJson.name,
//   [secondkey]: myresinJson.age,
// };

// console.log(mydata[firstkey]);
// console.log(mydata[secondkey]);

