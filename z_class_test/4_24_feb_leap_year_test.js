// Create a program that determines whether a given year is a leap year. 
// A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
// Use an if-else statement to make this determination.

let year = 2024

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
console.log(year + " is a leap year.");
} else {
console.log(year + " is not a leap year.")
}

// Leap Year means that the year has 366 days instead of the usual 365 days.
// This extra day is added to the month of February, making it 29 days long instead of 28 days. 
// Leap years occur every 4 years, but there are exceptions to this rule. 
// A year that is divisible by 100 is not a leap year unless it is also divisible by 400. 
// For example, the year 2000 was a leap year because it is divisible by 400, but the year 1900 was not a leap year because it is divisible by 100 but not by 400.

// Things to remember:
// 1. A leap year is a year that has an extra day, February 29th, making it 366 days long.
// 2. A leap year occurs every 4 years, but there are exceptions to this rule.
// 3. A year that is divisible by 100 is not a leap year unless it is also divisible by 400.
// 4. For example, the year 2000 was a leap year because it is divisible by 400, but the year 1900 was not a leap year because it is divisible by 100 but not by 400.
