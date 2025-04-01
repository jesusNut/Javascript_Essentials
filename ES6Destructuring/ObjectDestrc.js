//* Object destructuring

//? https://www.youtube.com/watch?v=31vnMUoVSvM
//? https://www.youtube.com/watch?v=XIYJhGEmsYc&list=PL699Xf-_ilW6kwrOg4Wm87ZJ-idHubBrG&index=15
//? 

//=======================================================================
//! Syntax: Uses curly braces {} to extract values from an object.
//=======================================================================

let book = {  
  name: "the great tester",
  page: 500,
  price: "$999.99",
  publication: "Tata Mcgrow Hills",
};

//traditional way of accessing properties of an object.

let bookName = book["name"];
let pages = book.page;
let bookPrice = book.price;
let bookPub = book.publication;

console.log(`${bookName}---${pages}---${bookPrice}---${bookPub}`);

//the great tester---500---$999.99---Tata Mcgrow Hills

//* The above code can now be accomplished using ARRAY DESTRUCTURING

//Example 1:

// let { name, page, price, publication } = book;

//!Here we have to use-> 'name of the variable in destructuring array' = 'key in object'

//console.log(`${name}---${page}---${price}---${publication}`);

//the great tester---500---$999.99---Tata Mcgrow Hills

//Example 2:

//* Now, I want page in line 26 as 'bookPageCount' and price as 'bookPriceToday', then

// let { name, page: bookPageCount, price: bookPriceToday, publication } = book;

// console.log(`${name}---${bookPageCount}---${bookPriceToday}---${publication}`);

//the great tester---500---$999.99---Tata Mcgrow Hills

//Example 3: with nested objects

let car = {
  carname: "Rolls Royace",
  tyres: 5,
  price: "$9999999",
  company: "Munna Motor Garage",
  dealership: {
    dealerName: "Munna Mechanic",
    dealerAdress: "Bihar",
  },
};

let {
  carname,
  tyres,
  price,
  company,
  dealership: { dealerName, dealerAdress },
} = car;

console.log(carname);
console.log(tyres);
console.log(price);
console.log(company);
console.log(dealership); //! **** this gives error ****
console.log(dealerName);
console.log(dealerAdress);
