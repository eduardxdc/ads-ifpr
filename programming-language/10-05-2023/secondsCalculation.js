/**
 * Write a program that stores a time (hour, minute and second) in variables,
 * then determines and displays the number of seconds that have passed since 0:00:00
 * and the number of seconds left until midnight;
 */

const readline = require("readline-sync");

console.log(
  "calculate how many seconds have passed and how many are left until the end of the day"
);

console.log("enter the hours: ");
const hours = Number(readline.question());

console.log("enter the minutes: ");
const minutes = Number(readline.question());

console.log("enter the seconds: ");
const seconds = Number(readline.question());

const past = seconds + minutes * 60 + hours * 3600;
const missing = 86400 - past;

console.log(`it's been ${past} seconds since the start of the day`);
console.log(`${missing} seconds left to end the day`);
