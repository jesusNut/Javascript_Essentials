
//********** WORKING WITH COMMON-JS MODULES - WAY 1

 let bodyName = 'Abhishek'

 let age = 99

 function Utils1(){

    console.log('I am first utility')

}

 function Utils2(){

    console.log('I am second utility')

}

 function Utils3(){

    console.log('I am third utility')

}

//! *******************common-js exports

module.exports = {bodyName, age,Utils1,Utils1,Utils2,Utils3 };

//console.log(module)