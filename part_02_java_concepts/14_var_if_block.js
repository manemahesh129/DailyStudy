var month="February";
if(true) {
    console.log(month); // Output: February, because var is function-scoped and accessible within the block
    var month='March'; // month is declared and initialized within the block scope
}

// Output: March, because var is function-scoped and the variable month is accessible within the block and has been updated to 'March'.
// This is because var declarations are function-scoped, meaning they are accessible within the entire function they are declared in, regardless of block scope. In this case, the variable month declared with var inside the if block is accessible outside of that block and retains its updated value 'March'.