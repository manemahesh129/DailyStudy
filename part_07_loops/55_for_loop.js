// For Loop: A for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.
// Syntax:
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// Example: Print numbers from 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Example: Calculate the factorial of a number using a for loop
// Factorial of a number n is the product of all positive integers less than or equal to n. It is denoted as n! and is calculated as n! = n * (n-1) * (n-2) * ... * 1
let number = 5; // You can change this number to calculate the factorial of any other positive integer
let factorial = 1; // Initialize factorial to 1
for (let i = 1; i <= number; i++) {
    factorial *= i; // factorial = factorial * i
}
console.log(`Factorial of ${number} is ${factorial}`);

// For loops with if/else statements:
// Example: Print even and odd numbers from 1 to 10 using a for loop with if/else statements
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { // Check if the number is even
        console.log(`${i} is even`);
    } else { // If the number is not even, it is odd
        console.log(`${i} is odd`);
    }
}

// If we not assign a value to the variable in the initialization part of the for loop, it will be undefined and will cause an error when we try to use it in the condition or increment/decrement part of the loop. For example:
for (let i; i <= 5; i++) { // This will cause an error because i is undefined
    console.log(i);
}