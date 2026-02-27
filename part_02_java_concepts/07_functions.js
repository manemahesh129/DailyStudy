// functions in JavaScript
// Definition: A function is a reusable block of code that performs a specific task. It can take input parameters, perform operations, and return a value. Functions are fundamental building blocks in JavaScript and are used to organize code, improve readability, and promote code reusability.

// Types of functions in JavaScript:
// 1. Function declaration
// 2. Function expression
// 3. Arrow function
// 4. Higher-order function

// Defination of the function
function restapi() {
    console.log("Rest API are used to extract the data from the server.");
}
// calling the function
restapi(); // Output: Rest API are used to extract the data from the server.
// function declaration
// A function declaration is a way to define a function in JavaScript. It consists of the "function" keyword followed by the name of the function, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces. For example:
// 1.
let name = "Alice"; // global scope
function greet(name) { // function scope
    return `Hello, ${name}!`; // template literal
}
console.log(greet(name)); // calling the function
// 2.
let student = "Mahesh"; // function declaration
function test1(student) { // function scope
    return `How are you, ${student}?`; //
}
console.log(test1(student)); // calling the function
// 3.
let mywife = "Rupali"; // function declaration
function family(mywife) { // function scope
return `Her name is ${mywife}.`; // template literal
}
console.log(family(mywife)); // calling the function
// 4.
let daughter = "Navya";// function declaration
function familytree(daughter) { // function scope
return `My daughter name is ${daughter}.`; //
}
console.log(familytree(daughter)); // calling the function

// function expression
const add = function(a, b) { // function scope
    return a + b;
}
console.log(add(5, 3)); // calling the function

// arrow function
const multiply = (a, b) => a * b; // function scope
// const multiply = (a, b) => { // function scope
//     return a * b;
// }
console.log(multiply(4, 6)); // calling the function

// higher-order function
function operate(a, b, operation) { // function scope
    return operation(a, b);
}  

console.log(operate(10, 5, add)); // passing function as argument
console.log(operate(10, 5, multiply)); // passing function as argument 