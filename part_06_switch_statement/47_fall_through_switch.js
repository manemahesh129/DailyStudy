// Fall through switch statement:

// In a switch statement, if you do not include a break statement at the end of a case, the execution will "fall through" to the next case. This means that the code for the next case will be executed even if the case does not match the expression being evaluated. This can be useful in certain situations where you want to execute the same code for multiple cases.
// Example 1: without break statement
// let day = "Monday";
// switch (day) {
// case "Monday":
// case "Tuesday":
// case "Wednesday":
// case "Thursday":
// case "Friday":
// console.log("It's a weekday");
// case "Saturday":
// case "Sunday":
// console.log("It's a weekend");  
// default:
// console.log("Invalid day");
// }

// In the above example, the cases for "Monday", "Tuesday", "Wednesday", "Thursday", and "Friday" all fall through to the same block of code that logs "It's a weekday". Similarly, the cases for "Saturday" and "Sunday" fall through to the block of code that logs "It's a weekend". This allows us to avoid repeating the same code for each case.

// Example 2: with break statement
let day11 = "Monday";
switch (day11) {
case "Monday":
case "Tuesday":
case "Wednesday":
case "Thursday":
case "Friday":
console.log("It's a weekday"); // 
break;
case "Saturday":
case "Sunday":
console.log("It's a weekend");
break; 
default:
console.log("Invalid day");
break;
} 
// In this example, we have included break statements at the end of each case block to prevent fall through. This means that only the code for the matching case will be executed, and the execution will not continue to the next case.
// Why "Monday" is a weekday? Because it falls through to the case "Tuesday", "Wednesday", "Thursday", and "Friday" which all log "It's a weekday". If we had not included the break statement, the execution would have continued to the next case and logged "It's a weekend" as well.