// if-else-if statement is a conditional statement that allows you to execute different blocks of code based on multiple conditions. It is an extension of the if-else statement and provides more than two options for execution.
// The if-else-if statement evaluates conditions in order. If the first condition is true, it executes the corresponding block of code and skips the rest. If the first condition is false, it moves on to the next condition and checks it. This process continues until a true condition is found or all conditions are evaluated. If none of the conditions are true, the else block (if provided) will be executed.

// Syntax:
// if (condition1) {
//   // code to be executed if condition1 is true
// } else if (condition2) {
//   // code to be executed if condition2 is true
// } else if (condition3) {
//   // code to be executed if condition3 is true
// } else {
//   // code to be executed if all conditions are false
// }

// Example 1: Grading system based on marks
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else if (marks >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Example 2: Checking eligibility for a cultural event based on class
let your_class = 7;
if (your_class > 5) {
console.log("You will eligible for cultural event.");
} else if (your_class === 5) {
console.log("You are on the borderline, you may be eligible for cultural event.");
} else {
console.log("You have to watch event from home.");
}

// Example 3: Grading system based on score with more detailed conditions && logical operators
let score=60
if (score >= 90) {
console.log("You are A+ grade student");
} else if(score <= 90 && score >= 80) {
console.log("You are A grade student");
} else if(score >= 70 && score <= 80) {
console.log("You are B+ grade student");
} else if(score >= 60 && score <= 70) {
console.log("You are B grade student");
} else {
console.log("You have to study hard");
}