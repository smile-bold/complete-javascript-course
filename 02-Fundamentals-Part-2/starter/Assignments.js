function describeCountry(country, population, capitalCity) {
    console.log(
        `${country} has ${population} people and its capital city is ${capitalCity}`);
}
describeCountry("USA", 3000000, "Washington D.C.");

// function declaration 
function percentageOfWorld1(population) {
    return 79000000000.00 / (population * 100);
}
const usa = percentageOfWorld1(3000000.00);
// console.log(number);
const china = percentageOfWorld1(1441000000.00);
console.log(china);
// function expression 
const percentageOfWorld2 = function (population) {
    return 79000000000.00 / population * 100;
}
const india = percentageOfWorld2(899999999);
console.log(india);

const japan = percentageOfWorld2(234444444);
console.log(japan);

// arrow function 
population => 790000000000.00 / population * 100;
const percentageOfWorld3 = population => 790000000000.00 / population * 100;
const Switzerland = percentageOfWorld3(498339849489);
console.log(Switzerland);

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(population);
    return console.log(`${country} has ${population} million people which is about ${percentage}`);
}
describePopulation("cambodia", 2899999999);