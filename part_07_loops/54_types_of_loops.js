// Types of Loops:
// In JavaScript, there are several types of loops that allow you to execute a block of code multiple times based on a specified condition. The main types of loops are:
// 1. For Loop: Used when the number of iterations is known.
// 2. While Loop: Used when the number of iterations is not known and the loop needs to continue until a certain condition is met.
// 3. Do...While Loop: Similar to the while loop, but it guarantees that the block of code will be executed at least once, as the condition is checked after the execution of the block.

// For Loop: A for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.
// I -> Initialization: This is where you initialize a counter variable. It is executed only once at the beginning of the loop.
// C -> Condition: This is the condition that is evaluated before each iteration of the loop. If the condition is true, the loop continues; if it is false, the loop terminates.
// U -> Updation(Increment/Decrement): This is where you update the counter variable after each iteration. It is executed at the end of each loop iteration.

// Example of For Loop: with post increment operator
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Example of For Loop: with pre increment operator
for (let i = 0; i < 5; ++i) {
    console.log(i);
}
// Example of For Loop: with post decrement operator
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// Things to Remember:
// 1. The for loop is used when the number of iterations is known beforehand.
// 2. The initialization part of the for loop is executed only once at the beginning of the loop.
// 3. The condition part of the for loop is evaluated before each iteration, and if it evaluates to false, the loop terminates.
// 4. The updation part of the for loop is executed at the end of each iteration, and it is typically used to update the counter variable.
// 5. The choice between pre and post increment/decrement in the for loop depends on whether you want to use the original value or the updated value in your loop body.
