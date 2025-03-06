

//

function superbowlWin(record) {
    const winningYear = record.find(entry => entry.result === "W");
if (winningYear) {
    return winningYear.year;
} else {
    return undefined;
}
};

const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
];

console.log(superbowlWin(record))