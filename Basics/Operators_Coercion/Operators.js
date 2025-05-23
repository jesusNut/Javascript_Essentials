/**
 * !   clear concepts of :
 * ?    1. Operators
 * ?    2. Coercion - implicit typecasting
 * ?        - with arithmetic operators, ==/=== and logical op.
 * ?    3. Explicit Typecasting
 */

//* OPERATORS

//* Arithmetic Operators

let i = 10;
let j = 20;

console.log(i + j);
console.log(i - j);
console.log(i * j);
console.log(i / j);
console.log(j % i);

console.log("*******************");

console.log(15 + 10);
console.log(15 - 10);
console.log(15 * 10);
console.log(15 / 10);
console.log(15 % 10);

console.log("*******************");

console.log(15 + j);
console.log(15 - j);
console.log(15 * j);
console.log(15 / j);
console.log(15 % j);

let k = 11;

console.log("*******************");

console.log(++k); //12
console.log(k++); //12
console.log(k); //13
console.log(--k); //12
console.log(k--); //12
console.log(k); //11

let m = ++k;

console.log(m); //12
console.log(k); //12

m = k++;

console.log(m); //12
console.log(k); //13

/**
 * *Exponential operator (**)
 */

let data1 = 5;

console.log(data1 ** 3); // 125 i.e. [5*5*5]

//*  JAVASCRIPT ASSIGNMENT OPERATORS

console.log("*******************");

let val1 = 222;
let val2 = 222;

val2 = val2 += val1;

console.log(val2); //444

console.log((val2 -= 111)); //333

console.log((val2 *= 2)); //666

console.log((val2 /= val1)); //3

console.log((val2 %= 777)); //3

//* operation on different data types of numbers

//If any result of operation of 2 numbers is in decimals, it will printed like that

console.log(6.6 / 3.3); //2

//If any result of operation of 2 numbers is in non-decimal, it will printed like that

console.log(22 / 3); //7.333333333333333

console.log(22 / 0); //Infinity
console.log(22 / 0.0); //Infinity
console.log("ankush" / 0.0); //NaN

console.log("**********   NULL & UNDEFINED *********");

//* https://stackoverflow.com/questions/25799408/javascript-null-and-plus-operatior

//!    Note:  null coerces to +0.

let val3 = null;
let val4;

console.log(22 + null); //22+0 i.e. 22
console.log(22 - val3); //22-0 i.e. 22
console.log(22 * val3); //0
console.log(22 / val3); //infinity
console.log("ankush" / val3); //nan

//!    Note:  undefined coerces to NaN.

console.log(22 - val4); //22-undefined i.e. NaN
console.log(22 * val4); //NaN
console.log(22 / val4); //NaN
console.log("ankush" / val4); //NaN
console.log(22 + val4); //NaN

//!    Note:  null coerces to +0 AND undefined coerces to NaN.

console.log(val3 + val4); //0+NaN i.e. NaN
console.log(val3 - val4); //NaN
console.log(val3 / val4); //NaN
console.log(val4 - val3); //NaN

//!    Note:  true coerces to +1 AND false coerces to 0.

console.log(true + false); //1
console.log(true - false); //1
console.log(false - true); //-1
console.log(true * false); //0
console.log(-true - false); //-1
console.log(true / false); //Infinity
console.log(false % true); //0
console.log(true + null); //1

console.log("**********   INFINIY, -INFINIY & NAN *********");

//!    Note:  division of a positive number by 0 or 0.0 [+/-] gives INFINITY
//!    Note:  division of a negative number by 0 or 0.0 [+/-] gives -INFINITY
//todo   Note:  division of a 0 [+/-] by 0 or 0.0 [+/-] gives NaN
//!    NOte:  Any non-sense operation gives NaN
//!    Note:  (All operations on NaN return NaN)
//todo   Note:  typeOf NaN is 'number'

console.log(-22.009 / 0.0); //-Infinity
console.log(22 / 0.0); //Infinity
console.log(22.11 / 0); //Infinity
console.log(2222 / 0); //Infinity
console.log(true / 0); //Infinity
console.log(true * "abc"); //NaN
console.log("def" - "abc"); //NaN

console.log(0 / 0); //NaN
console.log(-false / 0); //NaN
console.log(null / 0); //NaN

let undef;
console.log(true / false); //Infinity
console.log(false / true); //0
console.log(334.999 / true); //334.999
console.log(undef / true); //NaN

console.log("**********  COERCION- IMPLICIT TYPECASTING *********");

//***   COERCION :Type Coercion refers to the process of automatic or
//*     implicit conversion of values from one data type to another.
//      This includes conversion from Number to String, String to Number, Boolean to Number etc.
//      when different types of operators are applied to the values.

//*     https://www.w3schools.com/js/js_type_conversion.asp

//! Coercion using NUMBER (primitive) and STRING and arithmetic operators

console.log("5" + 77); //conversion of 77 to string- 577
console.log(10 + 100 + "ankush"); //conversion of (10+100=110) to String on addition with "ankush"
console.log(35 * "hello"); //NaN

console.log("55" - 5); //converison of 55 to number
console.log("55" * 5); //converison of 55 to number
console.log("55" / 5); // conversion of 55 to number
console.log("55" - "44"); //conversion of 55 and 44 to number

console.log("ankush" + 123); //ankush123, bcoz of + operator doing String concat
console.log("ankush" - 123); //NaN, as 'ankush' does not have number equivalent
console.log("ankush" * 123); //NaN
console.log("ankush" / 123); //NaN
console.log(123 + "ankush" + 123); //123ankush123

console.log(10 + "true"); // Output: "10true" (string concatenation)
console.log(10 - "true"); // Output: NaN (subtraction with NaN results in NaN)
console.log(10 + "false"); // Output: "10false" (string concatenation)
console.log(10 - "false"); // Output: NaN (subtraction with NaN results in NaN)

//! Coercion using BOOLEAN (primitive) and arithmetic operators

console.log(22 - true); //21
console.log(222 / false); //Infinity
console.log(true % 222); // 1
console.log("ankush" + true); //true changing to string due to + string concat operator
console.log("ankush" - false); //- prefers number, and there is no number equivalent for 'ankush', so NaN
console.log("ankush" / false); // -same as above- i.e. NaN

let dek1 = null;
let dek2;

console.log(35 * true); //35
console.log(35 + true + true); //37
console.log("abc" + true); //abctrue
console.log(false / "somevalue"); // 'somevalue' does not have a numerical equivalent. so, NaN
console.log(false / ""); // NaN
console.log(false + "somevalue"); //falsesomevalue, bcoz of + operator
console.log(false + ""); //false, bcoz of + operator
console.log(true + dek1); //null coerces to 0, i.e. 1+0 = 1
console.log(true + dek2); //undefined coerces to NaN., so, 1 + NaN = NaN

//* COMPARISON OPERATOR

//! [Loose Equlity] == denotes equality for two values BUT NOT TYPES
//  == supports COERCION which changes non-number types to number and then compares.

console.log("**********  COMAPARISON WITH == and ===  *********");

//? https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript

//EX: 1

let cmp1 = 222;
let cmp2 = "222";

if (cmp1 == cmp2) {
  //here system changes "222" to number

  console.log("matched.....");
} else console.log("not--matched....");

//EX: 2

cmp1 = 1;
cmp2 = true;

if (cmp1 == cmp2) {
  //here system changes 'true' to number. matched

  console.log("matched.....");
} else console.log("not--matched....");

//EX:3

if ("1" == true) {
  console.log("i am ok"); //i am ok
} else {
  console.log("i am sorry");
}

//EX:4

cmp1 = "true";
cmp2 = true;

if (cmp1 == cmp2) {
  console.log("matched.....");
} else console.log("not--matched....");

//--------------------------------------------------------------------

//! null is only loosely equal to undefined and itself.
//! false is loosely equal to 0 and the empty string ("").
//! Therefore, null and false are not loosely equal to each other.

//EX:5.1

cmp3 = null;
cmp4 = false;

if (cmp3 == cmp4) {
  //not-matched

  console.log("matched.....");
} else console.log("not--matched....");

//EX:5.2

cmp3 = null;
cmp4 = undefined;

if (cmp3 == cmp4) {
  //matched

  console.log("matched.....");
} else console.log("not--matched....");

//EX:5.3

cmp3 = null;
cmp4 = null;

if (cmp3 == cmp4) {
  //matched

  console.log("matched.....");
} else console.log("not--matched....");

//EX:5.4

cmp3 = undefined;
cmp4 = undefined;

if (cmp3 == cmp4) {
  //matched

  console.log("matched.....");
} else console.log("not--matched....");

//EX:6

cmp3 = null;
cmp4 = "false";

if (cmp3 == cmp4) {
  //not-matached

  console.log("matched.....");
} else console.log("not--matched....");

//EX:7

cmp3 = "";
cmp4 = false;

if (cmp3 == cmp4) {
  //matched

  console.log("matched.....");
} else console.log("not--matched....");

//-----------------------------------------------------------------------

//! NaN is never equal to anything, including itself.
//! Same applies for > and < and similar operators.

//EX:8

console.log(NaN == NaN); // Output: false
console.log(NaN == 10); // Output: false
console.log(NaN == "hello"); // Output: false
console.log(NaN == null); // Output: false
console.log(NaN == undefined); // Output: false

// NaN (comparisons always return false)
console.log(NaN < 10);    // Output: false
console.log(10 > NaN);    // Output: false
console.log(NaN > NaN);    // Output: false

//! [Strict equality] === denotes equality for two values && TYPES

console.log("**********  COMAPRISON WITH === *********");

//EX-1

let cmp3 = 222;
let cmp4 = "222";

if (cmp3 === cmp4) {
  //here system changes "222" to number but TYPE not matched

  console.log("matched.....");
} else console.log("not--matched....");

//EX-2

cmp3 = 1;
cmp4 = true;

if (cmp3 === cmp4) {
  //here system changes 'true' to number but TYPE not matched

  console.log("matched.....");
} else console.log("not--matched....");

//EX3

let cmpl = 6;
let cmpm = "6";

console.log("== gives : ", cmpl == cmpm); //true
console.log("!= gives : ", cmpl != cmpm); //false
console.log("=== gives : ", cmpl === cmpm); //false
console.log("!== gives : ", cmpl !== cmpm); //true

// Other comparison operators

// '!='	not equal [lossely equal]
// '!=='	not equal value or not equal type [strictly equal]
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// '?:'	ternary operator

//using ternanry operator

console.log("**********  TERNANRY OPERATOR *********");

let points = 99;

let result = points >= 100 ? true : false;

console.log(result);

//* Power/Exponential operator "**"

console.log("**********  USING POWER/EXPONENTIAL *********");

let exp1 = 7;

exp1 = exp1 ** 2;

console.log("the square of 7 is :" + exp1);

//! using > and < operators

// Numbers
console.log(10 < 20);   // Output: true
console.log(30 > 15);   // Output: true
console.log(-5 < 0);    // Output: true
console.log(25 > 25);   // Output: false

// Strings (lexicographical comparison)
console.log("apple" < "banana"); // Output: true
console.log("car" > "bike");   // Output: true
console.log("10" < "2");      // Output: true (string comparison)

const x = "5";
const y = "444444";
console.log(x>y); //true (string comparison- first digits compared)

console.log("hello" > "Hello"); // Output: true (case-sensitive)

// Booleans (true is treated as 1, false as 0)
console.log(false < true);  // Output: true (0 < 1)
console.log(true > false);  // Output: true (1 > 0)
console.log(true > true);   // Output: false
console.log(false < false); // Output: false

// Mixed Types (JavaScript will try to convert)
console.log(10 < "20");  // Output: true ("20" is converted to 20)
console.log("30" > 15);  // Output: true ("30" is converted to 30)
console.log(true > 0);   // Output: true (true is converted to 1)
console.log(false < 1);  // Output: true (false is converted to 0)
console.log("10" > true); // Output: true ("10" is converted to 10, true to 1)
console.log("true">false); //NaN>0, any compariosn with NaN is always false.

// null and undefined (coerced to numbers: null is 0, undefined is NaN)
console.log(null < 1);     // Output: true (null is converted to 0)
console.log(undefined > 0);  // Output: false (undefined is converted to NaN, NaN comparisons are false)
console.log(null > undefined); // Output: false (null is 0, undefined is NaN)

// Objects and Arrays (converted to primitives, often strings)
console.log({} < {});     // Output: false
console.log([1, 2] < [3]); // Output: true (arrays converted to strings "1,2" and "3")
console.log([10] > [2]);   // Output: false (arrays converted to strings "10" and "2")

// NaN (comparisons always return false)
console.log(NaN < 10);    // Output: false
console.log(10 > NaN);    // Output: false
console.log(NaN > NaN);    // Output: false



//! Concept of FALSEY VALUES and TRUTHY values (Logical operators with Coercion)

//? https://www.youtube.com/watch?v=NioXSse29eo&list=PLFGoYjJG_fqpI1yUcQYXZxToBHncVgOaE&index=2

//! falsey values are:

//undefined
//null
//0
//false
//''
//NaN

//! all values apart from falsey values are TRUTHY values

//* Logical Operators

// &&	logical and [short-hand operator]
// ||	logical or  [short hand operator]
// '!'	logical not
// '!!' double logical not

console.log("**********  LOGICAL ! and !! OPERATOR *********");

//! When we use the not (!) or (!!) operator with any values in JavaScript,
//!  it converts the non−boolean value to a Boolean value and checks Falsey values.

//EX-1

let lgcl1 = 1;
let lgcl2 = 0;
let lgcl3 = "true";
let lgcl4 = "";
let lgcl5 = null;
let lgcl6 = undefined;
let lgcl7; //undefined
let lgcl8 = 3 / "abc"; //NaN

console.log(!lgcl1); //f
console.log(!lgcl2); //t
console.log(!lgcl3); //f
console.log(!lgcl4); //t
console.log(!lgcl5); //t
console.log(!lgcl6); //t
console.log(!lgcl7); //t
console.log(!lgcl8); //t

console.log(!!lgcl1); //t
console.log(!!lgcl2); //f
console.log(!!lgcl3); //t
console.log(!!lgcl4); //f
console.log(!!lgcl5); //f
console.log(!!lgcl6); //f
console.log(!!lgcl7); //f
console.log(!!lgcl8); //f

//EX-2

console.log(false || true); //true
console.log(false || false); //false
console.log(true || false); //true
console.log(false && true); //false
console.log(false && false); //false
console.log(true && false); //false

console.log("**********  LOGICAL OPERATOR WITHOUT BOOLEAN *********");

//! When we use ANY LOGICAL operator with any values in JavaScript,
//!  it converts the non−boolean value to a Boolean value and checks Falsey values.

//Ex-2 (with combo of non-boolean)

//! In JavaScript, short-circuiting is done on expression from left to right with || and && operators.
//! Yes, that's correct. In JavaScript, both the logical AND operator (&&) and the logical OR operator (||) can return the value of one of their operands, not just a boolean true or false.


//example of || returning values instead of boolean:

let fname = "Alice";
let defaultName = "Guest";
let displayName = fname || defaultName;
console.log(displayName); // Output: Alice (because "Alice" is truthy)

fname = "";
displayName = fname || defaultName;
console.log(displayName); // Output: Guest (because "" is falsy)

//------------------------------------------------------------------

console.log(false || 1); //1
console.log(false || "naveen");

//step 1: false || 'naveen'(found to be truthy)
//step 2: truth value got printed as 'naveen'

console.log(false || 0); //0
console.log(false || "" || 2); //2
console.log(false || "abc" || 2); //abc
console.log(true || "abc" || 22); //true
console.log((true && "abc") || 22); //abc
console.log(true && "abc" && 22); //22
console.log(("abc" && null) || "def"); //def
console.log("abc" && "abc" && undefined); //undefined
console.log((false && false) || true); //true
console.log(false && undefined && true); //false
console.log("" && false && true); //'' {empty value}

//* Explicit typeconversion (typecasting)

//? https://www.w3schools.com/js/js_type_conversion.asp
//? [REFER CHART to check function ToNumber() behaviour with I/P for Number()] https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript
//? http://es5.github.io/#x9.3  [see ToBoolean for Boolean()]

//! Converting Strings to Numbers [Number()]

let stringadata = "-445.990";
let num = Number(stringadata);
console.log("🚀 ~ num:", num, typeof num);

let stringadata1 = "-445.990a";
let num1 = Number(stringadata1);
console.log("🚀 ~ num1:", num1, typeof num1);

let stringadata2 = "";
let num2 = Number(stringadata2);
console.log("🚀 ~ num2:", num2, typeof num2); //0, number

let stringadata3 = "abcd";
let num3 = Number(stringadata3);
console.log("🚀 ~ num3:", num3, typeof num3); //NaN, Number

let stringadata4 = "  ";
let num4 = Number(stringadata4);
console.log("🚀 ~ num4:", num4, typeof num4); //0, number

let stringadata5 = null;
let num5 = Number(stringadata5);
console.log("🚀 ~ num5:", num5, typeof num5); //0, number

let stringadata6 = undefined;
let num6 = Number(stringadata6);
console.log("🚀 ~ num6:", num6, typeof num6); //NaN, number

//! Converting Numbers to Strings [String()]

let numdata = -445.99;
let mystring = String(numdata);
console.log("🚀 ~ mystring:", mystring);

//!  Converting Booleans to Numbers [Number()]

let booleandata1 = true;
let myNumBol1 = Number(booleandata1);
console.log("🚀 ~ myNumBol1:", myNumBol1); //1

let booleandata2 = false;
let myNumBol2 = Number(booleandata2);
console.log("🚀 ~ myNumBol2:", myNumBol2); //0

//!  Converting Booleans to String [String() or XX.toString()]

console.log(String(true));

console.log(String(false));

console.log(false.toString());

console.log(true.toString());

//! convert any type to boolean [Boolean()]
//! Boolean function returns the boolean value of the variable.
//! It can also be used to find the boolean result of a condition, expression, etc.

console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(-22.99)); //true
console.log(Boolean(22.0)); //true
console.log(Boolean(-0)); //false
console.log(Boolean(+0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean("abc")); //true

//! Notable Differences:

console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean("abc")); //true

console.log(Number("")); //0
console.log(Number(" ")); //0
console.log(Number("abc")); //NaN

//?   Check difference in ToNumber(input)[referring to Number()] VS
//?   ToBoolean(input)[referring to Boolean()] in terms of "", "  ", "gibberish" in
//?   https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript [Image] VS
//?   http://es5.github.io/#x9.3

//* COMPARISON OF OBJECTS USING == and ===

//!  COMPARING TWO DIFFERENT JAVASCRIPT OBJECTS (EVEN HAVING SAME VALUES) ALWAYS RETURNS FALSE.
//! Whether we compare TWO DIFFERENT JAVASCRIPT OBJECTS using == or ===, RESULT IS ALWAYS FALSE.
//! Whether we compare TWO JAVASCRIPT OBJECTS WITH SAME REFERENCE using == or ===, RESULT IS ALWAYS TRUE.

//Example 1: comparing objects to objects

const hero1 = [1, 2];
const hero2 = [1, 2];
const herok = hero1;

console.log(hero1 == hero2); //false
console.log(hero1 === hero2); //false
console.log(hero1 == herok); //true : both having same reference
console.log(hero1 === herok); //true : : both having same reference

//Example 2: comparing primitive to objects

let x1 = "John";
let y1 = new String("John");
console.log(x1 == y1); //true : == compares the values
console.log(x1 === y1); //false

//Example 3: comparing primitive to objects
const x2 = ["0"];
const y2 = 0;
console.log(x2 == y2); //true : == does coercion of string "0" to numeral 0
console.log(x2 === y2); //false

const x3 = [null];
const y3 = 0;
console.log(x3 == y3); //true : == does coercion of null to numeral 0
console.log(x3 === y3); //false

const x5 = new String(undefined);
const y5 = "undefined";
console.log(x5 == y5); //true : == does coercion of undefined to "undefined" (as string)
console.log(x5 === y5); //false

//? check http://es5.github.io/#x9.8 ToString() behaviour for below example-

const x4 = new String(false);
const y4 = "false";
console.log(x4 == y4); //true : == does coercion of false to "false" (as String)
console.log(x4 === y4); //false

//----------------------------------------------------------------------------------

//! Global functions for Type conversion

// 1.	parseInt(): Converts a string to an integer.
// 2.	parseFloat(): Converts a string to a floating-point number.

//!parseInt vs NUmber() to convert Sring to Number

// Both parseInt() and Number() are used to convert strings to numbers in JavaScript, but they have distinct behaviors and use cases. Here's a breakdown of their differences:

// parseInt()

// Purpose: Primarily designed to parse a string and return an integer.
// Parsing Behavior:
// It attempts to parse the string from left to right.
// It stops parsing when it encounters a character that is not a valid digit for the specified radix (base).
// It ignores leading and trailing whitespace.
// If the string does not start with a digit, sign (+ or -), or whitespace, it returns NaN.
// It can take an optional second argument, the radix (base) of the number. If not provided, it defaults to 10 (decimal), but can also be 2 (binary), 8 (octal), or 16 (hexadecimal).
// Return Value: An integer or NaN.
// Number()

// Purpose: Attempts to convert its argument to a number value.
// Conversion Behavior:
// It tries to convert the entire string to a number.
// It allows leading and trailing whitespace.
// It can handle decimal numbers.
// Empty strings are converted to 0.
// null is converted to 0.
// undefined is converted to NaN.
// Strings containing non-numeric characters (other than whitespace, leading + or -, and a single decimal point) are converted to NaN.
// Booleans are converted to 1 (for true) and 0 (for false).
// Return Value: A number (integer or floating-point) or NaN.

// | Feature        | `parseInt()` | `Number()` |
// |----------------|--------------|------------|
// | Empty String   | `NaN`        | `0`        |
// | `null`         | `NaN`        | `0`        |
// | `undefined`    | `NaN`        | `NaN`      |

// parseInt() examples
console.log(parseInt("42")); // Output: 42
console.log(parseInt("42px")); // Output: 42
console.log(parseInt("px42")); // Output: NaN
console.log(parseInt("10", 2)); // Output: 2 (binary)
console.log(parseInt("0xFF", 16)); // Output: 255 (hexadecimal)
console.log(parseInt(" ")); // Output: NaN
console.log(parseInt("355a55")); //output : 355
console.log(parseInt("355.33x22")); //output : 355

// Number() examples
console.log(Number("42")); // Output: 42
console.log(Number("42px")); // Output: NaN
console.log(Number(" px42 ")); // Output: NaN
console.log(Number("10")); // Output: 10
console.log(Number("0xFF")); // Output: 255
console.log(Number("3.14")); // Output: 3.14
console.log(Number(" ")); // Output: 0
console.log(Number("")); // Output: 0
console.log(Number(null)); // Output: 0
console.log(Number(undefined)); // Output: NaN
console.log(Number(true)); // Output: 1
console.log(Number(false)); // Output: 0

//! parseInt vs parseFLoat

// | Feature         | `parseInt()`                                 | `parseFloat()`                                    |
// |-----------------|-----------------------------------------------|-----------------------------------------------------|
// | Primary Use     | Parsing integers from strings                | Parsing floating-point numbers from strings       |
// | Decimal Handling| Truncates decimal part                       | Preserves decimal part                            |
// | Radix Argument  | Optional radix argument                      | No radix argument                                 |
// | Return Value    | Integer or `NaN`                              Floating-point number or `NaN`                     |


console.log(parseFloat("355.33x22")); //output : 355.33
console.log(parseInt("355.33x22")); //output : 355
console.log(parseFloat("100",2)); //output : 100
console.log(parseInt("100",2)); //output : 4


//! toString() Method

let sdata1 = parseInt(22).toString();
console.log(sdata1, typeof sdata1); //22 string