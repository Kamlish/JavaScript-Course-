
// 1️⃣ Function Definition
function sum(){ 
    var a = 5 , b = 12;
    add = a+b;
    console.log(add);
}


// 2️⃣ Calling a Function
sum();   


console.log("______________________________________")




// 3️⃣ Function Parameter vs Function Arguments

// Functions parameters are the names listed in the function's definition.
// Functions arguments are the real values pass to the functions

function mul (a,b){ // a, b are parameters
    var multiply = a * b;
    console.log(multiply);
}

mul(20,30); // 20, 30 arguments 


console.log("______________________________________")




//  4️⃣ Function expression 

function mul (a,b){ 
    var multiply = a * b;
    console.log(multiply);
}

var mulResult = mul(20,40);  // Function Expression


console.log("______________________________________")



// 5️⃣ Return Keyword
// when JS reaches a return statment, the function will stop executing.
// Functions often computer a return value.
// The return value is "returned" to the caller

function sub (a,b){ 
    return division = a - b;  // return value to pass to "subResult"  
}

var subResult = sub(30,20) // Function as variable (expression )
console.log(`The subtraction of number1 and number2 is ${subResult}`); 


console.log("______________________________________")



// 6️⃣ Anonymous Function 

// A function expression is similar to and has the same syntax as a Function declaration one can define "named".
// Function expression (where the name of the exp might be used in the call stack for example) or "anonymous" exp

var sub = function (a,b){  // without name (subResult) we call "anonymous function"
    return division = a - b;     // with name (subResult) we call "function expression"
}
 
console.log(sub(50,60))


var subResult1 = sub(50,20) 
console.log(`The subtraction of number1 and number2 is ${subResult1}`); 



// Modern JS (EcmaScript)