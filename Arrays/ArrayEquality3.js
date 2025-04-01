//! To understand equalities in Array

//! Example 1:

let a = [22, 33, 44];

let b = a;

a = [55,66];

//! This above line creates a new, different array [55, 66] and assigns it to the variable a.
//! b, however, still holds a reference to the original array [22, 33, 44]

console.log(a);
console.log(b);

//! Example 2:

let a1 = [22, 33, 44];

let b1 = a;

a.push(55);

console.log(a1); //[ 22, 33, 44, 55 ]
console.log(b1); //[ 22, 33, 44, 55 ]