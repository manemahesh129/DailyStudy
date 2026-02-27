0 == "" // true - because 0 is loosely equal to an empty string after type coercion
0 === "" // false - because 0 is a number and "" is a string, no type coercion occurs

false == 0 // true - because false is loosely equal to 0 after type coercion
false === 0 // false - because false is a boolean and 0 is a number, no type coercion occurs

null == 0 // false - because null is only loosely equal to undefined, not to any other value
null === 0 // false - because null is a special value that is not equal to any other value, including itself
undefined == 0 // false - because undefined is only loosely equal to null, not to any other value
undefined === 0 // false - because undefined is a special value that is not equal to any other value, including itself

NaN == NaN // false - because NaN is not equal to anything, including itself
NaN === NaN // false - for the same reason as above

let a = 0/0;
console.log(a); // Output: NaN

null == undefined // true - because null is loosely equal to undefined
null === undefined // false - because null and undefined are different types, no type coercion occurs
