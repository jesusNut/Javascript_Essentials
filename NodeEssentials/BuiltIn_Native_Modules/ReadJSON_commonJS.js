

//! READ EXTERNAL JSON FILE USING require() of commonJS module.

//* require() and JSON:
// Node.js has built-in support for JSON files.
// When you require() a .json file, Node.js automatically reads the file, 
// parses its JSON content, and returns the resulting JavaScript object.

//* Automatic Parsing:
// This means that the mydata variable in your code will hold a JavaScript object, not a JSON string.
// You can directly access the properties of this object using dot notation or bracket notation.

const extractedJSONDATA = require('./Content.json');

console.log(extractedJSONDATA);


