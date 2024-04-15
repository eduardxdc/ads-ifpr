// #3 - Create a program that prompts the user to type in three floating numbers and displays the average between those three numbers;

const readline = require('readline-sync');

console.log('averaging 3 floating numbers!');

console.log('enter your first floating number:');
const firstFloat = parseFloat(readline.question());
console.log('enter your second floating number:');
const secondFloat = parseFloat(readline.question());
console.log('enter your third floating number:');
const thirdFloat = parseFloat(readline.question());

const result = (firstFloat + secondFloat + thirdFloat) / 3;

console.log('your average is: ' + result.toFixed(2));