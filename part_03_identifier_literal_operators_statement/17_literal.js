// 2. Literals in JavaScript
// Literal values are the actual values that we assign to variables. They can be of different types, such as numbers, strings, booleans, etc. For example:
let numberLiteral = 42; // This is a number literal
let stringLiteral = "Hello, World!"; // This is a string literal
let booleanLiteral = true; // This is a boolean literal
console.log(numberLiteral);
console.log(stringLiteral);
console.log(booleanLiteral); 
// In summary, identifiers are the names we give to variables and other entities in JavaScript, while literals are the actual values that we assign to those variables. Both identifiers and literals are fundamental concepts in programming and are essential for writing meaningful and functional code.

// Types of literals in JavaScript:
// 1. Numeric Literals: These represent numbers and can be integers or floating-point numbers. For example:
let integerLiteral = 100; // This is an integer literal
let floatLiteral = 3.14; // This is a floating-point literal
// 2. String Literals: These represent sequences of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). For example:

//Template literals (using backticks) allow for multi-line strings and string interpolation:
let name = "Mahesh";
let last_name ="Mane";
let full_name = `My name is ${name} ${last_name}`; // Output: My name is Mahesh Mane
console.log(full_name);

// concatenation of string literals:
let greeting = "Hello, " + name; // Output: Hello, Mahesh
console.log(greeting);

// I want to store path of file in string literal:
let filePath = "C:\\Users\\Mahesh\\Documents\\file.txt";
console.log(filePath);

// I want to store website URL in string literal:
let websiteURL = "https://www.example.com";
console.log(websiteURL);