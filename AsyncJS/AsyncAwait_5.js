//*   Example of Async code 1:

//* * PROBLEM STATEMENT :: I want to run setUp first, performer 2nd, teardown 3rd and at print results.

// function setUp() {
//   setTimeout(() => {
//     console.log("I am completing the set up..");
//   }, 6000);
// }

// function performer() {
//   setTimeout(() => {
//     console.log("I am performing something..");
//   }, 4000);
// }

// function teardown() {
//   setTimeout(() => {
//     console.log("I am Quitting..");
//   }, 2000);
// }

// function printResults() {
//   setTimeout(() => {
//     console.log("I am Printing results..");
//   }, 1000);
// }

// setUp();
// performer();
// teardown();
// printResults()

//* Solving the sequence problem using PROMISE & ASYNC-AWAIT concept.

//* Redefining functions with promise:

function setUp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am completing the set up..");
      resolve();
    }, 6000);
  });
}

function performer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am performing something..");
      resolve();
    }, 4000);
  });
}

function teardown() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am Quitting..");
      resolve();
    }, 2000);
  });
}

function printResults() {
  setTimeout(() => {
    console.log("I am Printing results..");
  }, 1000);
}

//* Consuming promise:

async function sequencer() {
  await setUp();
  await performer();
  await teardown();
   printResults();
}

sequencer();
