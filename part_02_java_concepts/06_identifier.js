// 1. Identifiers in JavaScript
// Identifiers are names given to variables, functions, classes, and other entities in JavaScript. They must follow certain rules:
// - An identifier must start with a letter, underscore (_), or dollar sign ($).
// - After the first character, an identifier can contain letters, digits, underscores, or dollar signs.
// - Identifiers are case-sensitive, which means that "myVariable" and "myvariable" are considered different identifiers.
// - Reserved words (keywords) cannot be used as identifiers. For example, you cannot name a variable "var" or "function" because these are reserved keywords in JavaScript.
// - It is a good practice to use meaningful and descriptive names for identifiers to improve code readability and maintainability.

// Rules of identifiers in JavaScript:
// 1. An identifier must start with a letter, underscore (_), or dollar sign ($).
// 2. After the first character, an identifier can contain letters, digits, underscores, or dollar signs.
// 3. Identifiers are case-sensitive.
// 4. Reserved words cannot be used as identifiers.


let myVariable = 10; // This is a valid identifier
let _myVariable = 20;  // This is also a valid identifier
let $myVariable = 30;  // This is also a valid identifier
console.log(myVariable);
console.log(_myVariable);
console.log($myVariable);
// let 1myVariable = 40; // This is an invalid identifier because it starts with a digit
// let var = 50; // This is an invalid identifier because "var" is a reserved keyword

// 2. Literals in JavaScript
// Literal values are the actual values that we assign to variables. They can be of different types, such as numbers, strings, booleans, etc. For example:
let numberLiteral = 42; // This is a number literal
let stringLiteral = "Hello, World!"; // This is a string literal
let booleanLiteral = true; // This is a boolean literal
console.log(numberLiteral);
console.log(stringLiteral);
console.log(booleanLiteral); 
// In summary, identifiers are the names we give to variables and other entities in JavaScript, while literals are the actual values that we assign to those variables. Both identifiers and literals are fundamental concepts in programming and are essential for writing meaningful and functional code.

// 3. Constants in JavaScript
// Constants are variables that cannot be reassigned after they have been initialized. In JavaScript, we can declare constants using the "const" keyword. For example:
const PI = 3.14159; // This is a constant variable
console.log(PI);
// PI = 3.14; // This will result in an error because we cannot reassign a constant variable
// Constants are useful for values that should not change throughout the program, such as mathematical constants or configuration values. They help to prevent accidental changes to important values and can improve code readability by indicating that a value is meant to be constant.

// In summary, constants are a way to declare variables that cannot be reassigned, and they play an important role in ensuring the integrity of values that should not change in a program.

// 4. Operators in JavaScript
// Operators are symbols that perform operations on operands (values or variables). JavaScript has various types of operators, including:
// - Arithmetic operators: +, -, *, /, %, ++, -- 
// - Assignment operators: =, +=, -=, *=, /=, %=
// - Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// - Logical operators: &&, ||, !
// - Bitwise operators: &, |, ^, ~, <<, >>, >>>
// - Ternary operator: ? :
// Operators are used to perform calculations, assign values, compare values, and combine logical expressions. They are essential for writing functional code and performing various operations on data in JavaScript.
// In summary, operators are symbols that perform operations on operands, and they are a fundamental part of programming in JavaScript. Understanding how to use operators effectively is crucial for writing efficient and functional code.
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0
a++;