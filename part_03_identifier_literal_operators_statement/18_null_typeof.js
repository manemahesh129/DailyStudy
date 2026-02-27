let value =null;
console.log(typeof value); // Output: "object"
// In JavaScript, the typeof operator returns "object" for null values. This is a known quirk in the language and is often considered a bug. However, it has been retained for backward compatibility reasons. Therefore, when you check the type of a null value using typeof, it will return "object" instead of "null".

let value1 =null;
console.log(value1);

// Equality check for null
console.log(value == null); // Output: true
// The equality operator (==) considers null to be equal to null, so this will return true.