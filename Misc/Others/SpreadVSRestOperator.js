//* Both spread and rest operator are denoted by ...

//! spread operator - unpack elements

//?https://www.youtube.com/watch?v=gQWOLRKGPsA

//* usecase1 : clone an array

const myArr = [1, 2, 3, 4, 5];

const myArrCopy = [...myArr];

console.log(myArrCopy);

//* usecase2 : Merge or compose multiple Arrays

const fruits = ["apple", "mango", "grapes", "banana"];

const veggies = ["carrot", "tomato", "pumpkin", "karela"];

//create an array having elements of both arrays

const newArray = [...fruits, ...veggies];

console.log(newArray);

//create an array having elements of both arrays but 100 at begininng and 200 at end.

const newArray1 = [100, ...fruits, ...veggies, 200];

console.log(newArray1);

//* usecase3 : convert string into an array of strings/chars

const myStr = "abhishek is great";

let myStrArray = [...myStr];

console.log(myStrArray);

//* usecase4 : Merge two objects

let someObj1 = {
  myname: "abhishek",
  myAge: 99,
};

let someObj2 = {
  mylastname: "bhardwaj",
  myNetWorth: 0,
};

let mergedObj = {
  ...someObj1,
  ...someObj2,
};

console.log(mergedObj);

//! rest operator - pack elements

//usecase 1 : as parameters to functions

//write a add method which can add any number of elements

function adder(...num) {
  let sum = 0;

  for (const item of num) {
    sum = sum + item;
  }

  return sum;
}

console.log(adder(3, 4, 5, 6, 7, 8));

//! using spread and rest operator together

//! REST OPERATOR IS WIDELY USED WHILE DEFINING METHODS.
//! SPREAD OPERATOR IS WIDELY USED WHILE CALLING FUNCTIONS.

//write a add method which can add sum of all elements of an array

function adder(...num) {
  //usage of rest operator
  let sum = 0;

  for (const item of num) {
    sum = sum + item;
  }

  return sum;
}

const arrayToAdd = [11, 11, 11, 11, 11, 11];

//notice the way to call:

console.log(adder(...arrayToAdd)); //usage of spread operator
