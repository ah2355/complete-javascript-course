'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if(hasDriversLicense) console.log("I can drive");

function logger(){
    console.log("My name is Jonas");
}

logger();

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));

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

//Challenge 1
const calcAverage = (score1,score2,score3) =>  {
    return (score1+score2+score3) / 3
};

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);

const scoreDolphins2 = calcAverage(85,54,41);
const scoreKoalas2 = calcAverage(23,34
,27);


function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins>avgKoalas)
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas>avgDolphins)
    {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    }
    else
    {
        console.log("No teams win")
    }
}

checkWinner(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins2,scoreKoalas2);

