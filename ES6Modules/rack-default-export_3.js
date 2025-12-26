

//********** WORKING WITH ECMA SCRIPT MODULES -"DEFAULT EXPORT"

//! DONOT FORGET TO ADD  “type” : “module” in package.json if
//! YOU WANT TO USE ECMA SCRIPT MODULES.

//? WHEN TO USE NAMED EXPORTS AND WHEN TO USE DEFAULT EXPORTS.

//todo :  1. Default exports are useful when you want to export only one main thing from a file.
//todo       It is like marking that one thing as the most important to share.
//todo    2. When importing a default export in another file, you can give it any name you want during the import,
//todo       and you don't need to use curly braces {}.
//todo    3. A file can have only one default export item.

//! We can absolutely use both named exports and a default export within the same JavaScript (ES module) file.

//---------------------------------------------------------------------------------

//* Different ways to export default from a file:

function add(a, b) {
  return a + b;
}

//export default add; //🔆 WAY 1🔆

// export default function add(a, b) {  //🔆 WAY 2🔆
//   return a + b;
// }

//==================================================================================================

//In this example 2, we have mixed default export with named export.

// variables

 let bodyName = 'Abhishek'

 export default bodyName;


// object (not exported in this example)

 let socks = {
    brand : 'Zara',
    size : 42,
    price : 233.99,
    hasHoles : false
}

//export default socks; //! error : A module cannot have multiple default exports.

// functions

export function Utils1(){
    console.log('I am first utility')
}

// class

export class StringManipulator{
    constructor(data){
        this.data = data;
    }
    upperCaseTransformer = () => {
        return this.data.toUpperCase();
    }
}


//===========================================================================================================


//! Exporting multiple items from default import :

// export default { item1, item2, item3 };

// This is perfectly valid. You're exporting a single object as the default export.
// That object contains multiple properties (item1, item2, item3).

//* When importing default module, you would use:

//* 🔆 WAY 1 🔆

//todo ☠️☠️ Curly braces are for named exports ONLY ☠️☠️
//todo ☠️☠️ Default exports must be imported without braces. ☠️☠️


//import {myObject} from './module.js'; //! ERROR
// import myObject from './module.js'; //✅

// console.log(myObject.item1);
// console.log(myObject.item2);
// console.log(myObject.item3);

//* 🔆 WAY 2 🔆 [Assuming default export has multiple items : 'export default { item1, item2, item3 };']

//import * as anyname from './utils.js';

// console.log(anyname.default.item1);
// console.log(anyname.default.item2);
// console.log(anyname.default.item3);