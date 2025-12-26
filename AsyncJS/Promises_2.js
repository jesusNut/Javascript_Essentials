//* Promise is AN OBJECT which represents an eventual completion (SUCCESS OR FAILURE)
//* of an aync operation.

//* Used to overcome - the issue of CALLBACK HELL or PYRAMID OF DOOM.

//* SYNTAX: new Promise((resolve, reject)=>{})

//! 🔞🔞 UNDERSTANDING EXECUTOR FUNCTION🔞🔞

//* The function (resolve, reject) => { ... } is called the executor function means the function you pass to new Promise() is called the “executor” function.
// It runs immediately when the Promise is created.
// Code inside the Promise executor function is executed immediately and sequentially (synchronously).
// Its job is to start the asynchronous operation and then call either:
// resolve(value) → to fulfill the promise
// reject(reason) → to reject the promise

let myPromise = new Promise((resolve, reject) => {
  console.log("Executor starts"); // ✅ Runs immediately
  setTimeout(() => {
    resolve("Done"); // ✅ Async resolution
  }, 3000);
  console.log("Executor ends"); // ✅ Runs immediately
});

myPromise.then((value) => {
  console.log(value);
});

//O/P:
// Executor starts
// Executor ends
// Done

//! 🔞🔞 UNDERSTANDING AN IMPORTANT CONCEPT : .then() and .catch() are always asynchronous🔞🔞

let p = new Promise((resolve, reject) => {
  console.log("Inside executor");
  resolve("Done");
});
console.log("After promise");

p.then((value) => console.log("Then:", value));
console.log("Outside then");

//O/P:
// Inside executor
// After promise
// Outside then
// Then: Done

/* ✂️✂️ Explanation: 


1️⃣ Promise Creation:
   - `new Promise((resolve, reject) => {...})` runs the **executor function immediately (synchronously)**.
   - Logs: "Inside executor"
   - `resolve("Done")` is called → schedules the `.then()` callback in the **microtask queue**.

2️⃣ Next Synchronous Line:
   - `console.log("After promise")` runs immediately.
   - Logs: "After promise"

3️⃣ Attaching .then():
   - `p.then(...)` adds the callback to the **microtask queue**.
   - It does NOT run immediately.

4️⃣ Next Synchronous Line:
   - `console.log("Outside then")` runs immediately.
   - Logs: "Outside then"

5️⃣ Microtask Execution:
   - After all synchronous code is finished, the **microtask queue** is processed.
   - `.then()` callback runs.
   - Logs: "Then: Done"

✅ Output Order:
   1. Inside executor
   2. After promise
   3. Outside then
   4. Then: Done

📌 Key Concepts:
   - Executor function = synchronous
   - `resolve()` schedules microtask, does NOT execute `.then()` immediately
   - `.then()` / `.catch()` always run asynchronously (microtask queue)
   - Synchronous code always runs first, then microtasks, then macrotasks (like setTimeout)
*/

//=============================================================================================================================

//* Here, resolve and reject are themselves function provided by the Promise implementation.

// resolve(value):

// resolve is a function that, when called, fulfills the Promise with the given value.
// Calling resolve() transitions the Promise from the "pending" state to the "fulfilled" state.
// The then() method of the Promise will be called with the value.

// reject(reason):

// reject is a function that, when called, rejects the Promise with the given reason (usually an error object).
// Calling reject() transitions the Promise from the "pending" state to the "rejected" state.
// The catch() method of the Promise will be called with the reason.

//*! BUT, RESOLVE & REJECT ONLY ACCEPTS ONE ARGUMENT
//! which is then available in then() and catch() respectively.

//* A promise can have 3 states -
//? PENDING - any state when the state is neither resolved nor rejected.
//? FULFILLED(Resolved) - when a promise is resolved.
//? REJECTED - when a promise is rejected.

//* How to consume the Promise?

//? .then() -> To get resolved value.
//? .catch() -> To get rejectd value.

//* then() and catch() can also be chained.
//* then() can be chained if each then() is also returning a promise. [see Promise_3.js] or something else.[Udemy-cope automation - Promise demo lec.70]
//* If you do not return a Promise from .then() explicitly and try to execute a function (which returns a Promise)  in then, the chain does NOT wait.
//* Means, If a .then() callback calls a function that returns a Promise, you must return that Promise, otherwise the chain does not wait and moves to the next .then() immediately.
//  [In example 1 of Promises_3.js, use below code and see the difference :
 // setUp()
//   .then(() => {
//      performer(); ❌ called but not returned
//   })
//   .then(() => {
//      teardown(); ❌ called but not returned
//   })
//   .then(() => {
//     printResults();
//   }); ]
//* If you return a normal value, it is auto-wrapped in a resolved Promise and hence it respects the chain.

// Rules of Returning from then():

// Returning a Value (Non-Promise):

// If you return a regular value (string, number, object, etc.) from the then() callback, that value is wrapped in a new resolved Promise.
// The next then() in the chain will receive this resolved Promise's value as its argument.

// Returning a Promise:

// If you return a Promise from the then() callback, the next then() in the chain will wait for that returned Promise to resolve or reject.
// The next then() will receive the resolved value of the returned Promise.

// Returning Nothing (or undefined):

// If you don't explicitly return anything (or return undefined), the next then() will receive a resolved Promise with the value undefined.

//! UnhandledPromiseRejection : when a promise rejects but that code
//! is not handled by coder in either try-catch() block or .catch() method.

//*   Example 1 of how promises work:

//Defining promise-

const myPromise1 = new Promise((resolve, reject) => {
  console.log("I am executing before promise..");
  setTimeout(() => {
    console.log("I love JS..");
    resolve("I will be present as arg in then()", "I will become undefined"); //* param passed from inside of resolve is available in then()
    //* BUT, resolve takes only one args. Any other args passed will be treated as 'undefined'.
  }, 5000);
});

//Consuming promise-

myPromise1.then((data1, data2) => {
  console.log(`NOTICE THE DATA COMING HERE : "${data1}" & "${data2}"`); //* Param passed from inside of resolve is available in then()
});

//*   Example 2 of how promises work:

//Defining promise-

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = 33;
    let b = 22;
    if (a < b) {
      resolve(() => {
        //* function passed as param from inside of RESOLVE is available in then()
        return a + b;
      });
    } else {
      reject("I will be present as arg in catch()"); //* param passed from inside of REJECT is available in catch()
      //* BUT, reject takes only one args. Any other args passed will be treated as 'undefined'.
    }
  }, 5000);
});

//Consuming promise-

myPromise2
  .then((func) => {
    //* function passed as param from inside of RESOLVE is available in then()
    console.log(func());
  })
  .catch((error) => {
    //* param passed from inside of REJECT is available in catch()
    console.log(`NOTICE THE DATA COMING HERE : ${error}`);
  });

//*   Example 3 of how promises work: chaining of then()[not returning a promise but some other datatype.]

function getData(data) {
  return new Promise((resolve, reject) => {
    let modifiedData = String(data).toUpperCase();
    resolve(modifiedData);
  });
}

//consuming promise:

//take upper case data -> break it into words in an array -> print it.

getData("Abhishek is great")
  .then((data) => {
    console.log(data);
    const wordArray = String(data).split(" ");
    return wordArray; //Inernally treated as 'return Promise.resolve(wordArray);'
  })
  .then((wordArray) => {
    wordArray.forEach((item) => console.log(item));
  });

//*  Example 4 of how promises work: GETTING "UnhandledPromiseRejection" !!

function processOrder() {
  return new Promise((resolve, reject) => {
    reject("User is a alien..."); //reject is not handled while consumption.
  });
}

//consuming promise:

processOrder().then(() => {
  console.log("promise resolved");
});

//! typeof promise gives : 'Object'