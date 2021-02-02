true;
console.log(true);
let javascriptIsFun = true;
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = "yes!";
const now = 2037;
console.log(typeof javascriptIsFun);
const ageJonas = now - 1991;
console.log(ageJonas);
const ageSarah = now - 2018;
console.log(ageSarah, ageJonas);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// Assignment Operators
// let x = 10 + 5; //15 
// x += 10; // x = x + 10
// x++;
// x--;
// console.log(x);
// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);
const firstName = "Jonas";
const job = "teacher";
const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " " + 'years old ' + job + "!";
// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!'`
// console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {                   //control structure 
// console.log("Sarah can start driving license");
// } else {
//  const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(String(23), 23);
// type coercion
console.log('I am ' + 23 + ' years old'); // converts all to numbers
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' > '18');
// 5 falsy values: 0, '', undefined, null, NaN * when converted to boolean become false;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED")
}

// const age = 18;
// if (age === 18) console.log("You just became an adult");
// loose equality operator does type coercion ==
// strict equality operator doesn't do type coercion ===
/* const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof (favourite));
if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?"); */

const hasDriversLicense = true; // A 
const hasGoodVision = true;  // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
const isTired = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
    case 'friday':
        console.log('Record videos');
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}
else if (day === 'tuesday') {
    console.log('Prepare theory videos');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
}
else if (day === 'friday') {
    console.log('Record videos')
}

else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
}
else {
    (console.log('Not a valid day'));
}

const age = 23;
age >= 18 ? console.log(' like to drink wine') :
    console.log(' like to drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
let drink2;
if (age >= 18) {
    drink2 = 'wine ';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);