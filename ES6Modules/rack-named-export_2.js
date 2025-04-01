

//********** WORKING WITH ECMA SCRIPT MODULES - "NAMED EXPORT" - SYNTAX 2

//! DONOT FORGET TO ADD  “type” : “module” in package.json if
//! YOU WANT TO USE ECMA SCRIPT MODULES.

// variables

 let bodyName = 'Abhishek'


// object

 let socks = {
    brand : 'Zara',
    size : 42,
    price : 233.99,
    hasHoles : false
}

// functions

 function Utils1(){
    console.log('I am first utility')
}

  function Utils2(){
    console.log('I am second utility')
}



// class

 class StringManipulator{
    constructor(data){
        this.data = data;
    }
    upperCaseTransformer = () => {
        return this.data.toUpperCase();
    }
}


//todo ******************* ECMA SCRIPT NON-DEFUALT EXPORTS *****************

export {

    bodyName,socks,Utils1,Utils2,StringManipulator

} 

//! This is not creating an object or using object shorthand. 
//! This is ES6 named exports in JavaScript modules.