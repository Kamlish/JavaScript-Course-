// What is an Object? ❓
// Storing variables and functions together in one container, we can refer this as an object.

// What is an Object Literal ❓
// Object Literal is simply a key: value pair data structure.

    // 1️⃣ How to create an Object?

        // ① 1st way 

        let bioData = {
            myName: "Kamlish",
            myAge: 27,
            getData: function(){  // To call function in object is Method not function.
                console.log(`My name is ${bioData.myName} and I am ${bioData. myAge} old.`);
            }
        }

        bioData.getData();

        // ② 2nd way no need to write functions as well after ES6

        let bioData1 = {
            myName: "Kamlish",
            myAge: 27,
            getData(){  // To call function in object is Method not function.
                console.log(`My name is ${bioData.myName} and I am ${bioData. myAge} old.`);
            }
        }

        bioData1.getData();

        // ⓷ Object as a value inside an object

        let bioData3 = {
            myName: {
                firstNAme : 'Kamlish',
                lastName : 'Goswami'
            },
            myAge: 27,
            getData(){  // To call function in object is Method not function.
                console.log(`My name is ${bioData.myName} and I am ${bioData. myAge} old.`);
            }
        }

        console.log((bioData3.myName.firstNAme));

    
    // 2️⃣ What is 'this' Object?

    // The definition of 'this' object is that contain the current context.

    // The 'this' object can have different values depending on where it is placed.

        // Example ① 
        // it refers to the current context and that is window global object
        console.log(this);
        //console.log(this.alert("Awesome"));

        // Example ②
        function myName(){
            console.log(this);  // current context is window global object not function
        }
        myName();

        // Example ⓷
        var myName = "kamlish";
        function myName1 (){
            console.log(this.myName);  
        }
        myName1();

        // Example ③
        const obj = {
            myAge: 26,
            myName() {
                console.log(this.myAge);   // current context of 'this' is now object 
            }
        }
        obj.myName();

        // Example ④
        const obj1 = {
            myAge: 26,
            myName : () => {
                console.log(this);   // current context 'this' is window object b/c it doesn't work with Arrow function.
            }
        }
        obj1.myName();
        
         // Example ⑤
        const obj2 = {
            myName: {
                firstName: 'Kamlish',
                surname: 'Goswami'
            },
            myAge: 26,
            getData() {
                console.log(`My name is ${this.myName.firstName} and my surname is ${this.myName.surname}, I am ${this.myAge} years old`); 
            }
        }
        obj2.getData();


        // call method is used to call the method of another object or with call(),
        // ... an Object can use a method belonging to another object

        // But as per other it is simply the way to use the 'this' keyword or another object


