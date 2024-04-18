/* #03 - Develop a program that asks in which shift the student studies, ask to type: 
* M-morning; 
* V-afternoon; 
* N-nocturnal; 
* Print the message "Good morning!", "Good afternoon!" or "Good evening!" or "Invalid value!", as appropriate. 
*/
const readline = require('readline-sync');


const shifts = readline.question('in which shift you study, choose from the options: "M" for morning, "V" for afternoon and "N" for nocturnal: ');

if(shifts.toUpperCase() === "M"){
    console.log('good morning to you who study in the morning!');
} else if(shifts.toUpperCase() === "V"){
    console.log('good afternoon to you who study in the afternoon!');
} else if(shifts.toUpperCase() === "N"){
    console.log('good evening to you who study at night!');
} else {
    console.log('please enter a valid character!')
}