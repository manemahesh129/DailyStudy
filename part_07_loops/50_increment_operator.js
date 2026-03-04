// Increment operator: The increment operator (++) is a unary operator that increases the value of a variable by 1. It can be used in two forms: prefix and postfix.

// Pre Increment: In this form, the variable is incremented before its value is used in an expression.
let a = 5;
console.log("Value of a is: " + a); // a is 5
console.log("Pre Increment value 1: " + ++a); // a is incremented to 6, then its value (6) is printed
console.log("Pre Increment value 2: " + ++a); // a is incremented to 7, then its value (7) is printed

let x = 10;
let y = ++ x; // y is assigned the value of x (10), then x is incremented to 11
console.log(y); // y is 10, because the value of x is used before it is incremented
console.log(x); // x is 11, because it was incremented after its value was assigned to y

// Post Increment: In this form, the variable is used in an expression first, and then it is incremented.
let b = 5;
console.log("Value of b is: " + b); // b is 5
console.log("Post Increment value 1: " + b++); // b is used in the expression (5), then it is incremented to 6
console.log("Post Increment value 2: " + b++); // b is used in the expression (6), then it is incremented to 7
console.log("Final value of b is: " + b); // b is 7, because it was incremented twice

let m = 10;
let n = m ++; // n is assigned the value of m (10), then m is incremented to 11
console.log(n); // n is 10, because the value of m is used before it is incremented
console.log(m); // m is 11, because it was incremented after its value was assigned to n