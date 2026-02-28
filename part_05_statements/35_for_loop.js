// For Loop in JavaScript:
// A for loop is a control flow statement that allows you to repeat a block of code a certain number of times. It consists of three parts: initialization, condition, and increment/decrement.
// The syntax of a for loop is as follows:
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// Example of a for loop that prints numbers from 1 to 5:
for (let i = 1; i <= 5; i++) { // Initialization: let i = 1; Condition: i <= 5; Increment: i++
    console.log(i);
}

// In this example, the loop initializes the variable i to 1, checks if i is less than or equal to 5, and increments i by 1 in each iteration. The loop will print the numbers 1 through 5 to the console.
// You can also use a for loop to iterate over arrays or other iterable objects. For example, to print each element of an array:
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) { // Loop through the array using the length property to determine the number of iterations
    console.log(fruits[i]); // Access each element of the array using the index i and print it to the console
}
// This will output:
// apple
// banana
// cherry

// Real Example except fizzbuzz and grade calculator, we can use for loop to print the multiplication table of a number:
// Multiplication Table of 5:
const number = 5;
for (let i = 1; i <= 10; i++) { // Loop from 1 to 10 to create the multiplication table
    console.log(`${number} x ${i} = ${number * i}`); // Print the multiplication result in a formatted string
}