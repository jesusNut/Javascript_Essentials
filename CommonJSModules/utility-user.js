
//todo ********** Importing way 1 *********

//! Using .js extension is optional.

const itemHolder = require("./utility");

console.log(itemHolder.bodyName);
console.log(itemHolder.socks);
itemHolder.Utils1();
itemHolder.Utils2();

const StringManipulHolder = itemHolder.StringManipulator;
const obj1 = new StringManipulHolder('always take the first way');
console.log(obj1.upperCaseTransformer());

console.log('--------------------------');


//todo ********** Importing way 2 - Using object destructuring *********

const{bodyName,socks,Utils1,Utils2,StringManipulator} = require("./utility");

console.log(bodyName);
console.log(socks);
Utils1();
Utils2();

const obj2 = new StringManipulator('always take the second way');
console.log(obj2.upperCaseTransformer());

