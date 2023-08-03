//* DEMO FOR SWITCH

//! Switch cases use strict comparison (===).
//! The values must be of the same type to match.
//! The default case does not have to be the last case in a switch block.
//! NO usage of break statements, cause fall through issues.

let browser = "boombra";

switch (browser.toLowerCase()) {
  case "firefox":
    console.log("executing in firefox");
    break;

  default:
    console.log("stop the excution...Manager is here...");
    break;

  case "chrome":
    console.log("executing in chrome");
    break;
  case "safari":
    console.log("executing in safari");
    break;
  case "edge":
    console.log("executing in edge");
    break;
}
