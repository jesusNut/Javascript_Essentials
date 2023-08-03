"use strict";
let fs = require("fs");

/**
 * throw
 *
 * @syntax
 * throw expression
 * 
 * @usecase
 * 
 * 1. Throwing an existing object
 * 2. Throwing a cutsom user generated Error Object.
 */

//1. Throwing an existing object

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw#throwing_an_existing_object

function myfunction(browser) {

    if (browser === 'Chrome') {
        console.log("Chrome eats RAM but I use the same hahahaha...");
    }
    else {
        throw `Framewoek does not support ${browser}`
    }

}
//myfunction('Firefox');

//2. Throwing a cutsom user generated Error Object.

let filepath = `${process.cwd()}/NdeEssentials/BuiltIn_Native_Modules/Content.json`

let readData = (filepath) => {
    if (!fs.existsSync(filepath)) {

        // throw  Error("The file path does not exists !!"); //way 1
        //throw new Error("The file path does not exists !!"); //way 2- using new keyword

        //throw new ReferenceError("The file path does not exists..") //customizing the existsing JS errors

    }
    let data = fs.readFileSync(filepath, "utf-8");
    return data;
}

//console.log(readData(filepath));

module.exports ={
    readData, myfunction
}
