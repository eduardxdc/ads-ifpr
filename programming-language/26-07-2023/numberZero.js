// #02 - selection structures; 
const readline = require('readline-sync');

const zero = Number(readline.question('find out if your number is greater or less than zero: '));

if(isNaN(zero)){
    console.log('enter a valid number!');
} else if (zero < 0) {
    console.log(`${zero} is less than zero!`);
} else if (zero > 0) {
    console.log(`${zero} is greater than zero!`);
} else {
    console.log('this number is zero!');
}