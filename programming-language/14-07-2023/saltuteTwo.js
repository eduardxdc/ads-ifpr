// #5 - create a program that prompts the user to enter their name and age, and displays a greeting message based on that data;

const readline = require('readline-sync');

const name = readline.question('qual o seu nome?: ');
const age = readline.question('e qual a sua idade?: ');

console.log(`Olá ${name}, tudo bem? então quer dizer que você tem ${age}? Muito massa!`);
