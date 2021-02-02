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
console.log(yearsUntilRetirement(1970, 'Mike'));

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Michael', 'Steven', 'Peter']; //Only primitive values are immutable. Arrays are mutable. 
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]); //bracket syntax

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jonas'; // mutating the array, changing the element. 
console.log(friends[2]);
