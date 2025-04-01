
"use strict";


//? https://bobbyhadz.com/blog/set-environment-variables-in-package-json    

//? ALSO GOOGLE : usage of cross env package.

/**
 * * process.env - 
 * * The process.env property is an inbuilt API of the process module which is used to set & get the user environment. 
 * 
 * @notes
 * 1. process is a global module - i.e can be accessed directly.
 *    BUT it is recommended to import it and then use.
 * 
 * @usecase
 * You want to set a custom environment variable so you can access anywhere in your project
 * 
 * @scenario
 * 1. To set a environment variable at runtime (decide which environment to run the test)
 * 2. To read .env file and get all secret info such as user creds, auth key...etc
 * 
 * @bestpractice
 * The env variable in UPPER CASE
 * 
 * @steps
 * 1. Access process.env global object
 * 2. Set a custom environment variable via command line in process.env
 * 3. Access that variable in test code
 * 4. Run the code from project root via npm script in package.json file.
 * 5. PASS a custom environment variable via npm script in package.json file.
 *   + Run the code (ProcessEnv.js file) from project root after step 5 in a single step.
 * 
 ** BE ADVISED THAT, USING SCRIPTS OF package.json, we can only PASS env. values for that command.
 ** IT DOES NOT SET THE VARIABLE IN PROCESS.ENV OBJECT. 

 */

//!process is a global module - i.e can be accessed directly.

 console.log(process.env);
// console.log(process.env.USERNAME)
// console.log(process.env['TERM_PROGRAM'])

//! BUT it is recommended to import it and then use.

//const myProcessEnvData = require('process')

//console.log(myProcessEnvData.env);
// console.log(myProcessEnvData.env.USERNAME)
// console.log(myProcessEnvData.env['TERM_PROGRAM'])

//! setting a custom env variable in process.env using terminal (command Prompt)

//* set RUNENV=DEV //run this in terminal

//! setting a custom env variable in process.env using terminal and run this file in same command
//! Notice that there is no space between the value of each environment variable and the && symbols.

//* set RUNENV=DEV&& node processEnv.js

//! accessing the custom environment data in process.env file [which we set above using terminal]

//console.log(myProcessEnvData.env['RUNENV']) //DEV

//! Run the code from project root via npm script in package.json file.

//{
//     "name": "jsplayground",
//     "version": "1.0.0",
//     "description": "a sample project",
//     "main": "index.js",
//     "scripts": {
//*       "myscript": "node ./NodeEssentials/BuiltIn_Native_Modules/ProcessModule/ProcessEnv.js",
//     },
//     "keywords": [
//       "ankush",
//       "babu"
//     ],
//     "author": "abhishek <abc@def.com>",
//     "license": "ISC",
//     "dependencies": {
//       "cowsay": "^1.5.0"
//     }
//   }


//! PASS A custom environment variable via npm script in package.json file 
//! + Run the code (ProcessEnv.js file) from project root in a single step.
// {
//     "name": "jsplayground",
//     "version": "1.0.0",
//     "description": "a sample project",
//     "main": "index.js",
//     "scripts": {
//*       "dynamicScript": "set RUNENV=PROD&& node ./NodeEssentials/BuiltIn_Native_Modules/ProcessModule/ProcessEnv.js"
//     },
//     "keywords": [
//       "ankush",
//       "babu"
//     ],
//     "author": "abhishek <abc@def.com>",
//     "license": "ISC",
//     "dependencies": {
//       "cowsay": "^1.5.0"
//     }
//   }
  


