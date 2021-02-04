
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

