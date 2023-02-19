//  Arithmetic Op (Increment or Decrement operators 🤔)

// Increment Operator ++x, x++
/*
    1. If used postfix, x++ :
    the increment operator increments and returns the value before incrementing.
*/

 var x = 5;
 var y = x++;  
 console.log(x); // Output: 6
 console.log(y); // Output: 5
 

/*
    2. If used prefix, ++x :
    the increment operator increments and returns the value after incrementing
*/

var x = 5;
var y = ++x; 
console.log(x); // Output: 6
console.log(y); // Output: 6

// Decrement Operator logic is same as Increment OP




//___________________________________________________________



// Logical Operator 🤔
//Logical NOT (!)

console.log(!true); // Output: False
console.log(!false); // Output: true






//__________________________________________________________

// Challenge  💡


//Program to Swap two Number using third variable

var a = 3;
var b = 5;
var c = b; // c = 5
var b = a; // a = 3
var a = c; // a = 5

console.log(a); // a = 5
console.log(b); // b = 3


//Program to Swap two Number without using third variable
 
var a = 5;
var b = 7;

a = a + b;  // a = 12
b = a - b;  // b = 5
a = a - b; // a = 7 

console.log(a); // a = 7
console.log(b); // b = 5


let x;
const x = 4;


