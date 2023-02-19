// Arrays ❓
    // when we use var, we can stored only one value at a time.
    // when we feel like storing multiple values in one variable instead 
    //      of var, we will use an array.
    // In JS, we have an array class, and arrays are the prototype of this class.
    // In JS, we can add multiple datatypes as an elements in an array
    //      var friends = ['kamlish', 26, true]
    // In an array, first element is called Lower index/boundry. whereas, last element
    //      is called upper index/boundry.
    // Index always starts with 0.

    
            // Traversal of an Array
            // Searching and filter in an Array
            // Sort and Compare an Array.
            // Insert, Add, Replace and Delete Elements in Array (CRUD)
            // Map(), Redude(), Filter() 


    console.log("1️⃣");


    // 1️⃣ Traversal of an Array
    
    var friends = ["Kamlish", "Anusia","Neha", "Zee"]

        // ① If we want to get the single data or chande the data at a time.
        // index starts from 0

        console.log(friends[2]); // Output: Neha


        console.log(friends[0] = "Iqra") 
        console.log(friends) // Output: [ 'Iqra', 'Anusia', 'Neha', 'Zee' ]



        // ② to check length of elements of an array (length property)
        // length starts from 1

        console.log(friends.length) // Output: 4
        console.log(friends[friends.length-1]); // Output: Zee



        // ⓷ To nevigate we use for loop
        // After ES6 we have for..in and for..of loop too

            // ① for..in (ES6)
            // for..in loop prints index of all elements of particular array
            
            for (let elements in friends){
            console.log(elements); // Output: 0,1,2,3
            }

            // ② for..of (ES6)
            // for..of loop prints all elements of particular array

            for (let elements of friends){
            console.log(elements);   // Output: Iqra, Anusia, Neha, Zee
            }

            // ⓷  for..each (ES5)
            // for..each loop calls a function for each element in the array
            // for..each is combination of for..in and for..of
            // in for..each loop we can get elements,index and array of belonging at same time
            // in call back we have to pass element, index and array

            friends.forEach(function(element, index,array){
                console.log(element,index); // Output: Iqra 0, Anusia 1, Neha 2, Zee 3
            })

                // for.. each with Arrow Function 
                // we can't use this argument with arrow function

                friends.forEach((element,index,array) => {
                    console.log(element,index); 
                });



    console.log("2️⃣")


// 2️⃣ Search and filter in an Array
    var books = ['Javascipt', 'Python', 'Java','Python', 'C'];

    // ① Searching

        // ① Array.prototype.indexOf() - Method
        // Returns the first (least) index of an elenent within the array equal
        // ..... to an element, or -1 if none is found. 
        // It searches the element from first to last index number.
        // It is a case sensitive.

            console.log(books.indexOf("Python")); // Output: 1
            console.log(books.indexOf("C")); // Output: 4
            console.log(books.indexOf('Java', 3)); // Output: -1 (Because starts from index 2 to search)
        

        // ② Array.prototype.lastIndexOf() - Method
        // Returns the last (greatest) index of an elenent within the array equal
        // ..... to an element, or -1 if none is found. 
        // It searches the element from last to first index number.

             console.log(books.lastIndexOf("Python")); // Output: 3


        // ⓷ Array.prototype.includes - Method (ES7 - 2016)
        // Determines whether the array contains a value, returning true or false as appropriate.

            console.log(books.includes("Python")); // Output: true
            console.log(books.includes("C++")); // Output: false

        
    // ② Filteration

    const prices = [200,450,500,600,610,870]

        // ① Array.prototype.find() - Method
        // aar.find(callback(element[,index[,array]])[,thisArg])
        // Return the found element in the array, if some elements in the array satifies
        // ..... the testing function, or undefined if not found.
        // Only problem is that it return only one element.
        // If the condion does not satisfies, return undefined
    

        console.log(prices.find((currVal) => currVal > 500)); // Output: 600
        console.log(prices.find((currVal) => currVal > 900)); // Output: undefined

        
        // ② Array.prototype.findIndex() - Method
        // aar.find(callback(element[,index[,array]])[,thisArg])
        // Return the found index in the array, if an elements in the array satifies
        // ..... the testing function, or undefined if not found.
        // Only problem is that it return only one element's index.
        // If the condion does not satisfies, return -1

        console.log(prices.findIndex((currVal) => currVal > 500)); // Output: 3
        console.log(prices.findIndex((currVal) => currVal > 900)); // Output: -1




    console.log("3️⃣");

    // 3️⃣ Sort an Array

        // Sort

            // ① Array.prototype.sort()
            // The sort() method sorts the elements of an array in the place and returns the sorted array.
            // The default sort is ascending, built upon converting the elements into strings, then
            // ..... comparing their sequences of UFT-16 code units values.
            // sort() method will produce incorrect result, when sorting numbers
        
            const months = ['Mar', 'Feb', 'Jan', 'Aug', 'Dec','Apr','May'];
            const date = [20,5,3,23,30];

            console.log(months.sort()); // Output : ['Apr', 'Aug','Dec', 'Feb','Jan', 'Mar','May']
            console.log(date.sort()); // Output : [ 20, 23, 3, 30, 5 ]

            

    console.log("4️⃣");

    // 4️⃣ creat/insert, Read, Replace/update and Delete Elements in Array (CRUD)

    const animals = ['Dog','Cat', 'Cow', 'Horse'];

        // ① Array.prototype.push();
        // The push method adds one or more elements to the end of an array and returns new length of an array.
        // ['Dog','Cat', 'Cow', 'Horse'];

        console.log(animals.push('Lion'));  // output: 5
        console.log(animals); // output: [ 'Dog', 'Cat', 'Cow', 'Horse', 'Lion' ]


        // ② Array.prototype.unshift();
        // The unshift method adds one or more elements to the beginning of an array and returns new length of an array.
        // [ 'Dog', 'Cat', 'Cow', 'Horse', 'Lion' ]

        console.log(animals.unshift('Tiger')); // output: 6
        console.log(animals); // output: ['Tiger', 'Dog', 'Cat', 'Cow', 'Horse', 'Lion' ]


        // ⓷ Array.prototype.pop();
        // The pop method removes the last elements of an array and returns that element.
        // This method changes the length of the array.
        // ['Tiger', 'Dog', 'Cat', 'Cow', 'Horse', 'Lion' ]

        console.log(animals.pop()); // output: Lion
        console.log(animals); // output: [ 'Tiger', 'Dog', 'Cat', 'Cow', 'Horse' ]


        // ⓸ Array.prototype.shift();
        // The shift method removes the first elements of an array and returns that element.
        // This method changes the length of the array.
        // [ 'Tiger', 'Dog', 'Cat', 'Cow', 'Horse' ]

        console.log(animals.shift()); // output: Tiger
        console.log(animals); // output: [ 'Dog', 'Cat', 'Cow', 'Horse']


        // ⓹ Array.prototype.splice();
        // Adds, update or removes elements from an array.
        // splice method pass an empty array 
        // [ 'Dog', 'Cat', 'Cow', 'Horse']

            // Add Hen to the end of array
            const addAnimal = animals.splice(animals.length,0,"Hen");
            console.log(animals);// output:  [ 'Dog', 'Cat', 'Cow', 'Horse','Hen']

            // Update Horse to horse 
            // [ 'Dog', 'Cat', 'Cow', 'Horse','Hen']

            const indexOfAnimal = animals.indexOf('Horse');

            if (indexOfAnimal != -1){
                const updateAnimal = animals.splice(indexOfAnimal,1,'horse');
                console.log(animals); // Output: [ 'Dog', 'Cat', 'Cow', 'horse', 'Hen' ]
            }
            else{
                console.log("No such data found");
            }

            // Delete Horse from an array
            // Splice method return deleted value
            //const indexOfAnimal = animals.indexOf('horse');

            if (indexOfAnimal != -1){ 
                const deleteAnimal = animals.splice(indexOfAnimal,1);
                console.log(animals);  // Output: [ 'Dog', 'Cat', 'Cow', 'Hen' ]
            }
            else{
                console.log("No such data found");
            }



    console.log("5️⃣");

    // 5️⃣ Filter, Map and Reduce Method 
    
    const pricesOfBooks = [500, 2500,350,200]

        // ① Array.prototype.filter() - Method
        // Returns a new array containing all elements of the calling array for which the provided 
        // .....filtering function returns true
        // If the condition does not satisfy, return [] (empty array)
            
        const priceTag = pricesOfBooks.filter((elements, index) => {
            return elements > 400;
        });

        console.log(priceTag);

        // ② Array.prototype.Map() - Method
        // let newArray = aar.map(callback(currentValue[,index[,array]])   { 
        //          return element for newArray, after executing something
        //      }[, thisArg])
        // Returns a new array containing the results of calling a function on every element in this array.
        // Returns a new array without mutuating the original array.
        // map() method is chainable because we can attach reduce(),sort(),filter() and so on after 
        // ..... performing a map() method on an array

        let newArrEx1 = pricesOfBooks.map((currentElement,index,array) => {
            return currentElement > 200;
        })

        console.log(newArrEx1);  // output: [ true, true, true, false ]

        let newArrEx2 = pricesOfBooks.map((currentElement,index,array) => {
            return `Index  no = ${index} and the value is ${currentElement} belong to ${array}`
        })

        console.log(newArrEx2);



        // ⓷ rray.prototype.reduce() - Method
        // The reduce() method executes a reducer function that you provide on each element of the array
        // ..... resulting in a single output value.
        // Accumulator, currentvalue, currentIndex, sourceArray
        // Accumulator means (aik sath jama karna)
        // Jab humain array main se sirf single value chahye,(total product, total sum etc) we use reduce method. 


        let sum  = pricesOfBooks.reduce((Accumulator, elements,index,array) => {
            return Accumulator += elements;
        },9) // 9 is a initial value that is already in accumulator

        console.log(sum);

        // flatten an array means to convert the 3d and 2d array into a single array.
        // After ES20 a new method released that will convert nested 2D and 3D array too.
        // After ES20, we don't use reduce method to flattern an array.

        let capital = [['Pakistan', 'Islamabad'], ['India', 'Delhi'], ['America','Washington']]

        let newCapitalArr = capital.reduce((Accumulator,currEle) => {
            return Accumulator.concat(currEle);
        })

        
        console.log(newCapitalArr); // [ 'Pakistan', 'Islamabad', 'India', 'Delhi', 'America', 'Washington' ]

const numt = [...new Set(["c","a","b","a"])]

console.log(numt.sort());



    console.log("6️⃣ Challenge");

    // 💡 Challenge 
        // 1: Find the square root of each element in an array?
        // 2: Multiply each element by 2 and return only those elements which are greater than 10?

            // Sol1:
                let arr1 = [25,36,49,64,81];

                const arrSqrt = arr1.map((elements) => Math.sqrt(elements))
                console.log(arrSqrt); // output: [ '5', '6', '7', '8', '9' ]
                

            // sol2: 
                let arr2 = [2,3,4,6,8];  
                
                const arrGreater = arr2.map((elements) => elements * 2).filter((elements) => elements>10) // Chainable Method

                console.log(arrGreater); // Output : [ 12, 16 ]
