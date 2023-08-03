
"use strict";

/**
 * File operations - Write to a file
 *
 * @method
 * fs.writeFileSync()
 * 
 * @param
 * takes the data in string format (not directly as object)
 * 
 * @results
 * It creates the file, if not already present.
 * In case the file is already present with some prewritte data,
 * then new data will overwrite the file.
 *
 */

let err = {
  testid: "TC123",
  errDes: "App failed to launch",
};

let fs = require("fs")

let filepath = `${process.cwd()}/NodeEssentials/BuiltIn_Native_Modules/err.json`
 //let data = JSON.stringify(err) //written on file without formatting 
 let data = JSON.stringify(err, undefined, 4) //written on file with formatting 
 fs.writeFileSync(filepath,data)
