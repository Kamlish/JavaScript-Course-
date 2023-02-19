// Strings in Javascript ❓

// A JS string is a zero or more characters written inside quotes.
// You can use single or double quotes
// Strings can be created as primitives, from string literals, or as objects
// .... or using the string objects. 


                        // Escape Character 
                        // Finding a String in a String
                        // Searching for a String in a String
                        // Extracting String Parts
                        // Replacing String Content 
                        // Extracting String Characters
                        // Other useful methods



// 1️⃣ Escape Character 
// The bacllash (\) escape character turns special character into string character.
//  \'  =  '             \"  =  "                 \\  =  \


console.log("2️⃣ ")

// 2️⃣ Finding a String in a String
// String.prototype.indexOf(searchValue [, fromInsex])
// indexOf() method returns the index of (the posiiton of) the first occurrence of a
// ..... specified text in a string.
// JS counts positions from zero. 
// In strings, space also take  index.

const myBioData = "I am Kamlish Goswami";

console.log(myBioData.indexOf("kamlish", 13)); // Output = -1



console.log("3️⃣")

// 3️⃣ Searching for a String in a String
// String.prototype.search(regexp)
// The search() method searches a string for a specified value and returns the position 
// ..... of the match.
// The search() method can not take a second start position argument.

const myBioData1 = "I am Kamlish Goswami";

console.log(myBioData1.search("Kamlish")); // output: 5



console.log("4️⃣")

// 4️⃣ Extracting String Parts
// There are 3 methods for extracting a part of a string

let str = "Apple, Banana, Kiwi";

    // ① slice(start, end)
    // slice() method extracts a part of a string and returns the extracted part in a new string 
    // The original array will not be changed.

     let res = str.slice(0,5) 
     console.log(res); // output: Apple

     let res1 = str.slice(7, -2)
     console.log(res1); // output: Banana, Ki (-2 will remove last two chr of last string)

     console.log(str.slice(7)) // output: Banana, Kiwi

    

    // ② substring(start, end)
    // substring() is similar to slice().
    // The difference is substring() can not accept negative index. 

    let res2 = str.substring(15) // output: Kiwi
    console.log(res2);


    // ⓷ substr(start, length)
    // substr() is similar to slice
    // The difference is that the second parameter specifies the length of the extracted part.
    // we can not add negative value to second parameter, it will return empty.

    let res3 = str.substr(-4) // output: kiwi
    console.log(res3);




console.log("5️⃣")

// 5️⃣ Replacing String Content 
// String.prototype.replace/ReplaceAll(searchFor, replaceWith)
// The replace() method replaces a specified value with another value in a string.

// Points to remember:
// 1: The replace() method does not change the string it is called on. It returns a new string.
// 2: By default, the replace method replaces the first match.

let myBioData2 = "I am kamlish goswami, web developer, kamlish goswami"

rep = myBioData2.replace("kamlish", "Kamlish");

console.log(rep); // output: I am Kamlish goswami, web developer, kamlish goswami

rep1 = myBioData2.replaceAll("goswami", "Goswami") // output: I am kamlish Goswami, web developer, kamlish Goswami

console.log(rep1);



console.log("6️⃣ ")

// 6️⃣ Extracting String Characters

// There are three methods to extract string characters:

    let string = "Learning to extract string characters"

    // ① charAt(position)
    // charAt() method extracts a character at a specified position in a string.
    // The character at the position is returned as a string.

    console.log(string.charAt(6)); // output: n



    // ② charCodeAt(position)
    // charCodeAt() method extracts a character code (unicode) at a specified position in a string.
    // The character code at the position is returned as a number.
    // An integer between 0 and 65535.

    console.log(string.charCodeAt(6)); // output: 97

    


    console.log("7️⃣ Challange");

// 7️⃣ Other useful methods

    let fName = "Kamlish";
    let lName = "Goswami";

        // ① toUpperCase()

             console.log(fName.toUpperCase()); // output: KAMLISH

        // ② toLowerCase()

            console.log(fName.toLowerCase()); // output: kamlish

        // ③ concat() - adds two or more strings

            console.log(fName + lName); // output: KamlishGoswami
            console.log(`${fName} ${lName}`); // output: Kamlish Goswami
            console.log(fName.concat(lName)); // output: KamlishGoswami
            console.log(fName.concat(" " ,lName)); // output: Kamlish Goswami

        // ④ trim() - removes trailing (WhiteSpace)

            let cName = "  Kamlish Goswami  ";
            console.log(cName.trim());  // output: Kamlish Goswami

        // ⑤ split() - Converting string into array

            var txt = "a,b,c";

            console.log(txt.split(" ")); // output: [ 'a,b,c' ]
            console.log(txt.split(",")); // output: [ 'a', 'b', 'c' ]
        




console.log("8️⃣ Challange");

// 8️⃣ challenge 🤔

// Display only 280 characters of a string.

let myTweets = "Laboris non laboris labore irure est officia non commodo voluptate ad minim. Anim fugiat est aliquip commodo ex exercitation laboris. Do do exercitation ullamco ea sunt nostrud ut irure quis aliqua."

let myActualTweet = myTweets.slice(0,280);
console.log(myActualTweet);