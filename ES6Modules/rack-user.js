
/**================================================================================================
 *?    Importing for named export (./rack-named-export_1.js)
 *================================================================================================**/

//! 1. The path of the file must be appended with .js extension.

//! 2. Name of the exported items and imported items must be same.

//if you want to use all the exported items:

//  import {bodyName,socks,Utils1,Utils2,StringManipulator} from './rack-named-export_1.js' //! This not object destructring !!! 
                                                                              //!This is a fixed syntax for importing named exports.

// console.log(bodyName);
// console.log(socks);
// Utils1();
// Utils2();

// const obj1 = new StringManipulator('I am bahubali...');
// console.log(obj1.upperCaseTransformer());

// console.log('----------------------------------------------');

/**================================================================================================
 *?    Importing for named export (./rack-named-export_2.js)
 *================================================================================================**/
//! 1. The path of the file must be appended with .js extension.

//! 2. Name of the exported items and imported items must be same.

//if you want to use all the exported items:

//  import {bodyName,socks,Utils1,Utils2,StringManipulator} from './rack-named-export_2.js'

// console.log(bodyName);
// console.log(socks);
// Utils1();
// Utils2();

// const obj2 = new StringManipulator('I am Mani Mundra...');
// console.log(obj2.upperCaseTransformer());

// console.log('----------------------------------------------');

/**================================================================================================
 *?    Importing for named export - IMPORTING ALL ITEMS AS NAMESPACE
 *================================================================================================**/

//! 1. The path of the file must be appended with .js extension.

//! 2. If you want to use all the exported items AS AN ALIAS.

//  import * as DataLoader from './rack-named-export_1.js'

//  console.log(DataLoader.bodyName);
//  console.log(DataLoader.socks);
//  DataLoader.Utils1();
//  DataLoader.Utils2();

//  let StringManipulatorHolder = DataLoader.StringManipulator;

//  const obj3 = new StringManipulatorHolder('I am Raj Malhotra...');
//  console.log(obj3.upperCaseTransformer());

//  console.log('----------------------------------------------');

/**================================================================================================
 *?   Importing for named export - IMPORTING INDIVIDUAL ITEMS AS ALIAS
 *================================================================================================**/

//!  1. The path of the file must be appended with .js extension.

//! 2. Name of the exported items and imported items must be same.

//! 3. Name of imported items can be given aliases.

//lets assume I want to use bodyName, socks items only.

// import { bodyName as Subject, socks as Mozza} from './rack-named-export_1.js'

// console.log(Subject);
// console.log(Mozza);

// console.log('----------------------------------------------');

/**================================================================================================
*?    Importing for default exports
*================================================================================================**/

//! 1. The path of the file must be appended with .js extension.
//! 2.  Name of the exported items and imported items CAN BE DIFFERENT in case of DEFAULT EXPORTS.

//* When importing default module, you would use:

//* 🔆 WAY 1 🔆

//todo ☠️☠️ Curly braces are for named exports ONLY ☠️☠️
//todo ☠️☠️ Default exports must be imported without braces. ☠️☠️


//import {myObject} from './module.js'; //! ERROR
// import myObject from './module.js'; //✅ myObject is actual name of entity exported.
// import anyname from './module.js'; ✅ We can use any name for default import.

// console.log(myObject.item1);
// console.log(myObject.item2);
// console.log(myObject.item3);

//* 🔆 WAY 2 🔆 [Assuming default export has multiple items : 'export default { item1, item2, item3 };']

//import * as anyname from './utils.js';

// console.log(anyname.default.item1);
// console.log(anyname.default.item2);
// console.log(anyname.default.item3);