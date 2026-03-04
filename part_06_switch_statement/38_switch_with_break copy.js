// Switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if-else statements.
// The syntax of a switch statement is as follows:
/*
switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    ...
    default:
        // code to be executed if expression doesn't match any case
}
*/

// Example of a switch statement:
let day = 5
switch (day) {
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
case 4:
console.log("Thursday");
break;
case 5:
console.log("Friday");
break;
case 6:
console.log("Saturday");
break;
case 7:
console.log("Sunday");
break;
}