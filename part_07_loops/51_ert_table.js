let b = 25;
console.log(b++ + b); // 25 + 26 = 51
// Explanation: In this expression, the value of b (25) is used first, and then b is incremented to 26. So the expression evaluates to 25 + 26, which equals 51.

// ERT Table for b++ + b:
// | Step | Expression       | Value of b before | Value of b after | Result of Expression |
// |------|------------------|-------------------|------------------|----------------------|
// | 1    | b++ + b          | 25                | 26               | 25 + 26 = 51         |

let c = 25;
console.log(++c + c); // 26 + 26 = 52
// Explanation: In this expression, the value of c is incremented first to 26, and then the new value of c (26) is used in the expression. So the expression evaluates to 26 + 26, which equals 52.
// ERT Table for ++c + c:
// | Step | Expression       | Value of c before | Value of c after | Result of Expression |
// |------|------------------|-------------------|------------------|----------------------|
// | 1    | ++c + c          | 25                | 26               | 26 + 26 = 52         |