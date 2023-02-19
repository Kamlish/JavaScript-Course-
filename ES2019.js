//ECMAScript 2019 - ES10

    // String.trimStart()
    // String.trimEnd()
    // Object.fromEntries
    // Array.flat()
    // Array.flatMap()
    // Revised Array.Sort()
    // Revised JSON.stringify()
    // Separator symbols allowed in string literals
    // Revised Function.toString()


console.log("1️⃣");

// 1️⃣ String.trimStart()
 // The trimStart() method works like trim(), but removes whitespace only from the start of a string.

    let text1 = "     Hello World!";
    let text2 = text1.trimStart();

    console.log(text1.length); // output: 17
    console.log(text2.length); // output: 12


console.log("2️⃣");

// 2️⃣ String.trimEnd()
 // The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

    let text3 = "Hello World!         ";
    let text4 = text3.trimEnd();

    console.log(text3.length); // output: 21
    console.log(text4.length); // output: 12



console.log("3️⃣");

// 3️⃣ Object.fromEntries()
    // The fromEntries() method creates an object from iterable key / value pairs.
    // Object.entries() method creates an array from an object and ....
    // Object.fromEntries() method creates an object from an array

    const fruits = [
        ["apples", 300],
        ["pears", 900],
        ["bananas", 500]
        ];

        const myObj = Object.fromEntries(fruits);

        console.log(myObj); 



console.log("4️⃣");

// 4️⃣ Array.flat()
    // The flat() method creates a new array by flattening a nested array.

    const myArr = [[1, ,],[3,4],[5,6,[7,8]]];
    const newArr = myArr.flat();

    console.log(newArr); // output: [ 1, , 3, 4, 5, 6, [ 7, 8 ] ]

    // Now, if we specify a depth of 2, the array is completely flattened reducing its dimension by 2
    // we can pass Infinity too.
    const newArr1 = myArr.flat(2);
    console.log(newArr1);  // output: [ 1, 3, 4, 5, 6, 7, 8 ]



console.log("5️⃣");

// 5️⃣ Array.flatMap(function)
    // The flatMap() method first maps all elements of an Array and then creates a new array by flattening the array.
    
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    const newArr3 = arr.map((element) =>{
        return element * 2;
    })

    console.log(newArr3); // output: [ 2, 4, 6, 8, 10, 12, 14, 16 ]


