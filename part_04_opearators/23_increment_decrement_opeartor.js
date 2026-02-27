// Increment and Decrement Operators
// The increment operator (++) increases a variable's value by 1, while the decrement operator (--) decreases it by 1.
// These operators can be used in two forms: prefix and postfix. In the prefix form, the operator is placed before the variable (e.g., ++x), while in the postfix form, it is placed after the variable (e.g., x++). The difference between the two forms is in the order of evaluation when used in an expression.

// Example of postfix increment:
let a = 5;
console.log(a++); // Output: 5 (the current value of a is returned, then a is incremented)
console.log(a);   // Output: 6 (a has been incremented)
// Example of prefix increment:
let x = 5;
console.log(x); // Output: 5
x++; // Increment x by 1
console.log(x); // Output: 6
x--; // Decrement x by 1
console.log(x); // Output: 5