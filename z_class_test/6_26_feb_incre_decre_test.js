let a = 5; 
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;

console.log(b);
// Explanation of b:
// 1. a++: This is a post-increment, so it uses the current value of a (which is 5) and then increments a to 6.
// 2. ++a: This is a pre-increment, so it increments a first (from 6 to 7) and then uses the new value (7).
// Therefore, b = 5 (from a++) + 7 (from ++a) = 12.
console.log(a);
// Explanation of a after b:
// After the first part of the expression (a++), a becomes 6.
// After the second part of the expression (++a), a becomes 7.
// So, after calculating b, a is 7.
// Now, we calculate c using the updated value of a (which is 7).
console.log(c);
// Explanation of c:
// 1. a++: This is a post-increment, so it uses the current value of a (which is 7) and then increments a to 8.
// 2. ++a: This is a pre-increment, so it increments a first (from 8 to 9) and then uses the new value (9).
// 3. ++a: This is a pre-increment, so it increments a first (from 9 to 10) and then uses the new value (10).
// 4. ++a: This is a pre-increment, so it increments a first (from 10 to 11) and then uses the new value (11).
// 5. a++: This is a post-increment, so it uses the current value of a (which is 11) and then increments a to 12.
// Therefore, c = 7 (from a++) + 9 (from ++a) + 10 (from ++a) + 11 (from ++a) + 11 (from a++) = 48.