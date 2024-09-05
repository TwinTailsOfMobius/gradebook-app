function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    // get the letter grade using the getGrade function
    let grade = getGrade(score);

    // check if the grade is not 'F'
    if (grade === 'A++' || grade === 'A' || grade === 'B' || grade === 'C' || grade === 'D') {
        return true; // passing grade
    } else {
        return false; // failing grade ('F or invalid score)
    }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));