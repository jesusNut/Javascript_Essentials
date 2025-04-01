

// Here's a breakdown of how objects and arrays are coerced:

// 1. Coercion to Boolean:

// Objects and Arrays are always coerced to true in a boolean context. This means they are considered "truthy" values.

// JavaScript

// let obj = {};
// let arr = [];

// if (obj) {
//   console.log("Object is truthy"); // Output: Object is truthy
// }

// if (arr) {
//   console.log("Array is truthy"); // Output: Array is truthy
// }

// console.log(!!obj); // Output: true
// console.log(!!arr); // Output: true
// 2. Coercion to Number:

// Objects: Objects are first coerced to a primitive. The standard process is:

// Call the valueOf() method. If it returns a primitive, use that.
// If valueOf() doesn't return a primitive, call the toString() method. Use the result of toString().
// Finally, the primitive value is coerced to a number.
// Most plain objects will have a toString() method that returns "[object Object]". This string is then coerced to NaN.

// JavaScript

// let obj1 = {};
// let obj2 = { valueOf: () => 10 };
// let obj3 = { toString: () => "20" };

// console.log(Number(obj1)); // Output: NaN
// console.log(Number(obj2)); // Output: 10
// console.log(Number(obj3)); // Output: 20

// console.log(obj1 - 5);  // Output: NaN
// console.log(obj2 - 5);  // Output: 5
// console.log(obj3 - 5);  // Output: 15
// Arrays: Arrays are also coerced to a primitive.

// Call the valueOf() method. For arrays, this usually returns the array itself, which is not a primitive.
// Call the toString() method. For arrays, this joins the elements of the array with commas.
// The resulting string is then coerced to a number.
// JavaScript

// let arr1 = [];
// let arr2 = [1, 2];
// let arr3 = ["3"];
// let arr4 = [1, "a"];

// console.log(Number(arr1)); // Output: 0 (empty string "" becomes 0)
// console.log(Number(arr2)); // Output: NaN ("1,2" cannot be fully parsed as a number)
// console.log(Number(arr3)); // Output: 3 ("3" becomes 3)
// console.log(Number(arr4)); // Output: NaN ("1,a" cannot be fully parsed as a number)

// console.log(arr1 - 5);  // Output: -5
// console.log(arr2 - 5);  // Output: NaN
// console.log(arr3 - 5);  // Output: -2
// console.log(arr4 - 5);  // Output: NaN
// 3. Coercion to String:

// Objects: Objects are coerced to a string by calling their toString() method. The default toString() for plain objects is "[object Object]".

// JavaScript

// let obj = {};
// console.log(String(obj)); // Output: [object Object]
// console.log(obj + " test"); // Output: [object Object] test
// Arrays: Arrays are coerced to a string by calling their toString() method, which joins the elements of the array with commas.

// JavaScript

// let arr = [1, 2, 3];
// console.log(String(arr)); // Output: 1,2,3
// console.log(arr + " test"); // Output: 1,2,3 test

//! The + operator: The + operator is special. If one of the operands is a string, it will perform string concatenation. In this case, objects and arrays will be coerced to strings.
//!  (-, *, /) will generally try to coerce objects and arrays to numbers.

//example:

let data1 = [];
let data2 = [];

let data3 = data1 + data2; //[] converts to ""[as String]
console.log(data3, typeof data3); //<blank> String

let data4 = data1 - data2; //[] converts to "" [as String] & then to 0(as Number)
console.log(data4, typeof data4); //0 number



//? https://www.youtube.com/watch?v=OK1Emq5h3XE
//? https://www.youtube.com/watch?v=XWNq7XJuwoo
// + get youtube videos on JS tricky coercion questions.