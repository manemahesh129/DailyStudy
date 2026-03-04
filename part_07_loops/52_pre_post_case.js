// Pre Increment vs Post Increment Examples
// Difference in table format:

// | Operation       | Pre Increment (++a)           | Post Increment (a++)          |
// |-----------------|------------------------------|------------------------------|
// | Evaluation Order| Variable is incremented before its value is used in the expression. | Variable is used in the expression first, then it is incremented. |
// | Example         | let a = 5; console.log(++a); // Output: 6 | let b = 5; console.log(b++); // Output: 5 |
// | Final Value     | The variable is incremented before being printed. | The variable is printed before being incremented. |

let b = 32;
console.log(b++ + ++b);
// b++ -> 32 & b -> 33
// ++b -> 34 & b -> 34
// Exp: 32 + 34 --> 66 and value of b is 34
console.log(b);