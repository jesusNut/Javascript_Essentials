
//* Best practice - How to use custom errors

//! Way 1

try {
  let obj = { fname: "Abhishek" };

  obj.forEach(item => console.log(item)); // will throw
} catch (e) {
  throw new Error("Please check your code again!", { cause: e });
}

//! Way 2

try {
  let obj = { fname: "Abhishek" };
  obj.forEach(item => console.log(item));
} catch (e) {
  throw new Error(`Custom Error: Something went wrong. Original: ${e.message}`);
}

