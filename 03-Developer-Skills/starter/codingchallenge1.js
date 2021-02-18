/* 
Given an array of forecasted maximum temperatures, the thermometer displays a string with these
temperatures. 

example: [17, 21, 23] will print "... 17 C in 1 days .. 21 C in 2 days ... 23 C in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/ 


// 1) Understanding the problem 
// - Array transformed to string, separated by ...
// - What is the X days? Answer: Index + 1 

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C; Don't know Celsius symbol to add. 
// - String need to contain day (index + 1)
// - Add ... between elements and start and end of string
function printForecast (arr) {
    arr.sort(); // Sort array (just in case; out of order)
    let i = 0; // declare index as value
        while (arr.length > i) {
            let forecast = arr[i]; // set array index of value as forecast variabe
            console.log(`${forecast} in ${(i + 1)} days`); // insert forecast variable into string; insert variable as index + 1
            i++;
        }
}
printForecast([17,21,23]);
