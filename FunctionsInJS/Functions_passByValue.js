//* pass by value.

//! All In JavaScript, all function arguments are always passed by value.
//! It means that JavaScript COPIES the values of the variables into the function Parameters.

function increser(data) {
    data += 1;
  
    return data;
  }
  
  let num = 10;
  
  console.log(num); //value of num does not change.
  console.log(increser(num));
  
  //* Pass-by-value of reference values
  
  //! In case of objects. all function args are passed by value of their references.
  
  function incrementor(data) {
  
    data.age += 1;
    return data;
  }
  
  let person = {
    name: "John",
    age: 25,
  };
  
  const result = incrementor(person);
  
  console.log(result);
  console.log(person); //notice that age of original passed arg also changes
  