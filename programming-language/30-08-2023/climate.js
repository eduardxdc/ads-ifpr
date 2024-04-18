/*
 * #02 - Develop a program that displays information about the type of climate, according to the 
 * Following conditions: 
 * If the temperature is up to 16 degrees, the weather is cold; 
 * If the temperature is between 16 and 22 degrees, the weather is pleasant; 
 * If the temperature is between 22 and 32 degrees, the weather is hot; 
 * If the temperature is above 32 degrees, the weather is too hot. 
*/
const readline = require('readline-sync');

const climate = Number(readline.question('enter the temperature: '));

if(climate <= 16){
    console.log('the weather is cold!');
} else if(climate > 16 && climate <= 22){
    console.log('the weather is pleasant!');
} else if(climate > 22 && climate <= 32){
    console.log('the weather is hot!');
} else if(climate > 32){
    console.log('the weather is too hot!')
} else if(isNaN(climate)){
    console.log('please enter a valid temperature!')
}