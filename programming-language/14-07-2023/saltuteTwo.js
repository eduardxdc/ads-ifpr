// #5 - create a program that prompts the user to enter their name and age, and displays a greeting message based on that data;
const readline = require('readline-sync');

const name = readline.question("what's your name?: ");
const age = readline.question('and how old are you?: ');

if(!isNaN(age) && !Number(name)){
    console.log(`hi ${name}, how are you? so you mean you're ${age} years old? lots of dough!`);
} else {
    console.log('your details are incorrect!');
}