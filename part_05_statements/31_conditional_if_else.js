// Example of a conditional statement:
// The if statement executes a block of code if a specified condition is true. If the condition is false, the else block (if provided) will be executed.
// In this example, we check if the age is greater than or equal to 18. If it is, we print a message saying the person can vote. Otherwise, we print a message saying they cannot vote.

// Syntax:
// if (condition) {
//   // code to be executed if condition is true
// } else {
//   // code to be executed if condition is false
// }

// 1. Example 1: Checking voting eligibility
let age=18
if (age>=18) {
console.log("Yes, you can vote");
}else{
console.log("No, you can't vote");
}
// 2. Example 2: Checking eligibility for a cultural event based on class
let your_class = 7;
if (your_class > 5) {
console.log("You will eligible for cultural event.");
} else {
console.log("You have to watch event from home.");
}