'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //Function
  order (starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza (mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    //Making an array look like integers
    console.log(...otherIngredients);
  }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructring Arrays
const [x,y,z] = arr;
console.log(x,y,z);

const [first, , second] = restaurant.categories;
console.log(first, second);

console.log('Creating a new array with destructuring');
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

console.log('Swapping variables');
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

//Destructing Objects
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//Changing the name of the variables
const {name: resqaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(resqaurantName, hours, tags);

//Spread Operator 
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

//Rest Operator
//Always need to be the last element
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);
//2) Functions
const add = function(...numbers){
let sum = 0;
for(let i =0; i < numbers.length; i++){
  sum += numbers[i];
}
console.log(sum);
};

add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7, 8);
add(2, 3, 4, 5, 6, 7, 8, 9, 10);

const no = [23, 5, 7];
add(...no);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

const rest1 = {name : 'Caprri', numGuests : 0};

const rest2 = {name : 'Caprri', owner : 'Giovanni Rossi'};

//OR operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//Similarly 
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish assignment Operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND Operator 
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1, rest2);

//Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1) Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

//2) The first player in any player array is the goalkeeper and the others are field players. 
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and 
// one array ('fieldPlayers') with all the remaining 10 field players (REST)
const [gk, ...feildPlayers] = players1;

//3) Create an array 'allPlayers' containing all players of both teams (22 players) (SPREAD)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4)During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') 
// containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5)Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { odds : {team1, x : draw, team2} } = game;

//6)Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and 
// prints each of them to the console, along with the number of goals that were scored in total 
// (number of player names passed in)
const printGoals = function(...players){
  console.log(players);
  console.log(`${players.length} goals were scored`);
}

//7 The team with the lower odd is more likely to win. Print to the console which team is more likely to win,
// WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log('Team 1 is more likely to win'); 

//Loopig Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu){
  console.log(item);
}

for(const [i, el] of menu.entries()){
  console.log(`${i + 1} : ${el}`);
}

console.log([...menu.entries()]);

//Optional Chaining
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods

console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

//Arrays
const users = [{
  name : 
'Robert',
  email : 'roberto1417@hotmail.com'
}];

//if the user array has a user in first index then print the name
//or print 'User array empty'
console.log(users[0]?.name ?? 'User array empty');

if(users.length > 0){
  console.log(users[0].name);
}else{
  console.log('User array empty');
}

//Looping Objects : Object Keys, Values, and Entries

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of properties){
  openStr += `${day}, `;
}

console.log(openStr);

//Property Values
 const values = Object.values(openingHours);
 console.log(values);

//Entire Entries
 const entries = Object.entries(openingHours)
 console.log(entries);

 //[key, value] but we are destructuring it to be [day, {open, close}]
 for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
 }

 //Coding Challenge #2
 for(const [i, player] of game.scored.entries()){
   console.log(`Goal ${i + 1}: ${player}`);
 }

 let avg = 0;
 for(const odd of Object.values(game.odds)){
   avg += odd;
 }
  avg /= Object.values(game.odds).length;
  console.log(avg);

  for (const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `vicotry ${game[team]}`;
    console.log(`Odd of ${odd}`);
  }