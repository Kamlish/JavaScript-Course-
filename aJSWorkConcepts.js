
    // How JS Works? ❓
    
        // Hoisting 
        // Scope chain and Lexical Scoping
        // Closure in JavaScript
        // Use strict Mode
        // This Keyword
        // Synchronous VS Asynchronous
        // Event loop



    // 1️⃣ Hoisting in JavaScript

    // In JavaScript, we have a Creation phase and Execution Phase.
    // Hoisting in Javascript is a mechanism where variables and functions declarations are
    // .... moved to the top of their scope before the code execute.
    
        // For instance: 👇🏻
            // Execution Phase
            console.log(myName); // output: undefined because JS by default will give undefined
            var myName ;
            myName = 'Kamlish';
    
            // Creation Phase
            // 1. var myName; 
            // 2. console.log(myName);
            // 3. myName = 'Kamlish';
    
        // In ES6, hoisting is avoided by using the let keyword instead of var.
        // variables declared with let are local to the surrounding block, not the entire function.
    
    
    
    
    console.log("2️⃣");
    
    // 2️⃣ Scope Chain and lexical Scoping in JavaScript
    
    // The scope chain is used to resolve the value of variables names in JS.
    
    // Scope chain in JS is lexically defined, which means that we can see what the scope chain will be
    // .... by looking at the code.
    
    // At the top, we have Global Scope, which is the window object in the browser.
    
    // Lexical scope means Now, the inner function can get the access to their parent function variables,
    // .... but the vice versa is not true.
    
        let a = "Hello guys, " // Global scope
    
        const first = () =>{
            let b = "How are you? "
    
                const second = () =>{
                    let c = "I am fine, thank you!";
                    console.log(a+b+c);
            }
            second(); 
            // console.log(a+b+c);    // I can't use see here
        }    
    
        first();
    
    
    
    console.log("3️⃣");
    
    // 3️⃣ Closure in JavaScript
    
    //  A closure is the combination of a function bundled together (enclosed) with reference to its 
    // .... surrounding state (with lexical environment )
    
    // In other words, a closure gives you access to an outer function's scope from an inner function.
    
    // In JavaScript, closure are created every time a function is created, at function creation time.
    


    // 4️⃣ Use strict Mode

    // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    // With strict mode, you can not use undeclared variables.

    "use strict"; // Should be defined at the top of program file.
    PI = 3.14;
    console.log(PI); // This will cause an error because PI is not declared


console.log("5️⃣");

// 5️⃣ Synchronous VS Asynchronous

    // ① Synchronous 

    // Synchronous means the code runs in a particular sequence of instructions given in the program. 
    // .... Each instruction waits for the previous instruction to complete its execution.

    const fun2 = () => {
        console.log("Function 2 is called");
    }

    const fun1 = () => {
        console.log("Function 1 is called");
        fun2();
        console.log("Function 1 is called Again");
    }

    fun1();

    // ② Asynchronous 

    // Functions running in parallel with other functions are called asynchronous
    // In other words, Asynchronous code execution allows to execution next instructions immediately 
    // .... and doesn't block the flow because of previous instructions.

    const func2 = () => {
        setTimeout (() => { // Hold in WEB API
            console.log("Function 2 is called");
        },2000);
    }

    const func1 = () => {
        console.log("Function 1 is called");
        func2();
        console.log("Function 1 is called Again");
    }

    func1();


    // Event loop 

    // In Event loop, we have Execution Stack, WEB APIS (Timers, DOM, AJAX/API/CALLS etc.) and Message Queue. 
    // .... In Message Queue, we have event loop. 
    




