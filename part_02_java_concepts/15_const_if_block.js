const month = 12;
if (true) {
    console.log(month);
    const month = 11; // SyntaxError: Identifier 'month' has already been declared
}

// The above code will throw a SyntaxError because the variable 'month' is being redeclared within the same block scope. In JavaScript, variables declared with 'const' cannot be redeclared or reassigned within the same scope.
// To fix this issue, you can either remove the redeclaration of 'month' or use a different variable name for the inner declaration.