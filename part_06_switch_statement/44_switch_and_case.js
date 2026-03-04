// Switch + Case:

// The switch statement is a control flow statement that allows you to execute different blocks of code based on the value of an expression. It is often used as an alternative to multiple if-else statements when you have a large number of conditions to check.

let marks = 85;
switch (true) {
case marks >= 90:
console.log("Grade A");
break;
case marks >= 80:
console.log("Grade B");
break;
case marks >= 70:
console.log("Grade C");
break;
case marks >= 60:
console.log("Grade D");
break;
case marks >= 50:
console.log("Grade E");
break;
default:
console.log("Grade F");
}