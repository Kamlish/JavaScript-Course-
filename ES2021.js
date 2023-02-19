//ECMAScript 2020 - ES11

    // String replaceAll()
    // Numeric Separators (_)


console.log("1️⃣");    

// 1️⃣ String replaceAll()
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set set,
// otherwise a TypeError is thrown.


let text = "I love cats. Cats are very easy to love. Cats are very popular."
    
    // A global search for "cats":

    console.log(text.replaceAll(/cats/g,"Dogs")) 
        // output: I love Dogs. Cats are very easy to love. Cats are very popular.

    // A global, case-insensitive search:

    console.log(text.replaceAll(/cats/gi, "Dogs"))
        // output: I love Dogs. Dogs are very easy to love. Dogs are very popular.



console.log("2️⃣");

// 2️⃣  Numeric Separators (_)
// the numeric separator (_) to make numbers more readable:

    const num1 = 1_000_000_000;
    const num2 = 1000000000;

    console.log((num1 === num2)); // output: true


