
//********** WORKING WITH ECMA SCRIPT MODULES  "DEFAULT EXPORT" 

//! DONOT FORGET TO ADD  “type” : “module” in package.json

let bodyName = 'Abhishek'
let age = 99

function Utils1() {
    console.log('I am first utility')
}

function Utils2() {
    console.log('I am second utility')
}

function Utils3() {
    console.log('I am third utility')
}

//! *******************ECMA SCRIPT DEFAULT EXPORTS
//! ONLY A SINGLE DEFAULT EXPORT IS ALLOWED.

// export default {
//     bodyName, age, Utils1, Utils1, Utils2, Utils3
// }


