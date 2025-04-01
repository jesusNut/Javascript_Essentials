//*  “async/await” is used to consume promises in a more comfortable fashion.

//! ASYNC : async keyword is used before a function.
//! The async keyword is placed before a function declaration.
//! It tells JavaScript that the function will contain asynchronous operations.
//! An async function always returns a Promise, even if you don't explicitly return a Promise-
//! if you return a regular value, it's wrapped in a resolved Promise.

//******* code snippet 1 *********
async function getData(data) {
  return data.toUpperCase();
}

//******** consuming async function Way 1 using then()***********

// getData("abhishek").then((data) => {
//   console.log(data);
// });

//******** consuming async function Way 2 using await ***********

// let res = await getData('abhishek');
// console.log(res);

//******* code snippet 2 explicity returning a promise *********
async function getData(data) {
  return new Promise((resolve, reject) => {
    resolve(data.toUpperCase());
  });
}

//******** consuming async function Way 1 using then()***********

getData("abhishek").then((data) => {
  console.log(data);
});

//******** consuming async function Way 2 using await ***********
const res = await getData("abhishek");
console.log(res);

//* Code snippets 1 and code 2 are exactly the same.

//! AWAIT : THE AWAIT KEYWORD CAN ONLY BE USED INSIDE AN ASYNC FUNCTION OR ON TOP LEVEL OF A MODULE.
//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await
//! The keyword await makes JavaScript wait until that promise settles (resolves or reject) and returns its result.

//! resolve(value):
// When you call resolve(value) inside the Promise's executor function, you are signaling that the Promise has been fulfilled.
// The value you pass to resolve() becomes the resolved value of the Promise.

//! await promisename:
// When you use await promisename, the await expression will return the value that was passed to resolve().

//! promisename.then(callback):
// When you use .then(callback) the callback function will receive the value that was passed to resolve().

//* Example 1:

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1");
  }, 7000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2");
  }, 5000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3");
  }, 3000);
});

async function Demo() {
  const dataSentFromResolve1 = await promise1;
  const dataSentFromResolve2 = await promise2;
  const dataSentFromResolve3 = await promise3;
  return (
    dataSentFromResolve1 +
    "--" +
    dataSentFromResolve2 +
    "--" +
    dataSentFromResolve3
  );
}

// Demo().then((finalResult) => {
//   console.log(finalResult);
// });

//* Example 2:

function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you love?"));
    }, 5000);
  });
}

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");
  console.log("doing the dishes");
  console.log("cleaning the tables");
  console.log("taking orders");

  await toppings_choice();

  console.log("D");
  console.log("E");
}

// Trigger the function

kitchen();

//Expected result :

// A
// B
// C
// doing the dishes
// cleaning the tables
// taking orders
// which topping would you love?
// D
// E

//! Undestanding fetch() API in NodeJS

async function checkAPI(myurl) {
  console.log(`The url to be checked is ${myurl}`);
  let response = await fetch(myurl, { method: "GET" });
  console.log(response.status === 202);
  let responeInJSON = await response.json();
  console.log(
    responeInJSON.message === "Product details retrieved successfully."
  );
  console.log(`API has been checked`);
}

checkAPI("https://run.mocky.io/v3/3bbc665a-464a-456e-b016-df8c273093e4");
