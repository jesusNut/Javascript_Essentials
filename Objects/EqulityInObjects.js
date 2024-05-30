//! *********** Understand how to compare two objects ****************

//? https://www.freecodecamp.org/news/javascript-comparison-operators-how-to-compare-objects-for-equality-in-js/
//? https://www.syncfusion.com/blogs/post/deep-compare-javascript-objects

//* =================================================================================

//! 🥺 The difference between primitive and non-primitive data types is that:

//! 👉 primitive data types (Number, String, Boolean) are compared by value.
//! 👉 non-primitive data types (e.g. Objects) are compared by reference.

let a = 22;
let b = 22;

console.log(a == b); //true(both a and b habe same values)
console.log(a === b); //true (both a and b have same values and same type)

let c = a;

console.log(c == b); //true(both c and b have same values)
console.log(c === b); //true (both c and b have same values and same type)

//==========================================================================

let obj1 = { name: "Dionysia", age: 29 };
let obj2 = { name: "Dionysia", age: 29 };

console.log(obj1 === obj2); // false (not the sme instance i.e. address)
console.log(obj1 == obj2); //  false (not the sme instance i.e. address)

let obj3 = { name: "Dionysia", age: 29 };

let obj4 = obj3;

console.log(obj3 === obj4); // true
console.log(obj3 == obj4); // true

console.log(`==========================================================`);

//* =================================================================================

//!👉 We should always compare the properties and values inside the objects and not their reference/address.

//* WAY 1::: USING JSON.stringify() - If KEYS are not in the same order in both objects, the result will be false.

//**** scenario 1 : data1 and data2 are identically same - means all properties/keys and values in same order

const data1 = {
  products: [
    {
      id: 101,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      reviews: [
        { userId: 1, rating: 5, comment: "Great!" },
        { userId: 2, rating: 4, comment: "Ok!" },
      ],
    },
    {
      id: 102,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 49.99,
      reviews: [],
    },
  ],
};

const data2 = {
  products: [
    {
      id: 101,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      reviews: [
        { userId: 1, rating: 5, comment: "Great!" },
        { userId: 2, rating: 4, comment: "Ok!" },
      ],
    },
    {
      id: 102,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 49.99,
      reviews: [],
    },
  ],
};

if (JSON.stringify(data1) === JSON.stringify(data2)) {
  console.log(`Object is identical`);
} else {
  console.log(`Object is not identical`);
}

//**** scenario 2 : data3 and data4 are identically NOT same - all keys are present but in different order

const data3 = {
  products: [
    {
      id: 101,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      reviews: [
        { userId: 2, rating: 4, comment: "Ok!" }, //! change is here!!
        { userId: 1, rating: 5, comment: "Great!" },
      ],
    },
    {
      id: 102,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 49.99,
      reviews: [],
    },
  ],
};

const data4 = {
  products: [
    {
      id: 101,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      reviews: [
        { userId: 1, rating: 5, comment: "Great!" },
        { userId: 2, rating: 4, comment: "Ok!" },
      ],
    },
    {
      id: 102,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 49.99,
      reviews: [],
    },
  ],
};

if (JSON.stringify(data3) === JSON.stringify(data4)) {
  console.log(`Object is identical`);
} else {
  console.log(`Object is not identical`);
}

//* =================================================================================

//* WAY 2::: USING Lodash

import _ from "lodash";

//! 👉👉👉 HOW LODASH WORKS::::

//! 👉 Object Property Order: Lodash’s _.isEqual ignores the order of properties in objects.
//! 👉 Array Element Order: Lodash’s _.isEqual respects the order of elements in arrays.
//! 👉 Deep Comparison: _.isEqual performs a recursive, deep comparison of objects and arrays.

//Example 1:

const data5 = {
  //id 102 first and id 101 later
  products: [
    {
      id: 102,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 49.99,
      reviews: [],
    },
    {
      id: 101,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      reviews: [
        { userId: 1, rating: 5, comment: "Great!" },
        { userId: 2, rating: 4, comment: "Ok!" },
      ],
    },
  ],
};

const data6 = {
  products: [
    {
      id: 101, //id 101 first and id 102 later
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      reviews: [
        { userId: 1, rating: 5, comment: "Great!" },
        { userId: 2, rating: 4, comment: "Ok!" },
      ],
    },
    {
      id: 102,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 49.99,
      reviews: [],
    },
  ],
};

if (_.isEqual(data5, data6)) console.log("Objects are same....");
else {
  console.log(`Objects are not same`);
}

//Example 2:

const a1 = {
  fname: "Ankur",
  lname: "Agarwalla",
  Address: [
    {
      city: "IndiaOccupiedLahore",
      Country: "UnitedIndia",
    },
    {
      city2: "California",
      Country2: "USA",
    },
  ],
};

const a2 = {
  lname: "Agarwalla",
  fname: "Ankur",
  Address: [
    {
      Country: "UnitedIndia",
      city: "IndiaOccupiedLahore",
    },
    {
      Country2: "USA",
      city2: "California",
    },
  ],
};

if (_.isEqual(a1, a2)) console.log("Objects are same....");
else {
  console.log(`Objects are not same`);
}

//* =================================================================================

//* WAY 3::: USING Custom Function

//? https://www.youtube.com/watch?v=VYmf4EWe4IQ&list=PLAjOh0819rC2rCAN1QjAk92sdm9cJsq7U&index=8 