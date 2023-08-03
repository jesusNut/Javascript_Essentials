//*  “async/await” is used to consume promises in a more comfortable fashion.

//! ASYNC : async keyword is used before a function.
//! async makes a function return a Promise mandatorily which can then be consumed using then() & catch().

//******* code snippet 1 *********
async function getData(data) {
  return data.toUpperCase();
}

// getData("abhishek").then((data) => {
//   console.log(data);
// });

//******* code snippet 2 explicity returning a promise *********
async function getData(data) {
  return new Promise((resolve, reject) => {
    resolve(data.toUpperCase());
  });
}

// getData("abhishek").then((data) => {
//   console.log(data);
// });

//* Code 1 and code 2 are exactly the same.

//! AWAIT : THE AWAIT KEYWORD CAN ONLY BE USED INSIDE AN ASYNC FUNCTION OR ON TOP LEVEL OF A MODULE.
//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await
//! The keyword await makes JavaScript wait until that promise settles (resolves or reject) and returns its result.

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

  await toppings_choice();

  console.log("D");
  console.log("E");
}

// Trigger the function

kitchen();

console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")


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
