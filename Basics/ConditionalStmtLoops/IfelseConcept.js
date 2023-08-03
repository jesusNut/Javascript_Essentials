//* if, if-elseif, else

let budget = 50000;

if (budget > 6000) {
  console.log("will do dinner in JW Marriot");
} else if (budget > 4000) {
  console.log("will do dinner in dhaba");
} else {
  console.log("will do dinner in a temple");
}

//nested if-else

let day = "Friday";

if (day === "Monday") {
  console.log("will pretend to work today");
} else if (day === "Friday") {
  if (budget > 6000) {
    console.log("will party today bro!!!");
  } else {
    console.log("will eat peanuts this weekned");
  }
} else {
  console.log("let me think about future and take tension");
}
