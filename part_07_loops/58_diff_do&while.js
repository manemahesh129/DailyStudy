// Difference between do-while and while loop
// The main difference between do-while and while loop is that in a do-while loop, the block of code is executed at least once, even if the condition is false. In contrast, in a while loop, the block of code is not executed at all if the condition is false from the beginning.
// Example: Using a while loop to print numbers from 0 to 5
// let j = 0; // Initialize the counter variable
// while (j <= 5) { // Check the condition before executing the block of code
//     console.log(j); // Print the current value of j
//     j++; // Increment the counter variable
// }

// // Example: Using a do-while loop to print numbers from 0 to 5
// let k = 0; // Initialize the counter variable
// do { // Execute the block of code at least once
//     console.log(k); // Print the current value of k
//     k++; // Increment the counter variable
// } while (k <= 5); // Check the condition after each iteration

// // In the above examples, both loops will print numbers from 0 to 5. However, if we change the initial value of j and k to a number greater than 5, the while loop will not execute at all, while the do-while loop will execute once before checking the condition.
// let m = 6; // Initialize the counter variable to a number greater than 5
// while (m <= 5) { // Check the condition before executing the block of code
//     console.log(m); // This will not be executed
//     m++; // Increment the counter variable
// }

// // Example: Using a do-while loop with the same initial value
// let n = 6; // Initialize the counter variable to a number greater than 5
// do { // Execute the block of code at least once
//     console.log(n); // This will be executed once
//     n++; // Increment the counter variable
// } while (n <= 5); // Check the condition after each iteration

// In summary, the do-while loop guarantees that the block of code will be executed at least once, while the while loop may not execute at all if the condition is false from the beginning.
// Example: Using a while loop with a condition that is false from the beginning

//while
let m = 0;
while(m > 10) {
console.log(m);
m++
}

//do while
let n = 0;
do {
console.log(n);
n++
}while(n > 10);