// Interview Questions related to Switch Statement:

// 1. What is a switch statement and how does it work?
// A switch statement is a control flow statement that allows you to execute different blocks of code based on the value of an expression. It works by evaluating the expression and comparing it to the values specified in the case labels. If a match is found, the corresponding block of code is executed. If no match is found, the default block (if provided) is executed.

// 2. Can you use a switch statement with non-integer values?
// Yes, you can use a switch statement with non-integer values such as strings or even boolean values. The expression in the switch statement can be of any type that can be compared for equality.

// 3. How do you handle multiple cases that should execute the same block of code in a switch statement?
// You can handle multiple cases that should execute the same block of code by listing them one after another without a break statement in between. For example:

let code = 403;
switch (code) {
case 401:
case 402:
case 403:
case 404:
case 405:
case 406:
console.log("All comes under 'Error' group");
break;
default:
console.log("This status code is not belongs to 'Error' group")
}
// In this example, if the code is 401, 402, 403, 404, 405, or 406, it will execute the same block of code that logs "All comes under 'Error' group".

// 4. What is the purpose of the default case in a switch statement?
// The default case in a switch statement is executed if none of the cases match the expression. It is optional, but it can be useful to handle unexpected values or provide a fallback behavior. For example, if you are switching on a variable that can take on a range of values, the default case can be used to handle any values that are outside of that range.

// 5. Can you use a switch statement without a break statement?
// Yes, you can use a switch statement without a break statement, but it will cause the execution to "fall through" to the next case. This means that if a case matches, it will execute its block of code and then continue to execute the blocks of code for all subsequent cases until it encounters a break statement or reaches the end of the switch statement. This can be useful in certain situations, but it can also lead to unintended consequences if not used carefully.