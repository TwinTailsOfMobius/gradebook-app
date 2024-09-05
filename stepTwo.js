function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}
function getGrade(score) {
    // use conditional statements to check the score and assign the corresponding grade
    if (score === 100) {
        return 'A++';
    } else if (score >= 90 && score <= 99) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    } else {
        return 'Invalid Score' // in case the score is outside the valid range
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));