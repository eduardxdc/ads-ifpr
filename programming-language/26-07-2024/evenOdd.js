// #03 - selection structures;

const readline = require('readline-sync');

const evenOdd = Number(readline.question('find out if your number is even or odd: '));

if(isNaN(evenOdd)){
    console.log('enter a valid number!')
} else if(evenOdd %2 == 0) {
    console.log('your number is even!');
} else {
    console.log('your number is odd!');
}