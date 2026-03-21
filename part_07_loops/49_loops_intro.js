// Loop in JavaScript: 
// Loops are used to repeat a block of code multiple times. JavaScript provides several types of loops, including for, while, and do...while loops.
// Definition: A loop is a programming construct that allows you to execute a block of code repeatedly until a specified condition is met. Loops are essential for performing repetitive tasks and iterating over data structures.

console.log("For Loop:");
console.log("-------------");

// For Loop: A for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.
// I -> Initialization: This is where you initialize a counter variable. It is executed only once at the beginning of the loop.
// C -> Condition: This is the condition that is evaluated before each iteration of the loop. If the condition is true, the loop continues; if it is false, the loop terminates.
// U -> Updation(Increment/Decrement): This is where you update the counter variable after each iteration. It is executed at the end of each loop iteration.

for (let i = 0; i <= 5; i++) {
console.log("Print: " + i)
};
// OR
for (let i = 0; i <= 5; i++) {
    let x = "Chat";
console.log("x: " + x + " i: " + i)
};