//* Set :
//! ES6 Set stores A COLLECTION OF UNIQUE VALUES OF ANY TYPE.
//! No duplicates allowed.[Like JAVA]
//! Insertion order is preserved.[In Java, use - LinkedHashSet]
//! CANNOT USE INDEXES TO ACCESS ELEMENTS UNLIKE ARRAYS.

//? https://www.javascripttutorial.net/es6/javascript-set/

let setData1 = new Set();

console.log(setData1); //Set(0) {}

//* constructor : set() also accepts any iterable object as param.

let myArr = [1, 2, 3, 4, 5, 2, 3, 4, 1, 2, 3, 4, 5];

let setData2 = new Set(myArr);

console.log(setData2); //Set(5) { 1, 2, 3, 4, 5 }

//* useful methods-

//* ADD - add(value) :appends a new element with a specified single value to the set.
//* Returns a new set with added value.
//* add(value) method is chainable.

console.log(setData2.add("abc")); //Set(6) { 1, 2, 3, 4, 5, 'abc' }

console.log(setData2); //Set(6) { 1, 2, 3, 4, 5, 'abc' }

//* DELETE - delete(value) : deletes a single element specified by the value.
//* Returns true or false.

console.log(setData2.delete("abc")); //delete() returns true as 'abc' is present in set.

console.log(setData2); //Set(5) { 1, 2, 3, 4, 5 }

//trying to delete something that is not present - nothing happens.

console.log(setData2.delete("foo")); //delete() returns false

console.log(setData2); //Set(5) { 1, 2, 3, 4, 5 }

//* CLEAR : clears the entire set.
//* Returns: void

setData2.clear();

console.log(setData2); //Set(0) {}

//* SIZE - property : get size of a set

let setData3 = new Set([11, 22, 33, 44, 55, 11, 22, 33]);

console.log(setData3.size); //5

//! add(val) method is chainable

setData3.add(66).add(77).add(88);

console.log(setData3); //Set(8) { 11, 22, 33, 44, 55, 66, 77, 88 }

//* HAS : has(val) method : use to check if a value is present in set.

//* Returns :The has() method returns true if the set contains the element, otherwise, it returns false.

console.log(setData3.has(99)); //false
console.log(setData3.has(77)); //true

//* 💀 Adding DUPLICATE values in a set. 💀

//! When you try to add a value that’s already inside, it simply does not add it again.
//!🫣🫣🫣 No error, no exception — it just ignores it🫣🫣🫣


//* VALUES, KEYS AND ENTRIES

//* values() return : iterable of values
//* keys() return iterable of values.
//* entries() return iterable of [value, value]

//! KEYS and ENTRIES in case of ARRAY will hold:
//! iterable of indexes and iterable of [index, value] respectively.
//! NOTE THE DIFFERENCE.

//* ITERATING SETS

//! 💀 You cannot use a normal for-loop directly on a Set because Set is not index-based.

let myset = new Set();

myset.add(10);
myset.add(20);
myset.add(30);
myset.add(40);
myset.add(50);
myset.add(40);


//Way 1: 

for (let item of myset) {
  console.log(item);
}

//Way 2:
myset.forEach(item=> console.log(item));


