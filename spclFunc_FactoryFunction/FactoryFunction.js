
  //? https://www.javascripttutorial.net/javascript-factory-functions/


//! 👨🏻👨🏻👨🏻 FACTORY FUNCTION 👨🏻👨🏻👨🏻 :

//!  A factory function is a function that returns a new object. 
//! 👉🏼👉🏼 No need to use 'new' keyword as used in Conrsuctor functions or in ES6 classes.🤏🏼🤏🏼

function createPerson(firstName, lastName) {
    //returning an object
    return {
      firstName: firstName,
      lastName: lastName,
      getFullName() {
        return this.firstName + ' ' + this.lastName;
      },
    };
  }

  const person1 = createPerson('Abhishek','Ameer');
  console.log(person1.getFullName()); //Abhishek Ameer
  let person2 = createPerson('Jane', 'Doe');
  console.log(person2.getFullName()); //Jane Doe

