
"use strict";

const helper = require("./UsingThrow");

/**
 * try...catch
 *
 */
 let filepath = ''
try {
  filepath = `${process.cwd()}/NdeEssentials/BuiltIn_Native_Modules/Content.json`;
  let data = helper.readData(filepath);
  let dataObj = JSON.parse(data);
  console.log(dataObj);
} catch (error) {
console.log(`I can handle the error...`);

/**
 * Retry
 * Log the error msg move
 * Custom error
 */
//  console.log(typeof error); //object
//  console.log(error.name);
//  console.log(error.message);
let customErr = new Error(`Error reading the file: ${filepath} caused by : \n ${error}`);
throw customErr;

}

