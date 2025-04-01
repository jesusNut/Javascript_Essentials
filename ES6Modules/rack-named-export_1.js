//********** WORKING WITH ECMA SCRIPT MODULES - "NAMED EXPORT" - SYNTAX 1

//! DONOT FORGET TO ADD  “type” : “module” in package.json if
//! YOU WANT TO USE ECMA SCRIPT MODULES.

//!  ESM imports are asynchronous (using promises), which allows for better performance.

//! static vs dynamic import:

//import { xxx } from 'xxx' //static import

//await import('./mydata.json', { assert: { type: 'json' } }) //dynamic import - used to read JSON files in ESM (see ReadJSON_ESM.js)

// variables

export let bodyName = "Abhishek";

// object

export let socks = {
  brand: "Zara",
  size: 42,
  price: 233.99,
  hasHoles: false,
};

// functions

export function Utils1() {
  console.log("I am first utility");
}

export function Utils2() {
  console.log("I am second utility");
}

// class

export class StringManipulator {
  constructor(data) {
    this.data = data;
  }
  upperCaseTransformer = () => {
    return this.data.toUpperCase();
  };
}
