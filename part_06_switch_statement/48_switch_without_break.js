// Switch statements without break statements will execute all the cases after the matched case until it reaches the end of the switch statement. This is known as "fall-through" behavior. It can be useful in certain scenarios, but it can also lead to unintended consequences if not used carefully. Always remember to include break statements if you want to prevent fall-through behavior.
// Example of a switch statement without break statements:
// In this example, since there are no break statements, once a case is matched, the code will continue to execute the subsequent cases until it reaches the end of the switch statement. This is known as "fall-through" behavior.

let day = 3
switch (day) {
case 1:
console.log("Monday");
case 2:
console.log("Tuesday");
case 3:
console.log("Wednesday");
case 4:
console.log("Thursday");
case 5:
console.log("Friday");
case 6:
console.log("Saturday");
case 7:
console.log("Sunday");
}