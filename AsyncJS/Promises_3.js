//* Resolving the issue of callback Hell or Pyramid of Doom using PROMISE.

//*   Example of Async code 1:

//* * PROBLEM STATEMENT :: I want to run setUp first, performer 2nd, teardown 3rd and at print results.

function setUp() {
  setTimeout(() => {
    console.log("I am completing the set up..");
  }, 6000);
}

function performer() {
  setTimeout(() => {
    console.log("I am performing something..");
  }, 4000);
}

function teardown() {
  setTimeout(() => {
    console.log("I am Quitting..");
  }, 2000);
}

function printResults() {
  setTimeout(() => {
    console.log("I am Printing results..");
  }, 1000);
}

// setUp();
// performer();
// teardown();
// printResults()

//* Solving the sequence problem using PROMISE concept.

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

//* WAY 1:

//? https://www.youtube.com/playlist?list=PLXQpH_kZIxTV7slsiwQarBEVXHgQWDhLQ

//setUp().then(performer).then(teardown).then(printResults);

//* WAY 2: Use it if you are returning something from resolve() from promise.[here, i havent used]

//? https://www.youtube.com/watch?v=Jkv3co2SRtE

// setUp()
//   .then(() => {
//     return performer();
//   })
//   .then(() => {
//     return teardown();
//   })
//   .then(() => {
//     printResults();
//   });

//? OR variation of WAY2: in arrow func., we can omitt '{}' & 'return' if there is only one statement to return.

//? https://youtu.be/HgZ4tle2CoM?list=PLzDWIPKHyNmLxpL8iQWZXwl_ln0BgckLt&t=400

// setUp()
//   .then(() =>performer())
//   .then(() =>teardown())
//   .then(()=>printResults())

//! The above code is equivalent to below:

function chainer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am completing the set up..");
      resolve(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("I am performing something..");
            resolve(() => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  console.log("I am Quitting..");
                  resolve(() => {
                    return new Promise((resolve, reject) => {
                      setTimeout(() => {
                        console.log("I am Printing results..");
                        resolve();
                      }, 4000);
                    });
                  });
                }, 2000);
              });
            });
          }, 4000);
        });
      });
    }, 6000);
  });
}

//=============
// way 1:
//=============

// chainer()
//   .then((func) => {
//     return func();
//   })
//   .then((func) => {
//     return func();
//   })
//   .then((func) => {
//     func();
//   });

//=============
// way 2:
//=============

// chainer()
//   .then((func) => func())
//   .then((func) => func())
//   .then((func) => func());


//*   Example of Async code 2:

//* Problem :

// I want to sequence the printing as :
// 1. Setting up car
// 2. Starting car
// 3. Driving car
// 4. Stopping car

function printer(data) {
  let tempData = "Initial Value";
  setTimeout(() => {
    tempData = tempData + "----" + data;
    console.log(tempData);
  }, Math.floor(Math.random() * 10));
}

//   printer("Setting up car");
//   printer("Starting car");
//   printer("Driving car");
//   printer("Stopping car");

//* Solving the sequence problem using PROMISE concept.

//* Redefining function with promise:

function printer(data) {
  return new Promise((resolve, reject) => {
    let tempData = "Initial Value";
    setTimeout(() => {
      tempData = tempData + "----" + data;
      console.log(tempData);
      resolve();
    }, Math.floor(Math.random() * 10));
  });
}

//* Consuming promise:

// printer("Setting up car")
//   .then(() => {
//     return printer("Starting car");
//   })
//   .then(() => {
//     return printer("Driving car");
//   })
//   .then(() => {
//     return printer("Stopping car");
//   });

//? OR variation of above way to consume promise:
//? In arrow func., we can omitt '{}' & 'return' if there is only one statement to return.

// printer("Setting up car")
//   .then(() => printer("Starting car"))
//   .then(() => printer("Driving car"))
//   .then(() => printer("Stopping car"));

