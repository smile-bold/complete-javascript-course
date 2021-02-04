'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest)
    hasDriversLicense = true;
if (hasDriversLicense) console.log(' I can drive :D');


// const private = 534;

function logger() {
    console.log("My name is Jonas");
}
// calling / running / invoking function
logger();
/*
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
// function decleration 
function calcAge1(birthYear) {
    return 2037 - birthYear;

} 
const age1 = calcAge1(1991);
console.log(age1);
// function expression
/* const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2); */

// Arrow function // one execute line no 'this' keyword
birthYear => 2037 - birthYear;
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

/* const yearsUntilRetirement = (birthYear, firstName) => { //one parameter, multiple execution lines
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));  */
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) { //one parameter, multiple execution lines
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement >= 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
        console.log(`${firstName} retires in ${retirement} years`); // if a return statement is executed than a function is exited, called unreachable code. Command D to select all entities of same name. 
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike')); */

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Michael', 'Steven', 'Peter']; //Only primitive values are immutable. Arrays are mutable. 
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]); //bracket syntax

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jonas'; // mutating the array, changing the element. 
console.log(friends[2]);

const firstName = 'Jonas';
/* const jonas = new Array(firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends);
console.log(jonas); */

// Exercise 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = new Array(1990, 1967, 2002, 2010, 2018);

calcAge(years); // Cant pass arrays into an function, expressions can't do that. 
// can pass functions into arrays. 

console.log(calcAge(years));
const age1 = calcAge(years[0]);
console.log(age1, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const newLength = friends.push('Jay'); // continuation of arrays using methods
console.log(friends);
//Add elements 
console.log(newLength);

friends.unshift('John');
console.log(friends);
// Remove elements 
const popped = friends.pop(); // Last
console.log(popped);

friends.shift();
console.log(friends);
// find index of element
console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.group('You have a friend called Peter');
}
// arrays for more ordered data, while objects for more unstructured data
function getSummary() {
    const summary = console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a driver's license`);
    const summary2 = console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has no driver's license`);
    if (jonas.hasDriversLicense === true) {
        return summary;
    }
    else {
        return summary2;
    }
}

/* const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]; */

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,


    /* calcAge: function (birthYear) {
        return 2037 - birthYear; // doesn't account for changing
    } */
    /* calcAge: function () {
        return 2037 - this.birthYear; // this points to a certain object, so you can a find a specific property 
    } */
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }, // can create new properties with this keyword
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(jonas);
console.log(jonas.lastName); // dot notation doesn't allow calculations of expressions
console.log(jonas["lastName"]); //square brackets allow any expressions to calculated 

const nameKey = "Name";
console.log(jonas['first' + nameKey]);
// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");
// console.log(jonas[interestedIn]); //undefined is what happens when we access an ojbect on a property that doesn't exist. 

/* if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
} */

jonas.location = "Portugal"; // add object property
jonas['twitter'] = '@jonasschmedtman'; // add object property with brackets
console.log(jonas);

// Challenge 
// "Jonas has 3 friends, and his best friend is called Michael"
const friendsAmount = jonas.friends.length;
const michael = jonas.friends[0];
console.log(`${firstName} has ${friendsAmount} friends, and his best friend is named ${michael}`); //Can put dot notation syntax within template literals

console.log(jonas.calcAge());

// Challenge 
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());

console.log('Lifting weights repetition 1');

// for loops keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repertition ${rep}`);
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
// console.log(jonas[0]);
// ...
// console.log(jonas[4]);
const types = [];
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);
    // Filling types array

    //types[i] = typeof jonasArray[i] One way of creating an array within a for loop
    // types.push(typeof jonasArray[i]); // other way of creating an array in a for loop
}
console.log(types);

const years2 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years2.length; i++) {
    ages2.push(2037 - years2[i]);
}

console.log(ages2);

// continue and break 
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'number') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
/* commented for clarity
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]; */
// looping backwards 
// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`${exercise}: Lifting weight repetition ${rep}`);
    }

}







