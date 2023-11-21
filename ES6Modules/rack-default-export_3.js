

//********** WORKING WITH ECMA SCRIPT MODULES -"DEFAULT EXPORT"

//! DONOT FORGET TO ADD  “type” : “module” in package.json if
//! YOU WANT TO USE ECMA SCRIPT MODULES.

//? WHEN TO USE NAMED EXPORTS AND WHEN TO USE DEFAULT EXPORTS.

//todo :  1. Default exports are useful when you want to export only one main thing from a file.
//todo       It is like marking that one thing as the most important to share.
//todo    2. When importing a default export in another file, you can give it any name you want during the import,
//todo       and you don't need to use curly braces {}.
//todo    3. A file can have only one default export.

//---------------------------------------------------------------------------------


//In this example, we have mixed default export with named export.

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
