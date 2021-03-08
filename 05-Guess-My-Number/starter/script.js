'use strict';
/*
console.log(document.querySelector('.message').textContent); //element selection method
document.querySelector('.message').textContent = "Correct Number!"; 
document.querySelector('.guess').value = 23; 
document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 10; 
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; //remember input fields require values. */


// on document object. Document is the first gate to the DOM. 
// Document object model / DOM : Structured representation of html document allows javascript 
// to access html elements and styles to manipulate them. 
// THE DOM is not part of Javascript. 
// THE DOM method and properties are WEB APIS / libraries. 
// THE DOM outline is made in "nodes"
// add eventlistener is a special function that requirements an argument or this in case a function

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; 
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        //document.querySelector('.message').textContent = "No number!";
        //refactored into 
        displayMessage("No number!"); // if there is no guess then no number message
    }
    else if (guess === secretNumber) {
        displayMessage("correct number!")
        document.querySelector('.number').textContent = secretNumber; // if guess is correct then correct message
    
    document.querySelector('body').style.
    backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; 
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }}
    else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? ' Too high' : 'To low!');
            score--;
            document.querySelector('.score').textContent = score; }
            else {
                displayMessage('you lost the game!');
                document.querySelector('.score').textContent = 0; } }

    });
    // This is the code I had before refactoring using the DRY principle. 
     /* else if (guess > secretNumber) { //nested if else conditionals // When guess is too high
        if (score > 1) {
        document.querySelector('.message').textContent = "guess is too high!";
        score--;
        document.querySelector('.score').textContent = score; }
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0; } }
    
    else if (guess < secretNumber) { // When guess is too low
        document.querySelector('.message').textContent = "guess is too low!";
        score--;
        document.querySelector('.score').textContent = score; }
        else {
        document.querySelector('.message').textContent = "You lost the game!";
        document.querySelector('.score').textContent = 0; } */ 

// coding challenge
    document.querySelector('.again').addEventListener('click', function() {
     secretNumber = Math.trunc(Math.random() * 20) + 1;
     score = 20; 
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.
    backgroundColor = '#222';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';


}
// When click happens; the browser will do what is defined. 

// Coding Challenge #1
/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how: 

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables. 
3. Restore the initial conditions of the message, number, score and guess input field.
4. Also restore the original background color (#222) and number width (15rem)
*/)
