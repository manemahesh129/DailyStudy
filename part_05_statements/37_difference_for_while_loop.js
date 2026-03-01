// Difference between for and while loop
// The main difference between a for loop and a while loop is in their structure and use cases. A for loop is typically used when the number of iterations is known beforehand, while a while loop is more suitable when the number of iterations is not known and depends on a condition being met.
// For Loop Example:
for (let i = 0; i < 5; i++) { // This loop will run 5 times, with i taking values from 0 to 4
    console.log(i); // This will print the current value of i in each iteration
}
// While Loop Example:
let j = 0; // Initialization of the variable j
while (j < 5) { // This loop will continue as long as j is less than 5
    console.log(j); // This will print the current value of j in each iteration
    j++; // Increment j by 1 to eventually break the loop
}

// Key diferences in table format:
// | Aspect           | For Loop                          | While Loop                         |
// |------------------|-----------------------------------|------------------------------------|
// | Structure        | for (initialization; condition; increment) { ... } | while (condition) { ... }           |
// | Use Case         | When the number of iterations is known | When the number of iterations is not known and depends on a condition |
// | Initialization   | Done in the loop declaration        | Done before the loop starts         |
// | Increment/Decrement | Done in the loop declaration        | Done inside the loop body           |
// | Readability      | More concise for counting loops     | More flexible for complex conditions |

// In summary, use a for loop when you know how many times you want to iterate, and use a while loop when the number of iterations depends on a condition that may change during the execution of the loop.
