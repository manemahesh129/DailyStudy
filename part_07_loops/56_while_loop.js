// While loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. The loop will continue to execute as long as the condition is true. The syntax of a while loop is as follows:
// while (condition) {
//     // code to be executed
// }

// Example: Print numbers from 0 to 5 using a while loop
let i = 0; // Initialize the counter variable
while (i <=5) { // Check the condition before each iteration
console.log(i) // Print the current value of i
i++ // Increment the counter variable
}

// Example: Calculate the factorial of a number using a while loop
let number = 5; // You can change this number to calculate the factorial of any other positive integer
let factorial = 1; // Initialize factorial to 1
let j = 1; // Initialize the counter variable
while (j <= number) { // Check the condition before each iteration
    factorial *= j; // factorial = factorial * j
    j++; // Increment the counter variable
}
console.log(`Factorial of ${number} is ${factorial}`);

// While loops with if/else statements:
// Example: Print even and odd numbers from 1 to 10 using a while loop with if/else statements
let k = 1; // Initialize the counter variable
while (k <= 10) { // Check the condition before each iteration
    if (k % 2 === 0) { // Check if the number is even
        console.log(`${k} is even`);
    } else { // If the number is not even, it is odd
        console.log(`${k} is odd`);
    }
    k++; // Increment the counter variable
}