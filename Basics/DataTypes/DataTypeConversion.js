//! All conversions will be done using Inbuilt functions in JS.

//! CONVERT STRING TO NUMBER - using parseInt and parseFloat

let data1 = "5556.88";

const numericData1 = parseInt(data1); //Integral data

console.log(numericData1, typeof numericData1);

const numericData2 = parseFloat(data1);

console.log(numericData2, typeof numericData2); //Floating point data

//! CONVERT STRING TO NUMBER - using unary+

let data2 = "5556.88";

let convData1 = +data2;

console.log(convData1, typeof convData1);

//? What happens if we try to convert a string which is actually not a anumber to number datatype.

let data4 = "bbn667.88true";
let data5 = "667.88trueeewfewfwe";

let convData2 = parseFloat(data4);
let convData3 = parseFloat(data5);

console.log(convData2); //NaN
console.log(convData3); //667.88

//! CONVERT NUMBER TO STRING -

let data3 = 85867.889;

const convDataStr = data3.toString();

console.log(convDataStr, typeof convDataStr);
