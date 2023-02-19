// Advanced JavaScript

    // Event Propagation (Event Bubbling and Event Capturing)
    // Higher Order Function
    // Callback Function
    // Function Currying 
    // CallBack Hell
    // AJAX call using XMLHttpRequest
    // JSON 
    // Fetch API (Application Programming Interface)
    // Promises - (ES6)
    // Async-Await - (ES2017 - ES8)
    // Error Handling



// 1️⃣ Event Propagation (Event Bubbling and Event Capturing)

// The event propagation mode determines in which order the elements receive the event.
// By default is event bubbling.

    // ① Event Bubbling
    // With Event bubbling, the event is captured and handled by the innermost element
    // .... and then propagated to outer elements.


    // ② Event Capturing
    // With Event capturing, the event is  first captured by the outermost element 
    // .... and propagated to the inner elements.
    // Capturing is also called "trickling", which helps remember the propagation oder.

    /*

    <script>
        function showTagName() {
            alert("Capturing: "+ this.tagName);
        }
    
        var elements = document.querySelectorAll("div, p, a");
        for(let elem of elements) {
            elem.addEventListener("click", showTagName, false);
        }

    In Event Propagation the third argument of addEventListener is by default false and it will work as bubbling 
    whereas if it is true then it will work as capturing.
    </script>

    */


console.log("2️⃣ and 3️⃣");



// 2️⃣ Higher Order Function

// A function that accepts another function as an arguments is called HOF.


// 3️⃣ Callback Function

// A function that is passed into another function as an argument. 
// This function can then be invoked during the execution of that higher order function.

    const add = ((a,b) =>{
            return a + b;
    })

    const pow = ((a,b) => {
        return Math.pow(a,b);
    });

    const calculator = ((num1,num2, operator) =>{
        return operator(num1,num2);
    });

    console.log(calculator(5,2,pow));

    // Calculator() is HOF, whereas, add() and pow() are CBF.




console.log("4️⃣");

// 4️⃣ Function Currying

// Currying is a technique of evaluating function with multiple arguments, into sequence
// .... of function with single argument.

/*
In other words, when a function, instead of taking all arguments at one time, 
takes the first one and return a new function that takes the second one and 
returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
That is, when we turn a function call add(1,2,3) into add(1)(2)(3) . 
By using this technique, the little piece can be configured and reused with ease.
Currying helps you to avoid passing the same variable again and again.
*/

const sum = (num1) => (num2) =>(num3) => console.log(num1+num2+num3);

sum(5)(3)(8)



console.log("5️⃣");




// 5️⃣ CallBack Hell

/*
Callback Hell is essentially nested callbacks stacked below one another forming a pyramid 
structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure 
that affects the readability and maintainability of the code. 
*/

setTimeout = (() =>{
    console.log("❶ Work is done!");
    setTimeout = (() =>{
        console.log("❷ Work is done!");
        setTimeout = (() =>{
            console.log("❸ Work is done!");
            setTimeout = (() =>{
                console.log("❹ Work is done!");
                setTimeout = (() =>{
                    console.log("❺ Work is done!");
                    setTimeout = (() =>{
                        console.log("❻ Work is done!");
                    },1000);

                },1000);

            },2000);

        },1000);

    },1000);

},1000);




// 6️⃣ AJAX call using XMLHttpRequest

// Asynchronous JavaScript and XML, or Ajax, is an approach to using a number of existing technologies together, 
// ... including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object. 

// XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL 
// .... without having to do a full page refresh. This enables a Web page to update just part of a 
// .... page without disrupting what the user is doing.




console.log("7️⃣");

// 7️⃣ JSON (JavaScript Object Notation)

// JSON is a data serialization format that is used to transfer data between the browser and the server.

    // JSON.stringify turn a JS object into a JSON text and stores that JSON text in a string.

    var my_object = {key1: "some text", key2: true, key3: 5}

    var my_object_as_string = JSON.stringify(my_object);

    console.log(my_object_as_string); // output: {"key1":"some text","key2":true,"key3":5}

    console.log(typeof(my_object_as_string)); // output: string 


    // JSON.parse turns a string of JSON text into a JS object. 

    var my_object_as_object = JSON.parse(my_object_as_string);

    console.log(my_object_as_object ); // output: { key1: 'some text', key2: true, key3: 5 }

    console.log(typeof(my_object_as_object)); // output: object



console.log("9️⃣");


// 9️⃣ Promises

// A Promise is an object that may produce a single value sometime in the future. 
// .... Either a resolve value or reject value.

// Suppose, I make a promise that I Will complete Front-end-Development by this year.
// so there could be two possibilities either I will complete (success) or I will not (failure).

// ① Promise has 3 possible states:

    // ① pending - (not sure)

    // ② resolved - (success)
        // The then() method is used with the callback when the promise is resolved.

    // ⓷ rejected - (failure)
        // The catch() method is used with the callback when the promise is rejected.


     // Create Promise 
    const myPromise = new Promise((resolve,reject) => {
        // condition for resolve and reject
        const isCourseCompleted = false;
        if (isCourseCompleted){
            resolve('Promise resolved: Will become Front-End-Developer');
        } else {
            reject('Promise rejected: Will not become Front-End-Developer');
        }
    });

    myPromise.then(success => console.log(`Then block Response:`, success)).catch(failure => console.log(`Catch block Response:`, failure));

// ② Methods
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve('promise1 resolved');
        }, 4000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve('promise2 resolved');
        }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
            reject(`promise3 Rejected`);
        }, 1000);
});

// ① Promise.all() 
// Promise.all() is a promise that takes an (or an iterable) of promises as an input.
// It gets resolved when all the promises must get resolved otherwise rejected.

Promise.all([promise1, promise2,promise3]).then(result => console.log(`Success`,result)).catch(err => console.log(`Failed`, err))
// output: Failed promise3 Rejected

// ② Promise.allSettled()
// It will not fail and will return a list of values of object with with two properties.
// The status return all promises and their reasons either rejected or fulfilled.

Promise.allSettled([promise1, promise2,promise3]).then(result => console.log(`Success`,result)).catch(err => console.log(`Failed`, err))
// output: Success [{ status: 'fulfilled', value: 'promise1 resolved' },{ status: 'fulfilled', value: 'promise2 resolved' },
// { status: 'rejected', reason: 'promise3 Rejected' }]

// ⓷ Promise.race()
// it will return a promise that fulfils or reject as soon as one of the promises in iterable fulfils or rejects.

Promise.race([promise1, promise2,promise3]).then(result => console.log(`Success`,result)).catch(err => console.log(`Failed`, err))
// output: Failed promise3 Rejected

// ⓸ Promise.any()
// Promise any will return first fulfilled promise, whereas promise.race()  will return first settled promise.

Promise.any([promise1, promise2,promise3]).then(result => console.log(`Success`,result)).catch(err => console.log(`Failed`, err))
// output: Success promise2 resolved


console.log("🔟");

// 8️⃣ Fetch API 

// The Fetch API interface allows web browser to make HTTP requests to web servers.
// If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way with promises.

    const joke = document.querySelector("#jokes")
    const btn = document.querySelector("#jokesBtn")

    const generateJokes = () =>{
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
        fetch("https://icanhazdadjoke.com/", setHeader).then((res) => res.json())
        .then((data) => joke.innerHTML = data.joke).catch((err) => console.log("API",err))
    }

    btn.addEventListener("click", generateJokes);
    generateJokes();




// 🔟 Async-Await - (ES2017 - ES8) with Error Handling

// The keyword async before a function makes the function return a promise.
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution 
// .... and wait for a resolved promise before it continues:

    const quote = document.querySelector("#quotes")
    const button = document.querySelector("#quotesBtn")


    const quotes = async () =>{
        try{
            const setHeaders = {
                headers: {
                    'X-RapidAPI-Key': 'd556b2775fmsh59515b77f027818p1a25c6jsn7753e74132aa',
                    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
                    }
                }
                const res = await fetch('https://famous-quotes4.p.rapidapi.com/random?category=education&count=1',setHeaders)
                const data = await res.json();
                quote.innerHTML = data.map(a=>a.text);

        }
        catch (error) {
            console.log(`The error is ${error}`);

        }
    }

    button.addEventListener("click", quotes);
    quotes(); // to call it on refresh 
    
