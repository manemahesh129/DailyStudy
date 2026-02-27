// 1. VAR
// Defining a function
function userOnboarded() { // Function declaration
    console.log(is_onboarded); // Output: undefined, because var is hoisted and initialized with undefined
    var is_onboarded = true; // variable declaration and initialization
    console.log("For VAR output is: " + is_onboarded); // Output: true, because the variable is now initialized with the value true
}
// Calling the function
userOnboarded(); // Output: undefined, true

// 2. LET
// TDZ (Temporal Dead Zone) is the time between the start of the block and the point where the variable is declared. During this time, the variable cannot be accessed and will throw a ReferenceError if you try to access it.
// TDZ occurs with let and const declarations, but not with var declarations. This is because var declarations are hoisted and initialized with undefined, while let and const declarations are hoisted but not initialized until their declaration is evaluated. Therefore, accessing a let or const variable before its declaration will result in a ReferenceError due to the TDZ.
function userOnboardedLet() { // Function declaration
    console.log(is_onboarded); // Output: ReferenceError(TDZ), because let is hoisted but not initialized
}
userOnboardedLet(); // Output: ReferenceError

// 3. CONST
function userOnboardedConst() { // Function declaration
    console.log(is_onboarded); // Output: ReferenceError, because const is hoisted but not initialized
}
userOnboardedConst(); // Output: ReferenceError

