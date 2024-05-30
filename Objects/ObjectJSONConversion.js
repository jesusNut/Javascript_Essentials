//! ****** Difference between JSON and JS objects [from notes]

console.log(`-----------------------------------`);

//!converting JSON string to OBJECT "JSON.parse()".

let jsonString = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

const parsedValue = JSON.parse(jsonString);

console.log(parsedValue);

//{ name: 'Sammy', email: 'sammy@example.com', plan: 'Pro' }
//! NOTICE THAT QUOTE FROM KEYS NOW DISAPPEARS.

//* to verify if 'parsedValue' contains an object after conversion.

console.log(parsedValue.constructor); //[Function: Object]

//*to access values

console.log(parsedValue.name);
console.log(parsedValue.email);
console.log(parsedValue.plan);

console.log(`-----------------------------------`);

//!converting OBJECT TO JSON "JSON.stringify().
//! The JSON. stringify() method converts JAVASCRIPT OBJECTS INTO JSON STRINGS.

let userObj = {
  name: "Sammy",
  email: "sammy@example.com",
  plan: "Pro",
};

const jsonValue = JSON.stringify(userObj);

console.log(jsonValue);

//{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}
//! NOTICE THAT QUOTE ON KEYS APPEARS NOW.

console.log(`-----------------------------------`);
