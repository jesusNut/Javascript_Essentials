//* Demo of For loop

//Write a Java program to write table of 1 to 10

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i * j);
  }

  console.log("\n");
}

//* Demo for for-each loop

const myCompany = ["amazon", "Mcinsey", "Nasa"];

myCompany.forEach((data, index, wholeArray) => {
  console.log(data + "----" + index);
});

//* Demo for for-in loop - USED TO ITERATE OBJECTS

//? https://flexiple.com/javascript/loop-through-object-javascript/

let myObj = {
  fname: "abhishek",
  lname: "bhardwaj",
  married: true,
  billionare: true,
  age: 99,
};

for (const key in myObj) {
  console.log(key, myObj[key]);
}

//* Demo for for-of loop - USED TO ITERATE ARRAYS, ITERABLES like set , map etc.

const myCompany1 = ["amazon", "Mcinsey", "Nasa"];

for (const item of myCompany1) {
  console.log(item);
}

//* How to get the index FROM FOR-OF LOOP with JavaScript in Arrays.

//IN ARRAYS:

//using .keys() method
//OR using .entries() method

//IN SET:

// YOU CANNOT USE INDEXES !!!

//? https://programmingwithswift.com/how-to-get-the-index-from-for-of-loop-with-javascript/

//! DIFFERENCE BETWEEN FOR-OF & FOR-IN LOOP

//! The for...in statement iterates over the
// ! enumerable string properties of AN OBJECT,

//!WHILE

//! the for...of statement iterates over the
//! values that the iterable object {Array, Set, Map} defines to be iterated over.
