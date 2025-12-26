//=================================================================================================

//! Writing types of promises : Give me a promise that will give me a Promise of String.

//* 🤔🤔 Use Promise<T> to enforce the resolved value type; T becomes the type of resolve(value).🤔🤔

//=================================================================================================

//Example 1:

let somePromise = new Promise<string>((resolve, reject) => {
  resolve("abcd"); //💪 writing anything other than string in resolve now will give error.
  //resolve(123); //🤢 ERROR : Argument of type 'number' is not assignable to parameter of type 'string | PromiseLike<string>'
});

//=================================================================================================

//Example 2: Make sure below code runs sequentially using promises with type annotations :

function setup() {
  setTimeout(() => {
    console.log("I am setting up framework");
  }, 3000);
}

function executor() {
  setTimeout(() => {
    console.log("I am executing test cases in the framework !!!");
  }, 2000);
}

function tearDown() {
  setTimeout(() => {
    console.log("I am tearing down the framework !!!");
  }, 1000);
}



//=================================================================================================

//! SOLUTION 1: (HERE WE ARE PASSING UNDEFINED FROM RESOLVE METHODS TO NEXT THEN CHAIN)

function P1setup() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("I am setting up framework");
      resolve();
    }, 3000);
  });
}

function P1executor() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("I am executing test cases in the framework !!!");
      resolve();
    }, 2000);
  });
}

function P1tearDown() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("I am tearing down the framework !!!");
      resolve();
    }, 1000);
  });
}

P1setup()
  .then(() => P1executor())
  .then(P1tearDown);

//OR 

P1setup()
  .then(() => {
    return P1executor();
  })
  .then(P1tearDown);


//! SOLUTION 2: (HERE WE ARE PASSING A STRING FROM RESOLVE METHODS TO NEXT THEN CHAIN)

function P2setup() {
 return  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log("I am setting up framework");
      resolve("I am setup done");
    }, 3000);
  });
}

function Pexecutor() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log("I am executing test cases in the framework !!!");
      resolve("I am execution done");
    }, 2000);
  });
}

function PtearDown() {
 return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("I am tearing down the framework !!!");
      resolve();
    }, 1000);
  });
}

P2setup().then((value)=>{
    console.log(value);
    return Pexecutor();
}).then((value)=>{
    console.log(value);
    return PtearDown();
});

//! SOLUTION 3: (HERE WE ARE RETURNING A PROMISE FROM A FUNCTION PASSED IN RESOLVE METHODS TO NEXT THEN CHAIN)

function PPsetup() {
  return new Promise<() => Promise<() => Promise<void>>>((resolve, reject) => {
    setTimeout(() => {
      console.log("I am setting up framework");
      resolve(() => {
        return new Promise<() => Promise<void>>((resolve, reject) => {
          setTimeout(() => {
            console.log("I am executing test cases in the framework !!!");
            resolve(() => {
              return new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                  console.log("I am tearing down the framework !!!");
                  resolve();
                }, 1000);
              });
            });
          }, 2000);
        });
      });
    }, 3000);
  });
}

PPsetup()
  .then((val) => val())
  .then((val) => {
    return val();
  });

  //! SOLUTION 4: (HERE WE ARE PASSING A PROMISE DIRECTLY IN RESOLVE METHODS - as we know any value from resolve() is passed to then() automatically)

  function Psetup(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am setting up framework");
      resolve(
        new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            console.log("I am executing test cases in the framework !!!");
            resolve(
              new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                  console.log("I am tearing down the framework !!!");
                  resolve();
                }, 1000);
              })
            );
          }, 2000);
        })
      );
    }, 3000);
  });
}

//consumption:

Psetup().then(); 

//How does consumption work:

//! 🤖 RULE:
//! If you resolve a Promise with another Promise,
//! JavaScript waits for the inner Promise to finish first.

// STEP-BY-STEP EXECUTION 

// 1️⃣ Psetup() is called
//    - The outer Promise is CREATED
//    - Its executor runs immediately
//    - A 3-second timer is registered
//    - No inner Promises exist yet

// 2️⃣ After 3 seconds
//    - "I am setting up framework" is logged
//    - resolve(innerPromise1) is called
//    - JavaScript DOES NOT finish the outer Promise yet
//    - Instead, it starts waiting for innerPromise1

// 3️⃣ innerPromise1 starts executing
//    - A 2-second timer is registered

// 4️⃣ After total 5 seconds
//    - "I am executing test cases in the framework !!!" is logged
//    - innerPromise1 is resolved with innerPromise2
//    - JavaScript now waits for innerPromise2

// 5️⃣ innerPromise2 starts executing
//    - A 1-second timer is registered

// 6️⃣ After total 6 seconds
//    - "I am tearing down the framework !!!" is logged
//    - innerPromise2 resolves
//    - innerPromise1 completes
//    - outer Promise (Psetup) completes

// FINAL GUARANTEE:
// - Each Promise waits for the next one
// - Timers run sequentially, not in parallel
// - Even though teardown has the shortest delay,
//   it starts LAST, so it finishes LAST


