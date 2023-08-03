//* Continue used with labels:

//Write a Java program to write table of 1 to 10 but skip the tables of 4 and 8

// outer: for (let i = 1; i <= 10; i++) {
//   if (i === 4 || i === 8) {
//     continue outer;
//   }

//   inner: for (let j = 1; j <= 10; j++) {
//     console.log(i * j);
//   }

//   console.log("\n");
// }

//* Continue used with labels:

//Write a Java program to write table of 1 to 10 but print '--' in place of all the 24s

// outer: for (let i = 1; i <= 10; i++) {

//     inner: for (let j = 1; j <= 10; j++) {

//         if ((i*j) === 24) {
//             console.log("--")
//             continue inner;
//           }
//       console.log(i * j);
//     }

//     console.log("\n");
//   }

//* Break

//print the values form 1 to 1000 but break the loop at 871

let mynums = [];

for (let i = 1; i <= 1000; i++) {
  if (i === 871) break;

  mynums.push(i);
}

console.log(mynums);
