//* Understanding Promise.all() in JS

//? https://www.youtube.com/watch?v=gHM2g-cs_QI&list=PLFGoYjJG_fqqJC5ODNTPLhv5MUKVkYakh&index=23    

//* Core Concepts:

//! 1. Input: Promise.all() takes an iterable (usually an array) of Promises as its argument.
//! 2. Resolution: It returns a single "Promise" that resolves when all of the input Promises resolve.
//! 3. Resolved Value: The resolved value of the returned Promise is an
//!   "array" containing the resolved values of the input Promises, in the same order as they appear in the input array.   
//! 4. Rejection: If any of the input Promises reject, the returned Promise immediately rejects with the reason from the first rejected Promise.

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {  
      resolve("first promise");
    }, 3000);
  });
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second promise");
    }, 3000);
  });
  
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third promise");
    }, 3000);
  });
  
  let allPromises = Promise.all([promise1, promise2, promise3]);
  
  allPromises
    .then((data) => {
      console.log(data);
      console.log("*******************");
      data.forEach((ele) => console.log(ele));
    })
    .catch((err) => console.log(err));

//[ 'first promise', 'second promise', 'third promise' ]
// *******************
// first promise
// second promise
// third promise
  