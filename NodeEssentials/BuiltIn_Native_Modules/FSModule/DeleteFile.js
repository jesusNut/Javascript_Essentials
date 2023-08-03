
"use strict";

/**
 * File operations - Delete file
 *
 * @method
 * fs.unlinkSync()
 *
 */

 let fs = require("fs")

 let filepath = `${process.cwd()}/NodeEssentials/BuiltIn_Native_Modules/err.json`
 fs.unlinkSync(filepath)
 