class Mobile {
  girlfriendNo = 99988877766;

  //! PUBLIC INSTANCE METHOD : can be accessed outside the class scope.

  makeCallToGirlfriend() {
    console.log("calling wife..");
  }

  //! PRIVATE INSTANCE METHOD : can't be accessed outside the class scope. use '#' prefix

  #openBankInfo() {
    console.log("you are a beggar...");
  }

  //? A public instance method calling a private instance method.

  getOpenBankInfoImpl() {
    this.#openBankInfo();
  }
}

const myMobile1 = new Mobile();

//myMobile1.makeCallToGirlfriend();
//myMobile1.#openBankInfo(); //gives error as PRIVATE INSTANCE METHOD : can't be accessed outside the class scope.
//myMobile1.getOpenBankInfoImpl();
