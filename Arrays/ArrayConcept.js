

//https://reedanna.medium.com/javascript-vs-java-arrays-e9004da3cdb2

//* declaring an array: an array should be inside [] and can contains any data type
//* including null, undefined, object and functions.

//! ALWAYS USE 'CONST' WHILE DECLARING ARRAYS

//method 1: Array literals

let arr2 = [2, 3, 'abc', true, '999', 323.998];


console.log(arr2);
console.log(typeof (arr2));

//* method 2 : Using new Keyword

// let arr3 = new Array(2,3,'abc',true,'999',323.998);

// console.log(arr3);
// console.log(typeof(arr3));

//method 1 and method 2 are exactly the same.

//* method 3:

//create an array with initial size as 7

const bikes = new Array(7);
console.log("🚀 ~ bikes:", bikes)

bikes[0]= 'bullet'
console.log("🚀 ~ bikes:", bikes)

//* method 4:

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

//! ARRAYS ARE OBJECTS

console.log(typeof cars) //object


//* declaring Arrays using variables


console.log("*********************")

let abc;
let def = null;
let arr3 = [abc, def, '22', '33'];

console.log(arr3);


//* Empty array

console.log("*********************")

let arr1 = [];

console.log(arr1);
console.log(typeof (arr1));

//* finding elements of an array: using INDEX

console.log("*********************")

console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[5]);
console.log(arr2[4]);
console.log(typeof (arr2[3]));

//* providing an index that does not exist in array
//! No index out of bound exception in JS

console.log("*********************")

console.log(arr2[99]);

//* finding length of an array

console.log("*********************")

console.log('The length is : ' + arr2.length);

//* changing values of an array

arr2[0] = 2.9;

//* reading all values of an array

console.log("*********************")

for (let i = 0; i < arr2.length; i++) {

    console.log(arr2[i]);
}


//* adding elements to the end of an array : PUSH

console.log("*********************")

console.log(arr2.push('java', 'JS', 'python', 90733, 77.77, null, undefined));

console.log(arr2);

//* adding values to the beginning of an array : UNSHIFT

console.log("*********************")

console.log(arr2.unshift('ddlj', 'golgappa'));

console.log(arr2);


//* adding values to an array - on an index that creates holes.

console.log("*********************")

let arr4 = [22,33,44,55];

arr4[7]='ankush';

console.log(arr4);
console.log(arr4.length);

//* adding values to an array which replaces an already existing element : replaces the value, DOES NOT SHIFT

console.log("*********************")

 arr4 = [22,33,44,55];

 arr4[2]=99;

console.log(arr4);
console.log(arr4.length);

arr4[4]=44;

console.log(arr4);
console.log(arr4.length);

//* remove only last element : POP

console.log("*********************")

arr2 = [2, 3, 'abc', true, '999', 323.998];

console.log(arr2.pop());
console.log(arr2)

//* remove only first element : SHIFT

console.log("*********************")

arr2 = [2, 3, 'abc', true, '999', 323.998];

console.log(arr2.shift());
console.log(arr2);

console.log("*********************")

//* replace existing values with given value : FILL

arr4 = [22,33,44,55,66,77,88,99];
console.log("🚀 ~ arr4:", arr4)

arr4.fill(0)
console.log("🚀 ~ arr4:", arr4) //change values @ all index as 0.

arr4.fill(0,2,6)
console.log("🚀 ~ arr4:", arr4) //change values from 2 to 5 as 0.(6th index excluive)


//* add multiple arrays to one : CONCAT

const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";
cars1[2]= "BMW";


const arr22 = [2, 3, 'abc', true, '999', 323.998];
const added1 = cars1.concat(arr22);
console.log(added1);

const arr33 = ["tinku","jiya"];
console.log(added1.concat(arr33,['i', 'also','got','added', true, false]));


console.log("*********************")

//* Adds all the elements of an array into a string, separated by the specified separator string: JOIN


let myarr1 = ['mango','apple','jackfruit','drgonfruit','black grapes','daktota']

const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";
cars1[2]= "BMW";

myarr1 = myarr1.concat(cars1);

console.log(myarr1)
console.log(typeof myarr1) //object

console.log(myarr1.join())
console.log(typeof myarr1.join()) //String

console.log(myarr1.join(" ~~~ AND ~~~ "))

console.log("*********************")


//! CONCAT AND JOIN does not change the original array.

const arrt1 = [22,33,44,55,66,77,88,99]; 
const arrt2 = ['i', 'am', 'the','one','who','knocks']

arrt1.concat(arrt2) //does not change original array

console.log(arrt1)

arrt1 = arrt1.concat(arrt2) //Gives error : Assignment to constant variable

//* So, declare 'arrt1' as let. Then, the above line will work fine and
//* on printing arrt1, we will get the concatinated result.

