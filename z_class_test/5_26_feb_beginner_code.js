// For Loop
/*
1️⃣ Print "Hello" 5 times
for (let i = 1; i <=5; i++) { // Initialization: let i = 1; Condition: i <= 5; Increment: i++
// i -> meaning "iteration" or "index" and is commonly used as a variable name in loops to represent the current iteration number. It starts at 1 and increments by 1 in each iteration until it reaches 5, at which point the loop will stop executing.
// i++ is a shorthand for i = i + 1, which means that in each iteration, the value of i will be increased by 1. This allows the loop to progress through its iterations and eventually terminate when the condition (i <= 5) is no longer true.
console.log("Hello"); // This line of code will be executed in each iteration of the loop, printing "Hello" to the console 5 times.
}
*/

// // 2️⃣  Print numbers from 1 to 10
// for (let number = 1; number <= 10; number ++) {
// console.log(number);
// }

// 3️⃣ Print even numbers from 1 to 20
// for (let even_number = 1; even_number <= 20 ; even_number ++) {
// if (even_number % 2 === 0) {
// console.log(even_number);
// }
// }

// 4️⃣ Print the sum of first 10 natural numbers
// natural numbers are the positive integers starting from 1. The first 10 natural numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10. To calculate the sum of these numbers, we can use a loop to iterate through them and add them together. Here's how you can do it in JavaScript:
// let sum = 0; // Initialize a variable to hold the sum
// for (let nat_number = 1; nat_number <= 10; nat_number ++) { // Loop through numbers from 1 to 10
// sum = sum + nat_number; // Add the current number (nat_number) to the sum
//                         // This is a shorthand for sum = sum + nat_number, which means that in each iteration, the value of nat_number will be added to the current value of sum, effectively accumulating the total as the loop progresses.
// }
// console.log("Sum of first 10 natural numbers:", sum); // After the loop has completed, this line will print the final value of sum, which is the total of the first 10 natural numbers, to the console.


// 5️⃣ Print the multiplication table of 5

// for (i = 1; i <= 10; i++) { // Loop from 1 to 10 to create the multiplication table for the number 5. The variable i represents the multiplier, which will take values from 1 to 10 in each iteration of the loop.
// let multiplication = (5 * i); // Calculate the multiplication result by multiplying 5 with the current value of i. This will give us the product for each step of the multiplication table (e.g., 5 x 1, 5 x 2, ..., 5 x 10).
// console.log(5 + "x" + i + "=" + multiplication);
// // Meaning of the above line: This line constructs a string that represents the multiplication expression and its result. It concatenates the number 5, the string " x ", the current multiplier (i), the string " = ", and the calculated multiplication result. For example, when i is 1, it will output "5 x 1 = 5", when i is 2, it will output "5 x 2 = 10", and so on, up to "5 x 10 = 50". This provides a clear and formatted way to display the multiplication table for the number 5 in the console. 
// // Print the multiplication result in a formatted string. This line will output the multiplication expression and its result to the console, such as "5 x 1 = 5", "5 x 2 = 10", and so on, up to "5 x 10 = 50".
// } 

// While Loop

// 1️⃣ Print "Playwright" 5 times
let count = 1;
while (count <= 5) {
  console.log("Playwright");
  count++;
}

// 2️⃣ Print numbers from 1 to 10
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

// 3️⃣ Print even numbers from 1 to 20
let even_number = 1;
while (even_number <= 20) {
  if (even_number % 2 === 0) {
    console.log(even_number);
  }
  even_number++;
}

// 4️⃣ Calculate sum of first 10 natural numbers
let sum = 0;
let nat_number = 1;
while (nat_number <= 10) {
  sum = sum + nat_number;
  nat_number++;
}
console.log("Sum of first 10 natural numbers:", sum);

// 5️⃣ Print the multiplication table of 7
let i = 1;
while (i <= 10) {
  let multiplication = (7 * i);
  console.log(7 + "x" + i + "=" + multiplication);
  i++;
}