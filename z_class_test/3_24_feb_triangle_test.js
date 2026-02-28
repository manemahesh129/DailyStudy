// ✅ Triangle Classifier:

// Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), 
// or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a = 3 // In the above code, we have three variables a, b, and c representing the lengths of the sides of a triangle.
let b = 4 // We use an if-else statement to check the conditions for classifying the triangle.
let c = 4 // The first condition checks if all sides are equal (equilateral), the second condition checks if exactly two sides are equal (isosceles), and the else statement classifies it as scalene if no sides are equal.
if (a === b && b === c && a === c) {        // If all sides are equal, the triangle is classified as equilateral.
console.log("Triangle is 'Equilateral'");
} else if (a === b || b === c || a === c) { // If exactly two sides are equal, the triangle is classified as isosceles.
console.log("Triangle is 'Isosceles'");
} else {                                    // If no sides are equal, the triangle is classified as scalene.
console.log("Triangle is 'Scalene'");
}

// Things to note:
// - The === operator is used to check for strict equality, ensuring that both the value and type are the same.
// - The || operator is used to check if at least one of the conditions is true for the isosceles classification.
// - The else statement serves as a catch-all for any case that does not meet the previous conditions, classifying it as scalene.