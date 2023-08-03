//! A HIGHER ORDER FUNCTION (HOF) is a function that
//! takes one or more functions as arguments,
//! OR returns a function as its result.
//! Inbuilt higher order functions : ForEach, Map, Reduce

//! The function which is passed as an argument to a HOF is called CALLBACK FUNCTION.

//? EXAMPLE 1: HOF TAKING CALLABCK FUNCTION AS ARGS.
//? write a HOF which can transform & return a string to uppercase or lowercase.

//write a function which can change String to Uppercase

let upperDoer = (data) => {
  return data.toUpperCase();
};

//write a function which can change String to Lowercase

let lowerDoer = (data) => {
  return data.toLowerCase();
};

//write the HOF which can take above two functions as args.

function transformer(data, someFunc) {
  return someFunc(data);
}

//calling HOF

//! give the name of the callback function WITHOUT BRACKETS while passing them as args to HOF.

console.log(transformer("abhishek", upperDoer));
console.log(transformer("ABHISHEK", lowerDoer));

//https://cmorinan.medium.com/passing-functions-as-arguments-in-javascript-tips-and-pitfalls-d29bbd4522a9

//? EXAMPLE 2: HOF TAKING CALLBACK FUNCTION AS ARGS AT RUNTIME.


const radiusArray = [2,3,4,5,6]

const calcArray = radiusArray.map((radius) => { return Math.PI * (radius ** 2); });
console.log("🚀 ~ calcArray:", calcArray);


//? EXAMPLE 3: HOF returning a function

let complimentor = (msg) => {
    return function giveComplement(nameofCoder) {
      console.log(msg + " MY DEAR " + nameofCoder);
    };
  };
  
  //while calling - method 1
  
  const extractedInnerFunction = complimentor("You give best variable names");
  
  extractedInnerFunction('Abhishek')
  
  //while calling - method 2
  
  complimentor("Your formatting of code is just awesome !!")('Babu')

