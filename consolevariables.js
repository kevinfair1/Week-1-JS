//! Console methods

console.time(); // Start timer to evaluate efficiency
console.log("We gave it this specific string! - Can log variables too!");
console.table(["Audi", "BMW", "Volkswagen"]);
console.error("Uhoh, error!");
console.warn("Don't even try it!");
// console.clear(); // Clears the console, uncomment to see it in action!
console.timeEnd(); // End the timer and show duration in console

//! Declaring and assigning variables

var myVariable; // Declaration

myVariable = "Hello World!"; // Assignment

console.log(myVariable); // Console log variable - Inspect in browser

//! Declaration and assignment in one

var myVariable2 = 543;

console.log(myVariable2);

//! Overriding variables

var myVariable3 = "Before override"; // Declare and assign
console.log(myVariable3);

myVariable3 = "After override, replaces original"; // Override myVariable3
console.log(myVariable3);

//! Use intuitive naming for variables

var welcomeMsg = "Hello, welcome to my website!";
var yearsOld = 34;
var carMake = "Chevrolet";

//! Data types

var string1 = "String"; // String - Can use ' or " quotation marks.

var myNumber = 27; // Number
var myNumber2 = 37.3298; // Can have decimal or float values

var isValid = true; // Boolean - can be true or false

var notNumber = NaN; // NaN = Not a Number

var undefinedVariable; // Declared, but nothing assigned = undefined

var nullData = null; // We implicitly apply no data to variable

var object1 = { type: "Car", make: "Chevy", model: "Silverado" }; // Object

var array1 = ["orange", "strawberry", "apple"]; // Array

//! Type Coercion

// Change Numbers to Strings using Number() and .toString()
// Hint: Look at colors in console to see difference in Data Types

var num1 = 5467;
var num2 = 3434.3823;

console.log(num1, num2); // Shows num1 is currently a Number

var changeToString1 = String(num1); // Converts num1 to a string
console.log(changeToString1);

var changeToString2 = num2.toString(); // Converts num2 to a string
console.log(changeToString2);

// Change strings to numbers using Number(), parseInt(), parseFloat()

var string1 = "329.56";

console.log(string1); // Shows string1 is currently a string

var changeToNumber = Number(string1); // Pass string1 to Number() function
console.log(changeToNumber);

var changeToInteger = parseInt(string1); // Pass string1 to parseInt() method
console.log(changeToInteger);

var changeToFloat = parseFloat(string1); // Pass string1 to parseFloat() method
console.log(changeToFloat);

// Can change booleans to numbers as well (0 = False, 1 = True)

var isValid = true;

var boolToNumber = Number(isValid);
console.log(boolToNumber);
