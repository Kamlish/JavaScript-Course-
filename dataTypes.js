// Data Types

// Primitive

let b = 'Kamlish'
console.log(typeof(b)); //String

let c = ' ';
console.log(typeof(c)); //String

let d = 4;
console.log(typeof(d)); //Number 

let isStudying = true;
let isNotStudying = false;
console.log(typeof(isStudying)); //Boolean
console.log(typeof(isNotStudying)); //Boolean


// Composite 

let arr = [1,2,3,4,5]
console.log(typeof(arr));  // Objects


const details = {
    name : 'kamlish',
    age : 27
}
console.log(typeof(details)); // Objects


function greetings(){
    return "Namasty"
}
console.log(typeof(greetings)) // returns function



// Special Data Type

let car = null;
console.log(typeof(car)); // retuens Object (Bug)

let bike = undefined;
console.log(typeof(bike)); //Undefined 

let a;
console.log(typeof(a)); //Undefined 





// DataTypes practice
console.log(10 + '20') //Concat 
//Outpu: 1020

console.log(10 - '20') //Bug
//Outpu: -10

console.log(16 + 4 + "Kamlish") //Evaluates LeftToRight
//Outpu: 20Kamlish

console.log("Kamlish" + 19 + 95) //Evaluates LeftToRight
//Outpu: Kamlish1995

console.log("Kamlish " + 19 + 95) //Evaluates LeftToRight
//Outpu: Kamlish 1995

console.log('Kamlish' - 'Goswami')
//Outpu: NaN (Not a number)

console.log(true + true ); // 1 True, 0 False
//Output: 2

console.log(true - false);
//Output: 1



// Interview Question 🤔

//What is NaN?
/*
1. NaN is a property of the global object
2. In other words, it is variable in global scope.
3. The initial value of NaN is not a number 
4. isNaN() 
*/


// Differene bw Null and Undefined 
/* 
 Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript. 
 Undefined: It means the value does not exist in the compiler.
*/

