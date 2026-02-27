console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false

let value = null;
let value1 = undefined;
console.log(value);
console.log(value1);
console.log(typeof value); // Output: "object"
console.log(typeof value1); // Output: "undefined"
// Checking for null and undefined
if (value === null) {
    console.log("value is null");
}
if (value1 === undefined) {
    console.log("value1 is undefined");
}   