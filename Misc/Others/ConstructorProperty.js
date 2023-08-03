
//! usage of constructor property to distingusih different type of objects.

//Problem statement :

let arr = []
let regex = /abc/
let obj = {}
let val = null
let myfunc = function(){}
let myPromise =  new Promise((resolve, reject) => {
    
});
let date = new Date();

// console.log(typeof arr) //object
// console.log(typeof regex) //object
// console.log(typeof obj) //object
// console.log(typeof val)//object
// console.log(typeof myfunc) //function
// console.log(typeof myPromise) //object
//console.log(typeof date) //object

//* SOLUTION: use 'constructor' property to distinguish.

// console.log( arr.constructor) //[Function: Array]
// console.log( regex.constructor) //[Function: RegExp]
// console.log( obj.constructor) //[Function: Object]
// console.log( val.constructor)//null error
// console.log( myfunc.constructor) //[Function: Function]
// console.log(myPromise.constructor) //[Function: Promise]
//console.log(date.constructor) //[Function: Date]
