// #2 - Create a program that prompts the user to type in their name and displays a greeting with the name they entered;
const readline = require('readline-sync');

const name = readline.question('enter your name: ');

console.log(`Hey ${name}, how's it going? Welcome to my code!`);