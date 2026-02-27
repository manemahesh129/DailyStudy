// IF ELSE Interview Question: IQ Test
// Question: Write a JavaScript program that takes an IQ score as input and determines the corresponding IQ category based on the following criteria:
// - IQ score less than 70: "Below Average"
// - IQ score between 70 and 89: "Average"
// - IQ score between 90 and 109: "Above Average"
// - IQ score between 110 and 129: "Gifted"
// - IQ score 130 or above: "Genius" 

// True Conditions:
if ("hello") console.log("This will be printed because non-empty strings are truthy.");
if (42) console.log("This will be printed because non-zero numbers are truthy.");
if ([]) console.log("This will be printed because empty arrays are truthy.");
if ({}) console.log("This will be printed because empty objects are truthy.");
if (true) console.log("This will be printed because the condition is explicitly true.");

// False Conditions:
if ("") console.log("This will NOT be printed because an empty string is falsy.");
if (0) console.log("This will NOT be printed because zero is falsy.");
if (null) console.log("This will NOT be printed because null is falsy.");
if (undefined) console.log("This will NOT be printed because undefined is falsy.");
if (false) console.log("This will NOT be printed because the condition is explicitly false.");
if (NaN) console.log("This will NOT be printed because NaN is falsy.");