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
    if(avgDolphins>= 2 * avgKoalas)
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas>= 2* avgDolphins)
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

//Intro to Arrays

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

/**
 * OR
 * const years = new Array(1991,1998,2010,2023);
 */
console.log(friends.length);

const firstName = 'Afif';
const afif = [firstName, 'Haque', 2023 - 2004, friends];

console.log(afif);
//Add elements at the end of the array - .push()
friends.push('Jay');
console.log(friends);
//Add elements at the first place of the array - .unshift()
friends.unshift('John');
console.log(friends);
//Remove the last elements - .pop()
const popped = friends.pop();
console.log(`The popped element from the friends array was ${popped}`);
console.log(friends);
//Remove the first element in the array - .shift()
friends.shift()
console.log(friends);

console.log(friends.indexOf('Steven'));

//Only works for ES6 version of JS
//Returns a boolean response wether a element in the array is present or not- .includes()
console.log(friends.includes('Steven'));

//Coding challenge 2
const calcTip = (bill) => {
   return bill >=50 && bill <=300 ? bill * .15 : bill * .20;
}

const bills = [125,555,44];
console.log(calcTip(bills[1]));
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log("The total bills are " +   total);

