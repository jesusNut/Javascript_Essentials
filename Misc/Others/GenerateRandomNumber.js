//* We use Math.floor() and Math.random() to generate a random number

//* Math.random() - generate a number between 0 and 1, 1 excluded.

let x = Math.random();

// console.log(x)
// console.log(x*10)

//* Type 1: formula to generate between 0-max  :
//* Math.floor(Math.random()*(max+1))
//* result will be a number : 0-max [both included]

//Generate a number between 0-9
//console.log(Math.floor(Math.random()*10))

//Generate a number between 0-10
//console.log(Math.floor(Math.random()*11))

//Generate a number between 0-99
//console.log(Math.floor(Math.random()*100))

//* Type 2: formula to generate between 1-max  :
//* Math.floor(Math.random()*max)+1
//* result will be a number : 1-max [both included]

//example : console.log(Math.floor(Math.random()*19)+1) //1-19

//* Type 2: formula to generate between min-max  :
//* Math.floor(Math.random()*(max-min+1))+min
//* result will be a number : min-max [both included]

//example : console.log(Math.floor(Math.random()*(25-15+1))+15) //15-25

//! RESUABLE METHOD TO GENERATE A RANDOM NUMBER [BOTH LIMITS INCLUDED]

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNum(101, 105));
