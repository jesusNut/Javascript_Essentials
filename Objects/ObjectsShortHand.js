//! Object shorthand notation is a concise way to create object properties when 
//! => Property name matches the variable name which holds its value.
//! Let's break it down with a simple example:

const fname = "Alice";
const age = 30;
const city = "Wonderland";

const person = {
  fname: fname,
  age: age,
  city: city,
};

//console.log(person); // Output: { name: 'Alice', age: 30, city: 'Wonderland' }

//* same can be written as :

const person1 = { fname, age, city };
console.log(person1);
