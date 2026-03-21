// Decrement Operator: Descrement Operator is used to decrease the value of a variable by 1. It can be used in two forms: prefix and postfix.
// Syntax:
// --variable; // Pre Decrement
// variable--; // Post Decrement

// Pre Decrement: In this form, the variable is decremented before its value is used in an expression.
// Example of Pre Decrement:
let a = 5;
console.log(--a);

// Post Decrement: In this form, the variable is decremented after its value is used in an expression.
// Example of Post Decrement:
let b = 45;
console.log(b--); // This will print 45, but b will be decremented to 44 after this line is executed.
console.log(b); // This will print 44, showing the updated value of b after the post decrement.

// Things to Remember:
// 1. The decrement operator decreases the value of a variable by 1.
// 2. The pre decrement operator (--variable) decrements the variable before its value is used in an expression.
// 3. The post decrement operator (variable--) decrements the variable after its value is used in an expression.
// 4. The choice between pre and post decrement depends on whether you want to use the original value or the decremented value in your expression.

// Combining Increment and Decrement Operators:
let x = 10;
console.log(++x); // This will print 11, as x is incremented before its value is used.
console.log(x--); // This will print 11, but x will be decremented to 10 after this line is executed.
console.log(x); // This will print 10, showing the updated value of x after the post decrement.