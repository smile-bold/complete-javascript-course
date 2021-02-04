/* Coding Challenge #3 / Fundamentals Part 2 
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � */
const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2; //operator precedence! exponentials work from right to left and are higher priority than division
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);
const markHigherBMI = true;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

const Mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: markMass,
    height: markHeight,
    calcBMI: function () {
        this.BMI = Mark.mass / mark.Height ** 2;
        return this.BMI
    }
}

const John = {
    firstName: "John",
    lastName: "Smith",
    mass: johnMass,
    height: johnHeight,
    calcBMI: function () {
        this.BMI = John.mass / John.height ** 2;
        return this.BMI
    }

}

if (Mark.BMI > John.BMI) {
    console.log(`Marks BMI ${Mark.BMI} is higher than Johns BMI ${John.BMI}`);
}
else if (John.BMI > Mark.BMI) {
    console.log(`John BMI ${John.BMI} is higher than Johns Mark ${Mark.BMI}`);

}
