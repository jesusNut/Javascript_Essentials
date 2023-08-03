//! convert string to char array- WAY 1

const myStr = "Abhishek is great";

const modArray = [...myStr];

console.log(modArray);

//result :
// [
//     'A', 'b', 'h', 'i', 's',
//     'h', 'e', 'k', ' ', 'i',
//     's', ' ', 'g', 'r', 'e',
//     'a', 't'
//   ]

//! convert string to char array - WAY 2

const modArray2 = Array.from(myStr);

console.log(modArray2);

//result :
// [
//     'A', 'b', 'h', 'i', 's',
//     'h', 'e', 'k', ' ', 'i',
//     's', ' ', 'g', 'r', 'e',
//     'a', 't'
//   ]

//! convert char array to string

//array to string

let myArr = [
  "a",
  "b",
  "h",
  "i",
  "s",
  "h",
  "e",
  "k",
  " ",
  "i",
  "s",
  " ",
  "g",
  "r",
  "e",
  "a",
  "t",
];

let str = "";

for (const key in myArr) {
  str = str + myArr[key];
}

console.log(str);
