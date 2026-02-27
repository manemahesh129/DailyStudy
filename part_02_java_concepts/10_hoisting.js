/////////////////////HOISTING IN JAVASCRIPT/////////////////////
// What is Hoisting in JavaScript?
// Hoisting only works with var and function declarations, not with let and const. Variables declared with var are hoisted to the top of their scope and initialized with undefined, while variables declared with let and const are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration. Function declarations are hoisted to the top of their scope and can be called before they are defined in the code. However, function expressions and arrow functions are not hoisted, meaning they cannot be called before they are defined in the code.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example:
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am var hoisted!";
// In this example, the variable "hoistedVar" is hoisted to the top of its scope, but its value is not assigned until the line where it is declared. Therefore, when we try to log "hoistedVar" before its declaration, it returns "undefined".
console.log(hoistedLet);
let hoistedLet = "I am let hoisted!";
// In this example, the variable "hoistedLet" is not hoisted in the same way as "hoistedVar". It is in a "temporal dead zone" from the start of the block until its declaration is processed. Therefore, trying to access "hoistedLet" before its declaration will result in a ReferenceError.