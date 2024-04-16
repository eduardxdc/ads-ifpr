// #3 - Create a program that prompts the user to type in three floating numbers and displays the average between those three numbers;
const readline = require('readline-sync');

console.log('averaging 3 floating numbers!');

const firstFloat = parseFloat(readline.question('enter your first floating number: '));
const secondFloat = parseFloat(readline.question('enter your second floating number: '));
const thirdFloat = parseFloat(readline.question('enter your third floating number: '));

if(!isNaN(firstFloat) && !isNaN(secondFloat) && !isNaN(thirdFloat)){
    const result = (firstFloat + secondFloat + thirdFloat) / 3;
    console.log('your average is: ' + result.toFixed(2));
} else {
    console.log('please enter valid numbers!');
}