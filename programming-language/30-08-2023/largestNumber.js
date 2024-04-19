// #01 - make a program that reads two numbers, check the larger one; 
const readline = require('readline-sync');

console.log('enter two numbers and check which one is larger!')
const numOne = Number(readline.question('enter the first number: '));
const numTwo = Number(readline.question('enter the second number: '));

if(numOne > numTwo){
    console.log(`${numOne} it's the highest number!`);
} else if (numTwo > numOne){
    console.log(`${numTwo} it's the highest number!`);
} else if (isNaN(numOne) || isNaN(numTwo)){
    console.log('please enter valid numbers!');
} else {
    console.log('the numbers are the same!');
}
