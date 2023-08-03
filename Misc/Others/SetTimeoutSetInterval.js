

//* setTimeout() & clearTimeout()

// The setTimeout() IS A METHOD which calls a function after a number of milliseconds.
// The setTimeout() is executed only once.
// setTimeout() function returns a Number which is The id of the timer.
// timer provided is in milliseconds.
// clearTimeout() is used to clear already set setTimeout func. using its id.
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