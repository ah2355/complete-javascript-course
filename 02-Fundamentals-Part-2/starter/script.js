'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if(hasDriversLicense) console.log("I can drive");

function logger(){
    console.log("My name is Jonas");
}

logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5,0));

//Function Declaration
function calcAge1(birthYear){
   return 2037 - birthYear;
}

const age1 = calcAge1(1995);
console.log(age1);
//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(2004);
console.log(age1,age2);

//Arrow function
const calcAge3 = birthYear =>  2037 - birthYear;

const age3 = calcAge3(2010);
//Need to use return when multiple line of codes
const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} + will retire in ${retirement} years`;
}