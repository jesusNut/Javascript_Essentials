//! READ EXTERNAL JSON FILE USING import() of ESM module.

//import(filePath, { with: { type: 'json' } }) :This is a dynamic import expression. 
// It loads the module located at the filePath at runtime.

//{ with: { type: 'json' } } is the import assertion.
//  It tells the JavaScript runtime that the file being imported is a JSON file,
//  and should be parsed as such.
//  This is crucial because without it, the runtime would try to treat the JSON as a JavaScript module,
//  which would result in errors.

// 'await' : Because import() returns a promise, we use the await keyword to pause the execution
//  of the async function until the promise resolves. ESM imports are ASYNCHRONOUS.

// 'const module = ...' : This module object contains the parsed JSON data.

// 'module.default' : When you import a JSON file using import with the JSON assertion,
//  the parsed JSON data is exposed as the default export of the module. 


async function readJSON() {
  const data = await import("./Content.json", { with: { type: "json" } });
  return data.default;
}

let data = await readJSON();
console.log(JSON.stringify(data.glossary.title));
console.log("***********************************");
