// While loops are used to repeat a block of code as long as a specified condition is true. The syntax for a while loop is as follows:
// while (condition) {
//     // code to be executed
// }
// Example of a while loop that prints numbers from 1 to 5:
let i = 1; // Initialization of the variable i
while (i <= 5) { // Condition: the loop will continue as long as i is less than or equal to 5
    console.log(i); // Print the current value of i
    i++; // Increment i by 1 in each iteration to eventually break the loop
}

// Things to remember about while loops:
// 1. Make sure to initialize the variable used in the condition before the loop starts.
// 2. Ensure that the condition will eventually become false, otherwise you will create an infinite loop.
// 3. You can use while loops for situations where you don't know in advance how many times you need to repeat the block of code, such as when waiting for user input or processing data until a certain condition is met.