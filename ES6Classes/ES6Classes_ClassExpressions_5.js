

//! A class can be created as an expression as well.

//! A class expression doesn’t require an identifier after the class keyword. 
//! And you can use a class expression in a variable declaration and pass it into a function as an argument.

//* writing a class expression

//? SIDENOTE; In below example, we have used instance var. 'name' directly in const.
//? BUt, the good practice is to declare the variable before contructors.[refer : ES6Classes_1.js -line 14]

let Person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

//* how to use a class expression.

const abhi = new Person('Abhishek');

console.log(abhi.name)
console.log(abhi.getName())