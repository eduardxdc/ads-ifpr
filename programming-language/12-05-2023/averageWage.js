/**
 * Create a program that calculates the average salary of a company,
 * asking the user for the employee schedule and salaries,
 * and returning the average salary.
 */

const readline = require('readline-sync');

console.log('calculate the average salary of 5 salaries');

console.log('enter the first salary: ');
const wageOne = Number(readline.question());

console.log('enter the second salary: ');
const wageTwo = Number(readline.question());

console.log('enter the third salary: ');
const wageThree = Number(readline.question());

console.log('enter the fourth salary: ');
const wageFour = Number(readline.question());

console.log('enter the fifth salary: ');
const wageFive = Number(readline.question());

const average = (wageOne + wageTwo + wageThree + wageFour + wageFive) / 5;
console.log('the average salary is: ' + average);