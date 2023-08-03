

// Write a program to calculate the sum of the numbers from 1 till upper bound.
// If upper bound is 5, sum should be 1 + 2 + 3 + 4 + 5 = 15.
// If upper bound is 11, sum should be 1 + 2 + ... + 11 = 66.
// If upper bound is 100, sum should be 1 + 2 + ... + 100 = 5050.

// You should use while loop.

let num = 1;
let upperBound = 100;
let total =0;

while(num<=upperBound){

     total  = num + total;
     num++;

}

console.log("🚀 ~ tot̥al:", total)

// Print the table of 12 using do-while loop.
// Output should be in following format:
// 12 X 1 = 12
// 12 X 2 = 24
// 12 X 3 = 36
// 12 X 4 = 48
// 12 X 5 = 60
// 12 X 6 = 72
// 12 X 7 = 84
// 12 X 8 = 96
// 12 X 9 = 108
// 12 X 10 = 120

let counter = 1;

do{

     console.log(`12 * ${counter} = `,(12*counter))
     counter++;

}while(counter <= 10)