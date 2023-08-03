
//********** WORKING WITH ECMA SCRIPT MODULES - "NAMED EXPORT" - SYNTAX2

//! DONOT FORGET TO ADD  “type” : “module” in package.json


let panchName = 'Tabhishek'

let umar = 999

let Helped1 = function () {

    console.log('I am first Helped')

}

let Helped2 = function () {

    console.log('I am second Helped')

}

let Helped3 = function () {

    console.log('I am third Helped')

}

//! *******************ECMA SCRIPT NON-DEFUALT EXPORTS

export {

    panchName, umar, Helped1, Helped2, Helped3
}
