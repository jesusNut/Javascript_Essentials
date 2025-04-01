

//* setTimeout() & clearTimeout()

// The setTimeout() IS A METHOD which calls a function after a number of milliseconds.
// The setTimeout() is executed only once.

//* Return Value:

// The setTimeout() function returns a positive integer. This integer is a unique identifier for the timer that was created.
// This ID is what you store in a variable so that you can reference it later if you need to cancel the timeout.
//! In Node.js, setTimeout() returns a Timeout object. This object encapsulates the timer and its associated properties.
// This object contains information about the timer, such as its timeout duration, the function to execute, and internal timer management details.

//* Purpose of the ID:

// The primary purpose of this returned number is to be used as an argument for the clearTimeout() function.
// By passing this ID to clearTimeout(), you can tell the browser which specific timeout you want to cancel.

//! clearTimeout() in Node.js:

// Even though setTimeout() returns an object, you still use clearTimeout() to cancel the timer.
// You pass the entire Timeout object to clearTimeout().

//? It is not possible to return anything else from setTimeout.
//? In order to return anything from setTimeout use Promise and pass via resolve(valueToBePassed).

//example1:

function modifier(data) {
  console.log("hi " + data);
}

const mytimeout = setTimeout(() => {
  modifier("sexy but mortal Abhishek");
}, 3000);

console.log(mytimeout);

//example2:

// If a visitor is NOT subscribed, then show 'Please Subscribe' after 5 seconds.
// If a visitor is already subscribed, then DONT SHOW 'Please Subscribe' after 5 seconds.

let subscribed = false;

function displayer() {
  console.log("Please subscribe...");
}

const mytimeout1 = setTimeout(() => {
  displayer();
}, 5000);

if (subscribed) {
  clearTimeout(mytimeout1);
}

//"Please subscribe..." will be printed after 5 seconds only if subscribed = true.

//* setInterval() & clearInterval()

// The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// setInterval() function returns a Number which is The id of the timer.
// timer provided is in milliseconds.
// clearInterval() is used to clear already running setInterval func. using its id.

//example1:

function modifier(data) {
  console.log("hi " + data);
}

const mytimeout2 = setInterval(() => {
  modifier("sexy but mortal Abhishek");
}, 2000);

console.log(mytimeout2);

//example2:

//print value of init every 2 secnds till init becomes 11.

let init = 0;

function modifier() {
  init = ++init;
  return init;
}

const mytimeout3 = setInterval(() => {
  console.log(modifier());
  if(init == 11){
    clearInterval(mytimeout3);
}
}, 2000);