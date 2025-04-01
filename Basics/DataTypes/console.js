//! understanding different types and styles of console.xxx

console.log("ankush");

//------------------------------

let firstName = "abhishek";
let lastName = "bhardwaj"

console.log('the name is : ', firstName, lastName) //auto formatted with spaces

//-----------------------------

let fname = "Alice";
let age = 99;
console.log("Name:", fname, "Age:", age); //auto formatted with spaces

//----------------------------

// %s: String
// %d or %i: Integer
// %f: Floating-point number
// %o or %O: Object (prints a clickable representation)
// %c: CSS (applies styles to the following text)


let fname1 = "Madan";
let age1 = 777;
let kills = 888;
console.log("Name is %s and his age is just a number %d with kills %d",fname1,age1,kills);
console.log("Name is %s and his age is just a number %d with kills %d","Singhania",100,1000);

//-------------------------------

let users = [
    { name: "Alice", age: 25, city: "London" },
    { name: "Bob", age: 30, city: "Paris" },
    { name: "Charlie", age: 28, city: "Tokyo" }
  ];
  console.table(users);
  
  let data = { a: 1, b: 2, c: 3 };
  console.table(data);

 
 // console.<function> can also be used like warn, error etc::

// ** Logging Errors and Warnings:

// console.error(): Logs error messages, often displayed prominently.

// JavaScript

try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.error("An error occurred:", error.message);
}

//console.warn(): Logs warning messages, indicating potential issues.

// JavaScript

if (someCondition) {
  console.warn("This condition might lead to unexpected behavior.");
}
// ** Information and Debugging:

// console.info(): Logs informational messages.

// JavaScript

console.info("Starting a process...");

//console.assert(): Logs an error message if a condition is false. Useful for debugging assumptions.

// JavaScript

let value = 10;
console.assert(value > 5, "Value should be greater than 5");
console.assert(value < 0, "Value should be less than 0");

// console.trace(): Prints a stack trace to the console, showing the call sequence.

// JavaScript

function functionA() {
  functionB();
}
function functionB() {
  console.trace("Trace from functionB");
}
functionA();

// ** Performance Measurement:

// console.time(label): Starts a timer with the given label.

// console.timeEnd(label): Stops the timer and logs the elapsed time.

// JavaScript

// console.time("myOperation");
// for (let i = 0; i < 1000000; i++) {
   // Do something
// }
// console.timeEnd("myOperation");

// ** Organizing Output:

// console.group(label): Starts a new group of console messages.

// console.groupEnd(): Ends the current group.

// console.groupCollapsed(label): Starts a new group that is initially collapsed.

// JavaScript

// console.group("User Details");
// console.log("Name: John Doe");
// console.log("Email: john.doe@example.com");
// console.groupEnd();

// console.groupCollapsed("Collapsed Group");
// console.log("Inside collapsed group.");
// console.groupEnd();