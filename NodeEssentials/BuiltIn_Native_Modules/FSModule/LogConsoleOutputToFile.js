
"use strict";

/**
 * @steps
 * 1. Read the file using readFileSync()
 * 2. Output on console.
 * 3. use the below script in package.json - script.
 * * node ./NodeEssentials/BuiltIn_Native_Modules/FSModule/LogConsoleOutputToFile.js > output.txt
 * This will create a file named output.txt in root.
 */
let fs = require("fs")

let filepath = `${process.cwd()}/NodeEssentials/BuiltIn_Native_Modules/Content.json`
let data = fs.readFileSync(filepath, "utf-8")
console.log(data);
//console.log(typeof data); //string
//console.log(`I wanted to continue...`);

