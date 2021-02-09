// coding challenge 2 and 4
const value1 = 275;
const value2 = 40;
const value3 = 430;
const setvalue = 50;
const tip = value1 >= 50 && value1 <= 300 ? `${value1 * .20}` : `${value1 * .15}`;
console.log(` the bill was ${value1}, the tip was ${tip}, and the total value is ${Number(value1) + Number(tip)}`);

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}
const result = calcTip(100);
console.log(result);

const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
console.log(tips);
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);

const bills2 = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips2 = [];
const totals2 = []; 

for (let i = 0; i < bills2.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals2.push(tip + bills[i]);
    
}



console.log(totals2);
const calcAverage = (arr) => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
       sum += arr[i];
    } 
    return sum /arr.length; 
}
console.log(calcAverage(totals2));



