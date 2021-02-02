const country = "United States of America";
const continent = "North America";
let population = 365000000;
const language = "English";
const isIsland = false; //data types 
console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);
let divided_population = population / 2; //Operators
divided_population++;
console.log(divided_population > 6000000);
console.log(divided_population > 33000000);
let description = `${country} is in ${continent}, and it's ${population} speak ${language}`; //template literals 
console.log(description);
'9' - '5'; // 4 
'19' - '13' + '17'; // "617"
'19' - '13' + '17';// 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2;
// 1143

/*let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1) {
    console.log("Only 1 border");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    ("No borders");
} */
if (language === "English" && population < 50000000 && isIsland === false) {
    console.log("You should live in Portugal");
} else {
    console.log("Portugal does not meet your criteria");
}
const language2 = prompt('What is your language?')
switch (language2) {
    case 'Chinese':
    case 'Mandarin':
        console.log('Most number of native speakers');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('Number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
}
console.log(`${population >= 33000000 ? "USA population is above average" : "USA population is below average"}`);