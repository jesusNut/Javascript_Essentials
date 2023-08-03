"use strict";

/**
 * File operations - Read file
 * 
 * @method
 * fs.readFileSync()
 * 
 */
let fs = require("fs")

let filepath = `${process.cwd()}/NodeEssentials/BuiltIn_Native_Modules/Content.json`
let data = fs.readFileSync(filepath, "utf-8")
//console.log(data);
//console.log(typeof data); //string
//console.log(`I wanted to continue...`);

