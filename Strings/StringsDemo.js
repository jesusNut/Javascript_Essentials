//* STRING

//? Ways to declare a String ***********************************************

let somename = "welcome to my rich life"; //! String literal - RECOMMENDED
console.log("🚀 ~ somename:", somename, typeof somename); //welcome to my rich life string

let somename1 = new String("abhihske is my name"); //! String as Objects - NOT RECOMMENDED
console.log("🚀 ~ somename1:", somename1, typeof somename1); //[String: 'abhihske is my name'] object

//? EQUALITY OPERATORS *****************************************************

//EX1 :

//? https://stackoverflow.com/questions/34408946/javascripts-string-comparison

//! COMPARING TWO DIFFERENT JAVASCRIPT OBJECTS (WHETHER HAVING SAME VALUES) ALWAYS RETURNS FALSE.
//! Whether we compare TWO DIFFERENT JAVASCRIPT OBJECTS uisng == or ===, RESULT IS ALWAYS FALSE.

//!!!!!!!!!!!!  ALWAYS USE === FOR STRING COMPARISONS !!!!!!!!!!!

let x = new String("John");
let y = new String("John");
console.log(x == y); //false
console.log(x === y); //false

//EX2 :

let x1 = "John";
let y1 = new String("John");
console.log(x1 == y1); //true as values gets compared.
console.log(x1 === y1); //false

//? SOME COMMONLY USED INBUILT FUNCTIONS ************************************

let data = "abhishek is great";

console.log(data.toUpperCase());

let data1 = "ABHIHSEK IS GREAT";

console.log(data.toLowerCase());

let data2 = "the show is now shut";

console.log(data2.includes("show"));

let data3 = "the$show$is$now$shut";

const newLocal = data3.split("$");

newLocal.forEach(a=>console.log(a))

let data4 = "My length is 10";

console.log(data4.length)

let data5 = "     I am great guy";
console.log("🚀 ~ data5:", data5)
console.log("🚀 ~ data5:", data5.trimStart())

let data6 = "I am great guy        ";
console.log("🚀 ~ data6:", data6)
console.log("🚀 ~ data6:", data6.trimEnd())

let data7 = "     I am great guy        ";
console.log("🚀 ~ data7:", data7)
console.log("🚀 ~ data7:", data7.trim())

let data8 = "And i saw stark coming";
console.log(data8.indexOf('s',data8.indexOf('s')+1))

let data9 = "And i saw stark coming";
//print all chars from index 3(exclusive) and print in same line

let temp="";

for(let i = 4; i<= data9.length-1; i++){

   temp = temp +  data9.charAt(i);
}

console.log(temp)

let data10 = "I am the greatest tester ever lived"

console.log(data10.substring(5,17));

let data11 = "welcome to mungerilal ji ki life"

console.log(data11.replace("mungerilal", "nitish kumar"))

//! Strings are immutable in JS

let somedata = "my name is abhishek";

console.log(somedata.toUpperCase())

somedata = somedata.toUpperCase(); //comment me and check

console.log(somedata)

let firstName = 'abhishek'
let secondName = 'Kumar'

console.log(firstName.concat(" "+secondName))

let nexttopic = 'Stay home , stay hungry'

console.log(nexttopic.startsWith('stay')) //false
console.log(nexttopic.startsWith('Stay')) //true

console.log(nexttopic.endsWith('hungry')) //true
console.log(nexttopic.endsWith('hungary')) //false


let nexttopic1 = 'Stay home , stay hungry'

console.log(nexttopic1.search(','))