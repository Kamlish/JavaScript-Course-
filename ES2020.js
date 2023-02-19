//ECMAScript 2020 - ES11

    // BigInt
    // String matchAll()
    // The Nullish Coalescing Operator (??)
    // The Optional Chaining Operator (?.)
    // Logical AND Assignment Operator (&&=)
    // Logical OR Assignment (||=)
    // Nullish Coalescing Assignment (??=)
    // Promise allSettled():



// 1️⃣ BigInt()
// JavaScript BigInt variables are used to store big integer values that are too big 
// .... to be represented by a a normal JavaScript Number.
// JavaScript integers are only accurate up to about 15 digits. 
// ... After 15 digits we will get wrong results, so we put n in end to get correct results.

let oldNum = Number.MAX_SAFE_INTEGER;

console.log(oldNum); // output: 9007199254740991
console.log(typeof(oldNum)); // output: number

let newNum = 900719925474099188n + 11n;

console.log(newNum); // output: 900719925474099199n
console.log(typeof(newNum)); // output: bigint




// 2️⃣ String match() and matchAll()
// Before ES2020 there was no string method that could be used to 
// .... search for all occurrences of a string in a string.
// The match() method returns an array with the matches.
// The match() method returns null if no match is found.

let text = "I love cats. Cats are very easy to love. Cats are very popular."

    // ① Match()

    // A search for "ain" using a string:
    console.log(text.match(/cats/)); // output: ['cats', index: 7, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined ]

    // A search for "ain" using a regular expression:
    console.log(text.match(/cats/)); // output: ['cats', index: 7, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined ]
    
    // A global search for "cats":
    console.log(text.match(/cats/g)) // output: [ 'cats' ]

    // A global, case-insensitive search:
    console.log(text.match(/cats/gi)) // output: [ 'cats', 'Cats', 'Cats' ]


    // ② MatchAll ()
    // The matchAll() method returns empty array [] if no match is found.

        // A search for "ain" using a string:
        let iterator = text.matchAll(/pats/g);
        console.log([...iterator]);

        /* output:
            [
                [
                    'Cats',
                    index: 13,
                    input: 'I love cats. Cats are very easy to love. Cats are very popular.',
                    groups: undefined
                ],
                [
                    'Cats',
                    index: 41,
                    input: 'I love cats. Cats are very easy to love. Cats are very popular.',
                    groups: undefined
                ]
            ]
        */








// Before ES2020 there was no string method that could be used to 
// .... search for all occurrences of a string in a string.


    // console.log(text.match("cats")); // output: Object [RegExp String Iterator] {}



// If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

// console.log(text.match(/cats/g));

// res = text.matchAll(/cats/g)
// console.log([...res])