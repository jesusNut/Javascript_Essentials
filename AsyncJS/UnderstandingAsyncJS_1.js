//* In synchronus languages, while execution, the compiler excecutes
// 1. sequentially - in order of the code/methods written from top to bottom.
// 2. A compiler will wait till a function executes completely and THEN ONLY jumps for subsequent line to execute.

//! Nodejs is run time environment for Javascript.
//! Nodejs is a asynchronus platform.
//! Nodejs is single threaded and has a non blocking I/O.

//! So, JS itself & code when run in NodeJS is asynchronus in nature.

//If there is an async process in a function,
// => Nodejs will not wait at that function to get completed.
// => It will move to the subsequent lines.

//? BUT IS THIS THE WAY WE CAN WORK IN TEST AUTOMATION? - NO ..HELL NO BRO !!!!!!!!!!!!

//* Examples of async processes in Test automation:
//1. Waiting for a api request to process or return a response.
//2. DB operations

//* We have to make our code work in sync even when our function has async calls.

//* This can be done using 3 ways :

//? 1. Callback functions.
//? 2. Promise
//? 3. Async-await

//! THE USAGE OF CALLBACK FUNCTIONS GIVES RISE TO WHAT WE CALL AS CALLBACK HELL OR PYRAMID OF DOOM !!!
//? https://medium.com/techfront/javascript-callback-hell-simply-explained-93c3cf4be884

//*   Example of Async code 1:

//* * PROBLEM STATEMENT :: I want to run setUp first, performer 2nd, teardown 3rd and at print results.

function setUp() {
  setTimeout(() => {
    console.log("I am completing the set up..");
  }, 6000);
}

function performer() {
  setTimeout(() => {
    console.log("I am performing something..");
  }, 4000);
}

function teardown() {
  setTimeout(() => {
    console.log("I am Quitting..");
  }, 2000);
}

function printResults() {
  setTimeout(() => {
    console.log("I am Printing results..");
  }, 1000);
}

// setUp();
// performer();
// teardown();
// printResults()

//* Solving the sequence problem using CALLBACK FUNCTIONS concept.

function setUp(callback) {
  setTimeout(() => {
    console.log("I am completing the set up..");
    callback();
  }, 6000);
}

function performer(callback) {
  setTimeout(() => {
    console.log("I am performing something..");
    callback();
  }, 4000);
}

function teardown(callback) {
  setTimeout(() => {
    console.log("I am Quitting..");
    callback();
  }, 2000);
}

function printResults() {
  setTimeout(() => {
    console.log("I am Printing results..");
  }, 1000);
}

// setUp(() => {
//   performer(() => {
//     teardown(() => {
//       printResults();
//     });
//   });
// });

//! This gives rise to PYRAMID OF DOOM or CALLBACK HELL if there are so many callbacks.

//* The issue of PYRAMID OF DOOM or CALLBACK HELL can be solved using:

//? Promises &
//? Async - Await

//*   Example of Async code 2:

//* Problem :
// I want to sequence the printing as :
// 1. Setting up car
// 2. Starting car
// 3. Driving car
// 4. Stopping car

function printer(data) {
  let tempData = "Initial Value";
  setTimeout(() => {
    tempData = tempData + "----" + data;
    console.log(tempData);
  }, Math.floor(Math.random() * 10));
}

// printer("Setting up car");
// printer("Starting car");
// printer("Driving car");
// printer("Stopping car");

//* Solving the sequence problem using CALLBACK FUNCTIONS concept.

function printer(data, callback) {
  let tempData = "Initial Value";
  setTimeout(() => {
    tempData = tempData + "----" + data;
    console.log(tempData);
    callback();
  }, Math.floor(Math.random() * 10));
}

printer("Setting up car", () => {
  printer("Starting car", () => {
    printer("Driving car", () => {
      printer("Stopping car", () => {});
    });
  });
});
