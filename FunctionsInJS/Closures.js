//* CLOSURES -> A function that remembers the variables from its outer (parent) function,
//* even after the parent function has finished executing.

//! Inner function remembers the data of outer function.

function outer() {
  let username = "Abhishek";

  function inner() {
    console.log(username); // accessing outer variable
  }

  return inner;
}

let fn = outer();
fn();

//***************************************************************************** */

//! Example of real time usage- A 'like button counter' which counts number of likes.

function likeImpl() {
  let count = 0;
  return function liked() {
    count++;
    console.log(`I am Like no - ${count}`);
  };
}

let liked = likeImpl();
liked(); //someone liked for 1st time
liked(); //someone liked for 2nd time
liked(); //someone liked for 3rd time
liked(); //someone liked for 4th time
