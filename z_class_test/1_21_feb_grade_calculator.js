// 1. ✅ Grade Calculator:

// Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

// Grade Calculator with User Input:
let my_score=79;
if (my_score >= 90 && my_score <= 100) {
console.log("Grade A");
} else if (my_score >= 80 && my_score <= 89) {
console.log("Grade B");
} else if (my_score >= 70 && my_score <= 79) {
console.log("Grade C");
} else if (my_score >= 60 && my_score <= 69) {
console.log("Grade D");
} else if (my_score >=0 && my_score <= 59) {
console.log("You are fail and you have to study hard");
} else {
console.log("Invalid score. Please enter a score between 0 and 100.");
}

// Function to calculate letter grade based on numerical score
function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else if (score >= 0 && score < 60) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}
console.log(calculateGrade(95));
console.log(calculateGrade(85));

// Things to note:
// - The if-else statement is used to check the range of the score and determine the corresponding letter grade.
// - The function calculateGrade takes a numerical score as input and returns the letter grade based on the defined grading scale.
// - The function also includes a check for invalid scores that are outside the range of 0 to 100.