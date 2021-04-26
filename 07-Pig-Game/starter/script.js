'use strict';

const score0El = document.querySelector('#score--0'); // # for ID element 
const score1El = document.getElementById('score--1'); 
const current0E1 = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');  // or can use getELementByID instead of querySelector
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0E1 = document.querySelector('.player--1');
const player1E1 = document.querySelector('.player--0');
let scores, currentScore, activePlayer, playing; 


// Starting conditions
const init = function() {

currentScore = 0;
activePlayer = 0;
scores = [0, 0]; 
playing = true; 

    score0E1.textContent = 0;
    score1E1.textContent = 0;
    current0E1.textContent = 0;
    current1E1.textContent = 0; 
    diceEl.classList.add('hidden');
    player0E1.classList.remove('player--winner');
    player1E1.classList.remove('player--winner');
    player0E1.classList.add('player--active');
    player1E1.classList.remove('player--active');
};
init();
const switchPlayer = function() { 
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0; 
        currentScore = 0;
        player0E1.classList.toggle('player--active');
        player1E1.classList.toggle('player--active');

};

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
    // 1. Gnerating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; 


    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`
        ).textContent = currentScore;
    } else { 
        // Switch to next player
        switchPlayer(); 
    } 
    }
});

 btnHold.addEventListener('click', function() {
     console.log('Hold button');
     // 1. Add current score to active player's score
     scores[activePlayer] += currentScore; 
     // scores[1] = scores[1] + currentScore
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
     
     // 2. Check if player's score is >= 100
     if (scores[activePlayer] >= 20) {
     // Finish the game 
     playing = false; 
     diceE1.classList.add('hidden');
     document
     .querySelector(`.player--${activePlayer}`).classList.add('player--winner')
     .classList.add('player--winner');
     document
     .querySelector(`.player--${activePlayer}`)
     .classList.remove('player--active');
     }
     else {
         switchPlayer();
     }
     // Switch to the next player 
 });
 btnNew.addEventListener('click', init); 




