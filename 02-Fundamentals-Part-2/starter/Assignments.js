function describeCountry(country, population, capitalCity) {
    console.log(
        `${country} has ${population} people and its capital city is ${capitalCity}`);
}
describeCountry("USA", 3000000, "Washington D.C.");

// function declaration 
function percent1(population) {
    return 79000000000.00 / (population * 100);
}
const usapop = 3000000.00;
const usa = percent1(usapop);
// console.log(number);
const chinapop = 1441000000.00;
const china = percent1(chinapop);
console.log(china);
// function expression 
const percentageOfWorld2 = function (population) {
    return 79000000000.00 / population * 100;
}
const indiapop = 899999999;
const india = percentageOfWorld2(indiapop);
console.log(india);
const japanpop = 234444444;
const japan = percentageOfWorld2(japanpop);
console.log(japan);

// arrow function 
population => 790000000000.00 / population * 100;
const percentageOfWorld3 = population => 790000000000.00 / population * 100;
const Switzerland = percentageOfWorld3(498339849489);
console.log(Switzerland);

/* const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(population);
    return console.log(`${country} has ${population} million people which is about ${percentage}`); 
} 
describePopulation("cambodia", 2899999999); */

const populations = new Array(indiapop, japanpop, chinapop, usapop);
if (populations.length >= 4) {
    console.log("true");
}
else {
    console.log("false");
}
const percentages = new Array(percent1(populations[0]), percent1(populations[1]), percent1(populations[2]), percent1(populations[3]));
console.log(percentages[0]);

const myCountry = {
    country: "USA",
    capital: "Washington",
    language: "English",
    population: 3000000,
    neighbours: ["Canada", "Mexico"]
};
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbours and a capital called ${myCountry.capital}`);

myCountry.population = 5000000;
console.log(myCountry.population);
myCountry["population"] = 3000000;
console.log(myCountry.population);