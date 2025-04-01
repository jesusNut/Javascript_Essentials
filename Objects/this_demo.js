/**================================================================================================
 *!      UNDERSTANDING THIS KEYWORD IN DIFERENT CONTEXTS
 *================================================================================================**/

//?  https://www.javascripttutorial.net/javascript-this/

//! PLEASE BE AWARE THIS ALL WITH "type":commonJS in package.json file

/**=====================================================
//*   🌏 Usage of this keyword in global scope🌏
 *======================================================**/

// When this is used outside of any function in the global scope (in browsers, this is the window object; in Node.js, it's global),
//  it refers to the global object itself.

//console.log(global);

//<ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Function: structuredClone],
//     atob: [Getter/Setter],
//     btoa: [Getter/Setter],
//     performance: [Getter/Setter],
//     fetch: [Function: value],
//     crypto: [Getter]
//   }

/**=================================================================
//*   🌏 Usage of this keyword in module scope i.e. xxx.js file🌏
 *==================================================================**/

// this in any .js file refers to module.exports

//console.log(this === module.exports ); //true

//console.log(this); //{}

/**=====================================================
//*   🌏 Usage of this keyword inside a normal function🌏
 *======================================================**/

// this refers to global scope only(NOT module scope) even if function is written inside a js file only.
//In a Node.js environment (without explicitly using 'use strict';), the value of this inside a regular function called directly is the global object.

//Example 1:

function printDetails(obj) {
  return `This show is ${this.showName} on channel ${this.channelName}`;
}

let object1 = {
  showName: "Shararat",
  channelName: "Star plus",
};

let object2 = {
  showName: "Meri Sautan ke pati ki biwi",
  channelName: "Ekta Kapoor Productions",
};

  // console.log(printDetails(object1));
  // console.log(printDetails(object2));

//his show is undefined on channel undefined
//This show is undefined on channel undefined

//Example 2:

function myFunc(){

  console.log(this===global); //true
  console.log(this); //global object is printed
}

//myFunc();


/**=====================================================
//*   🌏 Usage of this keyword inside a method of an object🌏
 *======================================================**/

//* The 'this' references the object of which the function is a property.

/**===================================================
//!    🐞🐞🐞 How not to use it? 🐞🐞🐞
 *====================================================**/

//? https://www.freecodecamp.org/news/the-this-keyword-in-javascript
//? https://stackoverflow.com/questions/4616202/self-references-in-object-literals-initializers

//todo *** AN OBJECT'S this IS ONLY AVAILABLE TO METHODS OF SAID OBJECT UPON INVOCATION, AND NOT TO PROPERTIES. ***

let someObject = {
    firstname: 'abhishek',
    lastname: "bhardwaj",
    email: this.firstname + "." + this.lastname + "@somemail.com"
}

console.log(someObject.firstname) //abhishek
console.log(someObject.lastname) //bhardwaj
console.log(someObject.email) //'undefined.undefined@somemail.com' as statement is not a method invocation.

/**===================================================
//*    🐞🐞🐞 How to use it? 🐞🐞🐞
 *====================================================**/

let correctObject = {
    firstname: 'abhishek',
    lastname: "bhardwaj",
    email: function () {
        return this.firstname + "." + this.lastname + "@somemail.com"
    }
}

console.log(correctObject.firstname)
console.log(correctObject.lastname)
console.log(correctObject.email()) //this will refer to 'correctObject' upon invocation


//!^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/**===================================================
//*    'this' with package.json with "type": "module"  🐞🐞🐞
 *====================================================**/

//! Top-LeveTop-level this is 'undefined'.
//! Functions (non-methods) always have 'undefined' this.
//! Object methods have this set to the object.
//! Arrow functions inherit this from the surrounding scope.
//! ESM always runs in strict mode at the top level.

