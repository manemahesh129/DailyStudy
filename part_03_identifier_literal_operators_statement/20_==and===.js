// The difference between == and === in JavaScript:
// == is the equality operator that performs type coercion (conversion of types).
// === is the strict equality operator that does not perform type coercion.

let a = 5; // This is a number, not a string
let b = "5"; // This is a string, not a number

console.log(a == b); // Output: true (because 5 == "5" after type coercion)
console.log(a === b); // Output: false (because 5 !== "5" - no type coercion)

// Example with null and undefined:
let c = null;
let d = undefined;

console.log(c == d); // Output: true (null is loosely equal to undefined)
console.log(c === d); // Output: false (null is strictly not equal to undefined)