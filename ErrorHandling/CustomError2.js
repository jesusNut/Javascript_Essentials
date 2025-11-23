class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  let obj = { fname: "Abhishek" };
  obj.forEach(item => console.log(item));
} catch (e) {
  throw new CustomError("Please check your code again!");
}
