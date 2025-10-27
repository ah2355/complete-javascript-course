'use strict';

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str){
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
};
// Higher Order Functions
const transformer = function(str, fn){
    console.log(`Originial string: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed By: ${fn.name}`);
}

console.log(transformer('Ronaldo is the best', upperFirstWord));
console.log(transformer('Messi is the best', oneWord));

const high5 = function(){
    console.log('👋');
}
document.body.addEventListener('click', high5);
['Roy', 'Keane', 'Julio'].forEach(high5);

//Function Returning Function
const greet = function(greeting){
    return function(name){
        console.log(`${greeting}, ${name}`);
    }
}

const greeter = greet('Hey');
greeter('Liam');
greeter('MJ');

const greetAr = greeting => name => {
    console.log(`${greeting}, ${name}`);
}
greetAr('Hi')('Kiki');

const lufth = {
    airline: 'Lufthansa',
    iataCode: 'LH' ,
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}, ${name}`});
    }
}

lufth.book(239, 'Jason');
lufth.book(666, 'Robbie');
console.log(lufth);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}
//Call Method
const book = lufth.book;
book.call(eurowings, 23, "Ron");
console.log(eurowings);
book.call(lufth, 239, "MJ");
console.log(lufth);

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings:[]
}
book.call(swiss, 67, "Liam");
console.log(swiss);

//Apply Method
const flightData = [67, 'George'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind Method