// var, let, const

// var is function scoped, let and const are block scoped
// var can be re-declared and updated, let can be updated but not re-declared, const cannot be updated or re-declared
// var is hoisted, let and const are not hoisted
// local variable with var can be accessed outside the block, but with let and const it cannot be accessed outside the block
// Global variable with var can be accessed anywhere in the code, but with let and const it cannot be accessed outside the block

// var example 
var a = 10; // global scope
function vartest() {
    var a = 15; // function scope
    console.log(a); // Output: 15
    if(true) { // block scope
    var a = 44; // function scope
    console.log(a); // Output: 44
    } 
    console.log("var value is: "+ a); // Output: 44
}
vartest(); // calling the function
// ??????????????????????????????????????????????????????????????????????????????????
let b = 7; // global scope
function lettest() {
    let b = 77; // function scope
    console.log(b); // Output: 77
    if(true) {
    let b = 777; // function scope
    console.log(b); // Output: 777
    } 
    console.log("Let value is: " +b); // Output: 77
}
lettest(); // calling the function

// ??????????????????????????????????????????????????????????????????????????????????
// const is used to declare a constant variable, which means its value cannot be changed once it is assigned. It is block scoped and cannot be re-declared or updated. It is not hoisted, which means it cannot be accessed before it is declared.
const c = 6 // global scope
function consttest() {
    const c = 66; // function scope
    console.log(c); // Output: 66
    if (true) {
        const c = 666; // block scope
        console.log(c); // Output: 666
    }
    console.log("Const value is: " + c);
}
consttest(); // calling the function


const pie = 3.14; // global scope
let radius = 5; // global scope
function circleArea(radius) {
    const area = pie * radius * radius; // function scope
    return area;
}
console.log(circleArea(radius
    
)); // calling the function, Output: 78.5