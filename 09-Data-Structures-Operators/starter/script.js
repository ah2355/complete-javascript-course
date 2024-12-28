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
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
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