// (score1, score2, score3) => (score1 * score2 * score3) / 3;
const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3;
    return average;
}

const avgDolphins1 = console.log(calcAverage(44, 23, 71));
const avgKoalas1 = console.log(calcAverage(65, 54, 49));
const avgDolphins2 = console.log(calcAverage(85, 54, 41));
const avgKoalas2 = console.log(calcAverage(23, 34, 27));
function checkWinner(avgDolphin, avgKoala) {
    if (avgDolphin >= (avgKoala * 2)) {
        console.log(`Dolphins win ${avgDolphin} vs. ${avgKoala}`);
    }
    else if (avgKoala >= (avgDolphin * 2)) {
        console.log(`Koalas win ${avgKoala} vs. ${avgDolphin}`);
    }
    else {
        console.log('No one wins.');
    }
}
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
