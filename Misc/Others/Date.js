//* Date and Time in JS

//! date object aways helds both date and time.
//! the standard time fixed as starting point of reference for date & time in JS is:
//! Jan 1st of 1970 UTC+0.

//* creating a Date object - for current date-time and its important methods

let myDate = new Date();

// How many milliseconds has been completed from Jan 1st of 1970 UTC+0. to the date & time
// fetched above.

console.log(myDate); //2023-07-29T20:14:43.525Z which is a UTC time
console.log(myDate.toUTCString()); //Sat, 29 Jul 2023 20:14:43 GMT
console.log(myDate.toString()); //Sun Jul 30 2023 01:18:47 GMT+0530 (India Standard Time)
console.log(myDate.toJSON()); //2023-07-29T20:08:55.858Z
console.log(myDate.toLocaleDateString()) //30/7/2023
console.log(myDate.toLocaleTimeString()) //1:38:55 am
console.log(myDate.toLocaleString()) //30/7/2023, 1:38:55 am


//* specifiying a particular date-time by providing - date,hours,minutes,sec,millisec.

//format:: year,month(0 index based),date,hours,minutes,sec,milisec

let myDate1 = new Date(1992,1,20,16,20); 

console.log(myDate1.toString()) //Thu Feb 20 1992 16:20:00 GMT+0530 (India Standard Time)

//* specifiying a particular date-time by providing - milliseconds past 01.01.1970 UTC+0

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log(Jan01_1970); //1970-01-01T00:00:00.000Z

let Jan02_1970 = new Date(24*1000*60*60);
console.log(Jan02_1970); //1970-01-02T00:00:00.000Z


//* specifiying a particular date-time by providing string argument

//? https://stackoverflow.com/questions/5619202/parsing-a-string-to-a-date-in-javascript 
//? https://javascript.info/date#access-date-components    

let myDate2 = new Date("02-20-1993"); 
console.log(myDate2.toLocaleString());

//*Accessing date components

//All the methods below return the components relative to the local time zone.
//UTC counterpart methods are also available. see links.

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1; //as months are index based
let year = date.getFullYear();
let din = date.getDay();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); // 30-7-2023
console.log(din) //0 which means sunday

//!  0 (Sunday) to 6 (Saturday). The first day is always Sunday,

//*Accessing time components

const date1 = new Date();

let hours = date.getHours();
let mins = date.getMinutes();
let seconds = date.getSeconds();

// This arrangement can be altered based on how we want the date's format to appear.
let currentTime = `${hours}:${mins}:${seconds}`;
console.log(currentTime) //1:56:42

//* get timestamp of any date

//getting current time stamp

console.log(Date.now()) // 1690662823408

//getting time-stamp of 20-02-1993 12 bje

let date3 = new Date('1992-02-20');
console.log(date3.getTime()) //698544000000

//*setting time : do from links

//* Date.parse() : https://javascript.info/date#date-parse-from-a-string







