'use strict';
// Selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Rolling Dice functionality
btnRoll.addEventListener('click', function (){
    if(playing){
        //1. Generating a random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    //3. Check for rolled 1; if trure, switch to next player
    if(dice!== 1){
        //Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    }else {
        //switch to next player
        switchPlayer();

    }
    }
})

btnHold.addEventListener('click', function(){
    if(playing){
        //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. Check if the player's score is >= 100
    //Finish the game
    if(scores[activePlayer]>=20){
        
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
        diceEl.classList.add('hidden');

    }
    else{

    //3. Switch Player
    switchPlayer();
    }
    }
})