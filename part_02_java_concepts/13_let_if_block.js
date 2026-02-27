let month="February";
if(true) {
    console.log(month); // Output: ReferenceError, because month is not accessible outside the block where it is declared
    let month='March'; // month is declared and initialized within the block scope
}

// Output: ReferenceError, because month is not accessible outside the block where it is declared
// This is because let and const declarations are block-scoped, meaning they are only accessible within the block they are declared in. In this case, the variable month declared with let inside the if block is not accessible outside of that block, resulting in a ReferenceError when we try to access it.