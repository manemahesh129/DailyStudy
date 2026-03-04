// Switch with strict match:

// In a switch statement, the cases are evaluated using strict equality (===) by default. This means that the value of the expression must match the value of the case exactly, including the type. If you want to perform a loose match (==), you can use the switch statement with a case that evaluates to true for the desired condition.
// Example 1: with string value
let num = "5";
switch (num) {
case 5: // This case will not match because the type of num is string and the type of 5 is number.
console.log("Number 5");
break;
case "5": // This case will match because the type of num is string and the type of "5" is also string.
console.log("String 5");
break;
default:
console.log("No match");
}

// Switch always uses === for comparison, so the case values must match the type of the expression being evaluated. In the above example, the first case will not match because num is a string and 5 is a number, while the second case will match because both num and "5" are strings.

// Example 2: with falese value
let value = false;
switch (value) {
case false: // This case will match because the type of value is boolean and the type of false is also boolean.
console.log("Value is false");
break;
case true: // This case will not match because the type of value is boolean and the type of true is also boolean, but the value is not true.
console.log("Value is true");
break;
default:
console.log("No match");
}

// Example 3: with null value
let data = 3;
switch (data) {
case null:
console.log("Data is null");
break;
case 0:
console.log("Data is zero");
break;
case 3:
console.log("Data is three");
break;
default:
console.log("Data is not recognized");
}