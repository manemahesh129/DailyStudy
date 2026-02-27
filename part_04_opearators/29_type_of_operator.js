// Type of Operator
// The typeof operator is used to determine the type of a variable or expression. It returns a string indicating the type of the operand. The syntax is: typeof operand.
let num = 42;
console.log(typeof num); // Output: "number"
let str = "Hello, world!";
console.log(typeof str); // Output: "string"
let bool = true;
console.log(typeof bool); // Output: "boolean"
let obj = { name: "Alice", age: 30 };
console.log(typeof obj); // Output: "object"
let arr = [1, 2, 3];
console.log(typeof arr); // Output: "object" (arrays are a type of object in JavaScript)
let func = function() { return "Hello"; }; 
console.log(typeof func); // Output: "function"
let undef;
console.log(typeof undef); // Output: "undefined"
let nul = null;
console.log(typeof nul); // Output: "object" (this is a known quirk in JavaScript, null is considered an object)