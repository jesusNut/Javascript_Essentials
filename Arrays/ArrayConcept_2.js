//! HIGHER ORDER FUNCTIONS : Higher Order Functions are those functions that accept another function
//! as an input parameter, or return another function as an output.
//! Example : MAP, REDUCE, FILTER, FOR-EACH

//! CALLBACK FUNCTION : in JS can return anything unlike Java where Functional
//! interfaces are pre-defined libraries.

//* serach an element in the array and return- if found or undefined : FIND

const fruits = [
  "mango",
  "apple",
  "jackfruit",
  "dragonfruit",
  "black grapes",
  "daktota",
];

//using predicates

const newLocal = fruits.find((data) => data === "drgonfruit");
console.log("🚀 ~ newLocal:", newLocal);

//*  Sorting functions
//!  SORT and REVERSE changes the actual array

console.log("🚀 ~ fruits.sort():", fruits.sort());

console.log("🚀 ~ fruits.reverse():", fruits.reverse());

//* MAP

const numData = [22, 33, 44, 55, 66, 77, 88, 99];

const newLocal1 = numData.map((data, index) => {
  return data * 2 + " and my position is " + (index + 1);
});

newLocal1.forEach((data) => console.log(data));

//* FILTER

//print all data in array which is even

const numData2 = [22, 33, 44, 55, 66, 77, 88, 99];

const newLocal2 = numData2.filter((data, index) => data % 2 === 0);

console.log(newLocal2);

//* REDUCE

//format : <array>.reduce(function(accumulator, currentValue), initial value)

// "accumultor" -> The initialValue, or the previously returned value of the function.
//If initialValue is not specified, accumulator is initialized to the first value [0th element] in the array,
//and callbackFn starts executing with the second value [1st index element] in the array as currentValue .

//Return of reduce() : THE REDUCE() METHOD RETURNS A SINGLE VALUE: the function's accumulated result.

//https://www.w3schools.com/jsref/jsref_reduce.asp

//PROBLEM 1 : print sum of all data in array which is even

const numData3 = [22, 33, 44, 55, 66, 77, 88, 99];

const mySum = numData3
  .filter((data, index) => data % 2 === 0)
  .reduce((prev, curr) => {
    return prev + curr;
  });

console.log(mySum);

//PROBLEM 2: print sum of all data in array which is odd and and initial value of 100 as well

const numData4 = [22, 33, 44, 55, 66, 77, 88, 99];

const mySum1 = numData4
  .filter((data, index) => data % 2 !== 0)
  .reduce((prev, curr) => {
    return prev + curr;
  }, 100);

console.log(mySum1);

//PROBLEM 3: Create an object out of an array in below format:

// {
//   '0': 'Mohneesh',
//   '1': 'Visheesh',
//   '2': 'Murali',
//   '3': 'Padmanabhan',
//   '4': 'Tillotama'
// }

const names = ["Mohneesh", "Visheesh", "Murali", "Padmanabhan", "Tillotama"];

let resObj = names.reduce((a, b, curr) => {
  a[curr] = b;
  return a;
}, {});

console.log(resObj);


//* SPLICE
//! SPLICE - Changing actual array

const fruitsSplicer = [
  "mango",
  "apple",
  "jackfruit",
  "dragonfruit",
  "black grapes",
  "daktota",
];

const splicedArray = fruitsSplicer.splice(2, 3);
console.log(splicedArray);
console.log(fruitsSplicer);

const fruitsSplicer1 = [
  "mango",
  "apple",
  "jackfruit",
  "dragonfruit",
  "black grapes",
  "daktota",
];
const splicedArray1 = fruitsSplicer1.splice(2);
console.log(splicedArray1);
console.log(fruitsSplicer1);

//* SLICE
//! SLLICE - No changes in actual array

const fruitsSlicer = [
  "mango",
  "apple",
  "jackfruit",
  "dragonfruit",
  "black grapes",
  "daktota",
];

const slicedFruit = fruitsSlicer.slice(1, 5);
console.log("🚀 ~ slicedFruit:", slicedFruit);
console.log("🚀 ~ fruitsSlicer:", fruitsSlicer);
console.log(fruitsSlicer.slice(-2)); //behaves differently

//* AT : find element at an specific index (-ve indexes can be used) ;

const fruitFruity = [
  "mango",
  "apple",
  "jackfruit",
  "dragonfruit",
  "black grapes",
  "daktota",
];

console.log(fruitFruity.at(2)); //third index from start
console.log(fruitFruity.at(-2)); //second index from last

//* Array.from()

//? https://www.geeksforgeeks.org/javascript-array-from-method/?ref=lbp

//format : Array.from(object, mapFunction, thisValue)

//Example 1 : mutiply 2 to all elements of a given array

const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const modArray = Array.from(someArray, (item) => {
  return item * 2;
});

console.log(modArray);

//result :

// [
//     2,  4,  6,  8, 10,
//    12, 14, 16, 18
//  ]

//Example 2: convert a string characters to array

let someString = "abhishek is great";

const newArray = Array.from(someString);

console.log(newArray);

//Example 3: Divide each element of set by 10 & convert a set to Array.

//define initial set

let mySet = new Set([11, 22, 33, 44, 55]);

console.log(mySet);

//extract Array from set

const extractedArrayFromSet = Array.from(mySet, (item, curr) => {
  return `Index[${curr}]` + ":" + (item % 10);
});

console.log(`Extracted array is ${extractedArrayFromSet}`);

//! CONVERT AN ARRAY TO OBJECT.

//? https://www.youtube.com/shorts/4ig9XS1gJcE

//we know we can use spread operator to merge two objects.
//we will use the same concept below and make index as key of new object formed.
// why we have used

let samplArray = [
  "Abhishek",
  "is",
  "a",
  "great",
  "man",
  "but",
  "he",
  "eats",
  "pizza",
];

let tempObject;
const finalResultObject = samplArray.reduce((acc, currval, currindex) => {
  tempObject = { ...acc, [currindex]: currval };
  return tempObject;
}, {});

// Here at line 215, we have to write like '[currindex]'.
// If we write like currindex directly, it will be treated as a string literal why??
// because anythinh written in curly braces at key side will be treated as String.
// In order to use it like a variable and work on its value we need o put it in [].

console.log(finalResultObject);

//result:

// {
//     '0': 'Abhishek',
//     '1': 'is',
//     '2': 'a',
//     '3': 'great',
//     '4': 'man',
//     '5': 'but',
//     '6': 'he',
//     '7': 'eats',
//     '8': 'pizza'
//   }

//*<array>.KEYS - .keys() method : widely used in for-of loop

//! The Javascript <array>.keys() method is used to return
//! a new array iterator which CONTAINS THE KEYS FOR EACH INDEX in the given input array.

let demoArray = [
  "Abhishek",
  "is",
  "a",
  "great",
  "man",
  "but",
  "he",
  "eats",
  "pizza",
];

//for-of loop with .keys() method

for (const item of demoArray.keys()) {
  console.log(`'${demoArray[item]}' is present at index - ${item}`);
}

//result:

// 'Abhishek' is present at index - 0
// 'is' is present at index - 1
// 'a' is present at index - 2
// 'great' is present at index - 3
// 'man' is present at index - 4
// 'but' is present at index - 5
// 'he' is present at index - 6
// 'eats' is present at index - 7
// 'pizza' is present at index - 8

//* ENTRIES method - .entries()

//! Return value: It returns AN ARRAY OF INDEXES AND VALUES of
//! the given array on which the Array.entries() method is going to work.

//for-of loop with .keys() method

let discoArray = [
  "Abhishek",
  "is",
  "a",
  "great",
  "man",
  "but",
  "he",
  "eats",
  "pizza",
];

for (const [index, item] of discoArray.entries()) {
  console.log(`'${item}' is present at index - ${index}`);
}
