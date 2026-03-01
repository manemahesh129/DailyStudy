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

let a1 = 5; 
let b = a1++ + ++a1; // a1++ is the postfix increment, which returns the current value of a1 (5) and then increments it to 6. ++a1 is the prefix increment, which first increments a1 to 7 and then returns the new value (7). So, b will be 5 + 7 = 12. After this line, a1 will be 7.
let c = a1++ + ++a1 + ++a1 + ++a1 + a1++; // Let's break down the expression for c step by step:
// 1. a1++: This is the postfix increment, so it returns the current value of a1 (7) and then increments it to 8.
// 2. ++a1: This is the prefix increment, so it first increments a1 to 9 and then returns the new value (9).
// 3. ++a1: This is another prefix increment, so it first increments a1 to 10 and then returns the new value (10).
// 4. ++a1: This is yet another prefix increment, so it first increments a1 to 11 and then returns the new value (11).
// 5. a1++: This is the postfix increment, so it returns the current value of a1 (11) and then increments it to 12.

console.log(b);
console.log(a1);
console.log(c);