//* Inheritence using ES6 classes using extends keyword


class Mobile {
  num = 9988776655;
  static ram = "4GB";

  makecall() {
    console.log(`calling on ${this.num}`);
  }

  makeSMS() {
    console.log(`SMS on ${this.num}`);
  }

  static getRamDetails(){

    console.log('Ram in this mobile contains..'+this.ram)
  }
}

class Oneplus extends Mobile {}

const oplus = new Oneplus();

//! INSTANCE MEMBERS OF BASE CLASS CAN BE ACCESSED BY CHILD CLASS USING CHILD CLASS OBJECTS.

console.log(oplus.num); //9988776655
oplus.makeSMS(); //SMS on 9988776655
oplus.makecall(); //calling on 9988776655

//! STATIC MEMBERS of BASE CLASS CAN BE ACCESSED USING CHILD CLASSNAME [Not by child class objects].

console.log(Oneplus.ram) //4GB
Oneplus.getRamDetails() //Ram in this mobile contains..4GB    
