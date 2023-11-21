
/**========================================================
 **    ☠️☠️ WORKING WITH COMMON-JS MODULES - WAY 1 ☠️☠️
 *=========================================================**/

// In this example, We will export items like variables, objects, functions
// and classes from this file & import those items in utility-user.js.

//! variables

let bodyName = 'Abhishek'


//! object

let socks = {
    brand : 'Zara',
    size : 42,
    price : 233.99,
    hasHoles : false
}

//! functions

function Utils1(){
    console.log('I am first utility')
}

 function Utils2(){
    console.log('I am second utility')
}



//! class

class StringManipulator{
    constructor(data){
        this.data = data;
    }
    upperCaseTransformer = () => {
        return this.data.toUpperCase();
    }
}

//todo ****************** exporting items as common-js module *******************

module.exports = {bodyName,socks,Utils1,Utils2,StringManipulator};