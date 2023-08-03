
/**
 * ! clear concepts of :
 * ?    1. Datatypes
 * ?    2. Type of 
 * ?    3. Template literals
 */

//1. Javascript is a case sensitive langauage.

var namer = "abhishekkkkk";

console.log(namer) //abhishekkkkk
//console.log(Namer); // Error

var m =22;
var M =33;

console.log(m);
console.log(M);

console.log("--------------------------");

//2. Javascript is a dynamically typed language. At runtime, JS automatically knows variable/constant is of which data type
//   based on the value.

var i = 22;

console.log(i);
console.log(typeof(i))

i = "mahesh";

console.log(i);
console.log(typeof(i))

i = true;

console.log(i);
console.log(typeof(i))

i = -223.889;

console.log(i);
console.log(typeof(i))

i = 223.889;

console.log(i);
console.log(typeof(i))

i = 'c'

console.log(i);
console.log(typeof(i))

i = null;

console.log(i);
console.log(typeof(i))

i =undefined;

console.log(i);
console.log(typeof(i))

console.log("--------------------------");

//3. null vs undefined

var k ;                     // undefined

console.log(k);
console.log(typeof(k))

k;                          //undefined

console.log(k);
console.log(typeof(k))

k = null;                    // null

console.log(k);
console.log(typeof(k))


console.log("--------------------------");

//4. Ways to define variables

//declaraton + initialization in one line

var name1 ="ankush", age1 = 28; hairs1 = true, job1 = undefined;

console.log("the boy is: "+name1+" --- and age is: "+age1+" ---- hairs is : "+hairs1+" -----job is: "+job1);


//declaraton + initialization in separate lines

var name2, age2, hairs2, job2;

name2 = "mukesh";
age2 = "35";
hairs2 = false;
job2 ="TCS";

console.log("the boy is: "+name2+" --- and age is: "+age2+" ---- hairs is : "+hairs2+" -----job is: "+job2);

console.log("--------------------------");

//5. String can have both single/double quotes

let mahname = 'ankush';
let mahOrigName = "Abhishek";

console.log(mahOrigName+"----****____------***"+mahname);


//6. Boolean values are lower case 'true' and 'false' only.

//7. console.log can be written in two ways- both yield different results

let firstName = "abhishek";
let lastName = "bhardwaj"

console.log('the name is : ', firstName, lastName) //auto formatted with spaces

console.log('the name is : '+firstName+lastName)

//8. BigInt- use n at the end for restricting to see as exponent from

let bidemo = 12345678987876787656776n;
console.log("🚀 ~ bidemo:", bidemo)

let withoutbidemo = 12345678987876787656776;
console.log("🚀 ~ withoutbidemo:", withoutbidemo)

//9. Template literal [back tick way]

let fname = 'abhishek'
let phone = 3456789087;

console.log(`I am called as ${fname} \n and my phone is '${phone}' `)

//10. There is no equivalent to system.out.print() java method in JS
//to print everything in one line


//11. There is no INDEX OUT OF BOUND error in JS.