//* Handing errors in Aync-Await

//! However, when the promise rejects, the await promise will throw an error
//! as if there were a throw statement.

function getOrder() {
  return new Promise((resolve, reject) => {
    resolve("User placed order of 78 lakhs...");
  });
}

function processOrder() {
  return new Promise((resolve, reject) => {
    reject("User is a alien...");
  });
}

function deleteOrderRecord() {
  return new Promise((resolve, reject) => {
    resolve("Order served to user..so deleting order record....");
  });
}

async function bankerJob() {
  //handling error : WAY 1 : using try-catch

  try {
    await getOrder();
    await processOrder();
    await deleteOrderRecord();
  } catch (err) {
    console.log("error is", err);
    throw new Error(err); //* if we dont throw this error, then line 37 and 38 will run.
    //* In order to stop that execution we need to thorw again and catch in .catch() method.
  }
}

bankerJob()
  .then(() => {
    console.log("all resolved..");
  })
  .catch((error) => console.log(error));

//handling error : WAY 2 : as we know async function mandatorily returns A promise

// bankerJob().catch((err) => {
//   console.log("rejecton found : ", err);
// });
