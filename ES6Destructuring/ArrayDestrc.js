//* Array destructuring

//? https://www.youtube.com/watch?v=XIYJhGEmsYc&list=PL699Xf-_ilW6kwrOg4Wm87ZJ-idHubBrG&index=15
//? https://www.youtube.com/watch?v=2RDwNt35whs

//=======================================================================
//! Syntax: Uses curly braces [] to extract values from an array.
//=======================================================================

let book = ["Abhishek the great tester", 500, "$999.99"];

//traditional way of accessing elements of an array

let bookName = book[0];
let pages = book[1];
let price = book[2];

console.log(`${bookName}---${pages}---${bookPrice}`);

//Abhishek the great tester---500---$999.99

//* The above code can now be accomplished using ARRAY DESTRUCTURING

//Example 1: 

let [somename, somepage, someprice] = book;

//! Here we can use any name of the variable in destructuring array

console.log(`${somename}---${somepage}---${someprice}`);

//Abhishek the great tester---500---$999.99

//Example 2:

let [articlename, ...restData] = book;

console.log(articlename); //Abhishek the great tester
console.log(restData); //[ 500, '$999.99' ]

//Example 3 with nested arrays

let magzine = [
  "Abhishek the great tester",
  500,
  "$999.99",
  ["saras-salil publications", "Bihar"],
];


let [magName, magPages, magPrice,[magPub, magAddr]] = magzine;

console.log(magName);
console.log(magPages);
console.log(magPrice);
console.log(magPub);
console.log(magAddr);

//Example 4 : If I directy want to extrcat 3rd element from array.

const numbers = [1, 2, 3, 4, 5];
const [,,third] = numbers;

console.log(third); //3


