// Switch with duplicate cases:

// In a switch statement, you cannot have duplicate case values. Each case must have a unique value. If you try to use duplicate case values, it will result in a syntax error.
// For example, the following code will throw an error because there are duplicate case values (case 1 and case 2 are repeated):

let day = 3;
switch (day) {
case 1:
console.log("Monday");
break;
case 1: // Duplicate case value
console.log("Duplicate case");
break;
} // SyntaxError: Duplicate case label.

let marks = 85; // This variable is used to determine the grade based on the marks obtained.
switch(marks) { // The switch statement evaluates the expression (marks) and compares it to the case values.
    case 85:
        let grade1 = "A"; // This variable is only accessible within this case block
        console.log("Grade is:" + grade1); // This will log "Grade is: A"
        break; // Break statement is used to exit the switch statement after executing the matched case block. If break is not used, the execution will continue to the next case block, which can lead to unintended consequences.
    case 85: // Duplicate case value
        let grade2 = "B"; // This variable is only accessible within this case block
        console.log("Grade is:" + grade2); // This will log "Grade is: B", but it will never be reached because the previous case with the same value (case 85) will be executed first and the break statement will exit the switch statement.
        break; // This break statement will never be reached because the previous case with the same value (case 85) will be executed first and the break statement will exit the switch statement.
}
// In this example, the second case with the value 85 will never be executed because the first case with the same value (case 85) will be executed first and the break statement will exit the switch statement. This is why duplicate case values are not allowed in a switch statement.