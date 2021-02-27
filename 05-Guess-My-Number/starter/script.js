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
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = "No number!"; 
    }
} ); // When click happens; the browser will do what is defined. 