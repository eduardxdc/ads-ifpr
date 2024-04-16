// #1 - create a program that prompts the user to enter an integer and displays that number on the console;
const readline = require("readline-sync");

const inputUser = readline.question("enter an integer: ");

function isInteger(value) {
  return parseInt(value) === parseFloat(value) && !isNaN(value);
}

if (isInteger(inputUser)) {
  console.log(`your number is: ${inputUser}`);
} else {
  console.log("is not a integer!");
}
