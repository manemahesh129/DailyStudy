// Do while loop is similar to while loop but it will execute the block of code at least once, even if the condition is false. The syntax of do while loop is as follows:
// do {
//     // code to be executed
// } while (condition);

// Example: Print numbers from 0 to 5 using a do while loop
let i = 0; // Initialize the counter variable
do { // Execute the block of code at least once
    console.log(i); // Print the current value of i
    i++; // Increment the counter variable
} while (i <= 5); // Check the condition after each iteration