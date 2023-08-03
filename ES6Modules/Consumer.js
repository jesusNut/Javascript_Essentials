
//! Importing in case of default export. (we can only use a single var to store e.g. 'utiltiesData')

// import utiltiesData from './Utilities.js'

//  utiltiesData.Utils1();
//  utiltiesData.Utils2();
//  utiltiesData.Utils2();
//  console.log(utiltiesData.age)
//  console.log(utiltiesData.bodyName)

 //! Importing for named export -SYNATAX 2
 //! While importing named exports, the names of the corresponding components must match.

// import {panchName, umar, Helped1, Helped2, Helped3} from './Helper2.js'

// console.log(panchName)
// console.log(umar)
// Helped1()
// Helped2()
// Helped3()


 //! Importing for named export -SYNATAX 1
 //! While importing named exports, the names of the corresponding components must match.

// import {shareerName,aged,Helper1,Helper2,Helper3} from './Helper.js'

// console.log(shareerName)
// console.log(aged)
// Helper1()
// Helper2()
// Helper3()

//! Importing all from a Module

// import * as HelperData from './Helper.js'

// console.log(HelperData.shareerName)
// console.log(HelperData.aged)
// HelperData.Helper1()
// HelperData.Helper2()
// HelperData.Helper3()


