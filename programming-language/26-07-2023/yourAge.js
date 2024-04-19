// #01 - selection structures; 
const readline = require('readline-sync');

const age = Number(readline.question('enter your age: '));

if(!isNaN(age) ){
    console.log(`your age is ${age}`)
} else {
    console.log('enter a valid age!');
} 

if(age >= 18){
    console.log('you are of legal age');
} else {
    console.log('you are underage!');
}