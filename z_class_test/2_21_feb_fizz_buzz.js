// // 2. ✅ FizzBuzz Test:
// // Write a program that prints numbers from 1 to 100. However,
// // for multiples of 3, print "Fizz" instead of the number,
// // and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

// for (let number = 1; number <= 100; number++) { // Loop through numbers from 1 to 100
// // The for loop initializes a variable number to 1, checks if it is less than or equal to 100, and increments it by 1 in each iteration. This allows us to iterate through all numbers from 1 to 100.
// if (number % 3 === 0 && number % 5 === 0) { // Check if the number is a multiple of both 3 and 5
// // % is the modulus operator, which gives the remainder of the division of number by 3 and 5
// // If the number is a multiple of both 3 and 5, the remainder will be 0 for both conditions
// // The condition number % 3 === 0 checks if the number is a multiple of 3, and number % 5 === 0 checks if it is a multiple of 5
// // If both conditions are true, it means the number is a multiple of both 3 and 5, and we print "FizzBuzz"
//     console.log("FizzBuzz");}
// else if (number % 3 === 0) { // Check if the number is a multiple of 3
//     console.log("Fizz"); // If the number is a multiple of 3, print "Fizz"
// }
// else if (number % 5 === 0) { // Check if the number is a multiple of 5
//     console.log("Buzz"); // If the number is a multiple of 5, print "Buzz"
// }
// else {
//     console.log(number); // If the number is not a multiple of 3 or 5, print the number itself
// } }
// // The above code checks if the number is a multiple of both 3 and 5 first, then checks for multiples of 3 and 5 separately. If the number is not a multiple of either, it prints the number itself.


for (let number = 1; number <=100; number++) {
if (number % 3 === 0 && number % 5 === 0) {
console.log("FizzBuzz");
} else if (number % 3 === 0) {
console.log("Fizz");
} else if (number % 5 === 0) {
console.log("Buzz")
} else {
console.log(number);
}
}

// Things to note:
// - The for loop is used to iterate through numbers from 1 to 100.
// - The modulus operator (%) is used to check if a number is a multiple of 3, 5, or both.
// - The order of the conditions is important; we check for multiples of both 3 and 5 first to ensure that "FizzBuzz" is printed for those numbers before checking for individual multiples of 3 and 5.