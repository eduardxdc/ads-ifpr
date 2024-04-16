// #4 - create a program that prompts the user to enter two integers and displays the sum of those numbers;
const readline = require('readline-sync');

console.log('make a sum of two numbers:');
const firstNum = Number(readline.question('enter a first number: '));
const secondNum = Number(readline.question('enter a second number: '));

const sum = firstNum + secondNum;
console.log('your sum is: ' + sum);
