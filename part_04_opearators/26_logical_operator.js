// Logical Operators
// Logical operators are used to combine multiple conditions or to negate a condition. The main logical operators in JavaScript are AND (&&), OR (||), and NOT (!).
let a = 10;
let b = 5;
let c = 15;
// AND (&&) operator returns true if both conditions are true
console.log(a > b && a < c); // Output: true (10 is greater than 5 AND 10 is less than 15)
console.log(a > b && a > c); // Output: false (10 is greater than 5 BUT 10 is not greater than 15)
// OR (||) operator returns true if at least one condition is true
console.log(a > b || a > c); // Output: true (10 is greater than 5 OR 10 is greater than 15)
console.log(a < b || a > c); // Output: false (10 is not less than 5 AND 10 is not greater than 15)
// NOT (!) operator negates a condition
console.log(!(a > b)); // Output: false (NOT true is false)
console.log(!(a < b)); // Output: true (NOT false is true)

// AND Gate Truth Table
// A | B | A && B
// 0 | 0 | 0
// 0 | 1 | 0
// 1 | 0 | 0
// 1 | 1 | 1

// OR Gate Truth Table
// A | B | A || B
// 0 | 0 | 0
// 0 | 1 | 1
// 1 | 0 | 1
// 1 | 1 | 1