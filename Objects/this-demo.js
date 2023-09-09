
/**================================================================================================
 *!      UNDERSTANDING THIS KEYWORD
 *================================================================================================**/

//? //? https://www.javascripttutorial.net/javascript-this/

//* The this references the object of which the function is a property.

/**===================================================
//!    🐞🐞🐞 How not to use it? 🐞🐞🐞
 *====================================================**/

//? https://www.freecodecamp.org/news/the-this-keyword-in-javascript
//? https://stackoverflow.com/questions/4616202/self-references-in-object-literals-initializers

//todo  AN OBJECT'S this IS ONLY AVAILABLE TO METHODS OF SAID OBJECT, AND NO OTHER KINDS OF PROPERTIES.

let someObject = {
    firstname: 'abhishek',
    lastname: "bhardwaj",
    email: this.firstname + "." + this.lastname + "@somemail.com"
}

console.log(someObject.firstname) //abhishek
console.log(someObject.lastname) //bhardwaj
console.log(someObject.email) //undefined.undefined@somemail.com

/**=====================================================
//*   🌏 Usage of this keyword inside Object Method.🌏
 *======================================================**/

let correctObject = {
    firstname: 'abhishek',
    lastname: "bhardwaj",
    email: function () {
        return this.firstname + "." + this.lastname + "@somemail.com"
    }
}

console.log(correctObject.firstname)
console.log(correctObject.lastname)
console.log(correctObject.email())


/**=====================================================
//*   🌏 Usage of this keyword inside Method 🌏
 *======================================================**/

function printDetails(obj) {
    return `This show is ${obj.showName} on channel ${obj.channelName}`
}

let object1 = {
    showName: "Shararat",
    channelName:"Star plus"
}

let object2 = {
    showName: "Meri Sautan ke pati ki biwi",
    channelName:"Ekta Kapoor Productions"
}

console.log(printDetails(object1))
console.log(printDetails(object2))