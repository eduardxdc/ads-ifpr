/*
 * #04 - develop a program for reading two partial notes from a student. 
 * the message "approved", if the average achieved is greater than or equal to 7; 
 * the message "approved with distinction", if the average is 10; 
 * the message "failed" if the average is less than 7; 
*/
const readline = require('readline-sync');

console.log("enter your grade and find out if you've been approved or not!");
const noteOne = Number(readline.question("enter your first note: "));
const noteTwo = Number(readline.question("enter your second note: "));
const average = (noteOne + noteTwo) / 2;

if(average >= 70 && average < 100){
    console.log(`approved! your grade is ${average}`);
} else if(average >= 100){
    console.log(`approved with distinction! your grade is ${average}`);
} else if(average < 70){
    console.log(`failed! your grade is ${average}`);
} else if (isNaN(average)){
    console.log('please enter a valid note!')
}