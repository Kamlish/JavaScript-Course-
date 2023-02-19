//  ❓ What is ECMA Script?

// ① JS was created in 1996.
// ② In 1997, it was then submitted to ECMA International for standardization, which
//   resulted in ECMAScript.
// ⓷ In 2015, ES6 decided to switch to anual releases of ECMAScript.
// ④  ECMAScript 2015 is also Known as ES6, 2016 is known as ES7 and so on..

// ⭐️  Features of ES6 (2015) to ES2019

// ES6 (2015)

    // Let and Const
    // Template Strings
    // Default Parameters
    // Destructuring (Array, Objects)
    // Arrow Function 
    // Object Properties 
    // Rest Operator (Introduced again to work with objects too with arrays)
    // Spread Operator (Introduced again to work with objects too with arrays)
    // Object entries (covered in ECMAScript 2017)
    // for..in , for..of (covered in array)
    // Map Objects (covered in array)
    // rest of the topics from ES6 covered in Array and Maths Object


    // 1️⃣ Let VS Const VS Var
        // Variable declared with "CONST" their value can not be changed / updated
        // Value of const must be initialized 
        // Variables declared with VAR and LET, their values can be changed/updated
        // Var - Function Scope
        // Let and Const - Block Scope {}
        //    variables are accessible within or outside block.
        // In Block Scope, Variable declared outside the block can be called inside block,
        //    and variables declared inside the block can not be called outside the block.
        
        console.log("1️⃣ Output")

        function bioData(){
            var myFirstName = "Kamlish";
            console.log(myFirstName);

            if (true){
                var myLastName = "Goswami";
                console.log("inner " +myLastName);
                console.log("inner " +myFirstName)
            }
            console.log("innerOuter " +myLastName);
        }
        bioData();

        console.log("2️⃣ Output")

    // 2️⃣ Template Literals (Template Strings)

        // Table of 12

        for (let i = 1; i<=10 ; i++){
            let tableOf = 12;
            console.log(`${tableOf} * ${i} = ${tableOf*i} `) // ` ` Backtick
        }


        console.log("3️⃣ Output")
    


    // 3️⃣ Default Parameters
        // Dafault function parameters allow named parameters to be initialized 
            // with default values if no value or undifined is passed. 


        function mul(a,b=7){ // Passing Value to parameter b as default 
            return a * b;
        }

        console.log(mul(3));
        console.log(mul(5,8))



        console.log("4️⃣ Output")
    


    // 4️⃣ Destructuring (Array or Object)
    // The destructuring assignment syntax is a Javascript expression that makes it possible to
    // .... unpack values from arrays, or properties from objects, into distinct variables.
        // Destructuring makes it easy to extract only what is needed.

        const vechile = ['Honda', 'H2', "RangeRover","BMW","Audi"]

        const [car, bike, jeep,   ,   , myCar = "Honda City" ] = vechile

        console.log(car); // output: Honda (string)
        console.log(myCar); //  output: Honda City
    

        // Destructuring comes in handy when a function returns an array

        function calculate (a,b){
            const add = a + b;
            const multiply = a * b;
            const divide = a / b;
            const subract = a - b;
            

            return [add, multiply,divide, subract]; 
        }

        const [add,multiply,divide,subtract] = calculate(60,5)
        console.log(subtract); // output: 55 (number)

        // ① Destructuring Output
        
            const study = {
                name: "Javascript",
                fees: 5000
            } 

            const { name, fees } = study;
            console.log(fees);


        // ② Destructuring Objects

        const course = {
                name : 'Javascript',
                duration: 6,
                fees : 6000
            }

            admission(course);

            function admission({name,duration,fees}){
                const message = `You have selected ${name} course and your fees is ${fees} for ${duration} months`
                console.log(message)
            }


        // Destructuring Nested Objects
            
        const subject = {
            name : 'Javascript',
            duration: 6,
            fees : 6000,
            registration: {
                k : 8,
                rollNo: 12,
                section: "A"
            }
        }

        admin(subject);

        function admin({name, duration, fees, registration: { rollNo} }) {
            const message1 = `You have selected ${name} course and your fees is ${fees} for ${duration} months. Your section is ${rollNo}`
            console.log(message1)
        }

    
    console.log("5️⃣ Output")


    // 5️⃣ Arrow Function 

        // Normal way of writing Function 

        console.log(addition());

        function addition(){
            let a = 3, b = 4;
            let add = a + b;
            return `Sum of ${a} and ${b} is ${add}`
        }

        // Convert it in Fat Arrow Function
        // In Arrow Function we can't call function before define
        // console.log(sum()); we can't call before defining arrow Function
        // Fat Arrow function does not support this argument

        const sum = () => `Sum of two numbers is ${(a=5)+(b=5)}`;
        console.log(sum());



    console.log("6️⃣ Output")

    // 6️⃣ Object Properties 

        // ① we can now use Dynamic properties inside an object to use mathematical operations and to call variables value as in key.

        let myName = 'Kamlish';

        const myBio = {
            [myName] : "Hello, How ae you?",
            [26+1] : "is my age"
        }

        console.log(myBio);

        // ② mo need to write key and value, if both are same

        let x = 'Kamlish';
        let y = '27';

        const bio = {x,y}
        console.log(bio);

        

    console.log("7️⃣ Output")

    // 7️⃣ Spread Operator 
    // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array 
    // ....  or object into another array or object.

        // ① With Arrays
        const colors = ['Red','Green','Blue','Yellow'];
        const mycolors = [...colors,'Black', 'Brown']

        console.log(mycolors);

        // ② with Objects
            // Notice the properties that did not match were combined, but the property that did match, 
            // ... color, was overwritten by the last object that was passed, updateMyVehicle. T
            // ....... The resulting color is now yellow.

        const myVehicle = {
            brand: 'Ford',
            model: 'Mustang',
            color: 'red'
        }
        const updateMyVehicle = {
            type: 'car',
            year: 2021, 
            color: 'yellow'
        }
        const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

        

        // 8️⃣ Rest Operator - Object feature came in 2018

        const person = {Name: 'Kamlish', age: 27, Location: 'Islamabad', country: 'Pakistan'}

        const data = {...person}

        console.log(person);

        
