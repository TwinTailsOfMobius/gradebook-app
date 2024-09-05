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
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    // get the class average
    let classAverage = getAverage(totalScores);

    // get the student grade
    let studentGrade = getGrade(studentScore);

    // check if the student passed or failed
    let passed = hasPassingGrade(studentScore);

    // construct the message
    if (passed) {
        return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You passed the course.";
    } else {
        return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You failed the course.";
    }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));