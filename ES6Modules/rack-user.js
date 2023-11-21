
/**================================================================================================
 *?    Importing for named export (./rack-named-export_1.js)
 *================================================================================================**/

//! 1. The path of the file must be appended with .js extension.

//! 2. Name of the exported items and imported items must be same.

//if you want to use all the exported items:

//  import {bodyName,socks,Utils1,Utils2,StringManipulator} from './rack-named-export_1.js'

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

import { bodyName as Subject, socks as Mozza} from './rack-named-export_1.js'

console.log(Subject);
console.log(Mozza);

console.log('----------------------------------------------');

/**================================================================================================
*?    Importing for default exports
*================================================================================================**/

//! 1. The path of the file must be appended with .js extension.

//! 2.  Name of the exported items and imported items CAN BE DIFFERENT in case of DEFAULT EXPORTS.

import anyname from './rack-default-export_3.js' //importing for default export
import { Utils1, StringManipulator } from './rack-default-export_3.js' //importing for named exports
//since the above imports are for named exports, so names must be same while exporting and importing

console.log(anyname);
Utils1();

const obj4 = new StringManipulator('I am Kaani Mojhi...');
console.log(obj4.upperCaseTransformer());