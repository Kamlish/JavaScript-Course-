// ECMAScript 2017 - ES8

    // 1️⃣ String Padding
    // 2️⃣ Object.values()
    // 3️⃣ Object.entries() (ES2015-ES6)
    // 4️⃣ async and await (covered in Advanced JavaScript)


console.log("1️⃣");

// 1️⃣ String Padding
    // padStart and padEnd to support padding at the beginning and at the end of a string.
    // padding starts/ends when space value is greater than string/number length.

    let message = 'Kamlish';
    console.log(message.padStart(7)); // output: Kamlish
    console.log(message.padStart(10)); // output:    Kamlish
    console.log(message.padStart(15)); // output:         Kamlish

    console.log(message.padEnd(20)); // output: "Kamlish             "



console.log("2️⃣");

// 2️⃣ Object Values
    // Object.values() are similar to Object.entries(), 
    // .... but returns a single dimension array of the object values

    const person = {
        firstName : "Kamlish",
        lastName : "Goswami",
        age : 26,
        eyeColor : "black"
    };

    let text = Object.values(person);
    console.log(text); // output: [ 'Kamlish', 'Goswami', 26, 'black' ]



console.log("3️⃣ Object.entries");

// 3️⃣ Object.entries() - ES6
    // Object.entries similar to object.values() but in entries we get object key with values in array.
    // The entries() method does not change the original array.
        // let text = Object.entries (person);
            /* output:
            [
                [ 'firstName', 'Kamlish' ],
                [ 'lastName', 'Goswami' ],
                [ 'age', 26 ],
                [ 'eyeColor', 'black' ]
            ]
            */