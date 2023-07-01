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

//Creating Objects
const me = {
    firstName: "Afif",
    lastName :"Haque",
    birthYear: 2004,
    job: "Student",
    friends: ["Ifte", "Alvin", "Ansh", "Kevin"],
    hasDriversLicense: false,
    // calcAge: function(birthYear){
    //     return 2023 - birthYear;
    // } 

    // calcAge: function ()
    // {
    //     // console.log(this.birthYear);
    //     return 2023 - this.birthYear;
    // }

    calcAge: function ()
    {
        this.age = 2023 - this.birthYear;
        return this.age;
    },


    getSummary : function()
    {
        return (`${this.firstName} is a ${this.calcAge()} year old  ${this.job}, and he ${this.hasDriversLicense ? " has a" : "doesn't have a"} driver's license `);
    }
};
console.log(me);
//dot notation
console.log(me.lastName);
//bracket notation
console.log(me['lastName']);

const nameKey = 'Name';
console.log(me['first' + nameKey]);
console.log(me['last' + nameKey]);

//Use bracket notation in a case like this
const interestedIn= prompt("What do you want to know about me? Choose between firstName, lastName, birthYear, job, and friends");
console.log(me[interestedIn]);
//side note: if a value returns undefined it is considered as flase else true
if (me[interestedIn])
{
    console.log(me[interestedIn]);
}
else{
    console.log("Wrong request Choose between firstName, lastName, birthYear, job, and friends");
}
//assigning new elements to the 
me.location = "US";
me["twitter"] = "@afif_polo";
console.log(me);

console.log(me.firstName + " has " + me.friends.length + " friends, and his best friend is called " + me.friends[0]);

console.log(me.calcAge());
// console.log(me["calcAge"](2004))
console.log(me.age);

console.log(me.getSummary());

//Challenge 3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function()
    {
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function()
    {
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
 
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}
