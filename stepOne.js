function getAverage(scores) {
    // initialize a variable to hold the sum of scores
    let total = 0;

    // loop thru the scores array to calculate the sum
    for (let i = 0; i < scores.length; i++) {
        total += scores[i]; // add each score to the total
    }

    // calculate the average by dividing the total by the number of scores
    let average = total / scores.length;

    // return the average
    return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));