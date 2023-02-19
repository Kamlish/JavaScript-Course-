// Date and Time in JavaScript ❓
// JavaScript Date objects represent a single moment in time in a platform independent format..
// Date objects contain a number that represents milliseconds since 1 Jan 1970 UTC.


// 1️⃣ Creating Date objects
// There are 4 ways to create a new Date object

    // ① new Date () - to show current date and time
    // Date objects are created with the new Date() constructor.

    var currDate = new Date();

    console.log(currDate); // output: 2022-12-08T04:24:53.343Z
    console.log(currDate.toLocaleString()); // output: 12/8/2022, 9:24:53 AM
    console.log(currDate.toString()); // output: Thu Dec 08 2022 09:24:53 GMT+0500 (Pakistan Standard Time)

    console.log(Date.now()); // output: 1670475001394 (current date in milliseconds)
    
    // ② new Date(year, month, day, hour, minute, second, milliseconds); - to show date and time of your choice.
    // Note: Javascript counts months from 0 (Jan) to 11 (Dec).

    var selfDate = new Date(2022, 11, 30, 23, 59, 60, 0);
    console.log(selfDate.toLocaleString()); // output: 12/31/2022, 1:00:00 AM

    // ⓷ new Date (date string)  - to show date and time of your choice

    var dateString = new Date("December 8, 2022 09:40:55")

    console.log(dateString); // output: 2022-12-08T04:40:55.000Z
    console.log(dateString.toLocaleString()); // output: 12/8/2022, 9:40:55 AM
    
    // ⓸ new Date (milliseconds) - to show date and time with milliseconds

    var milliseconds = new Date (1670473673144);
    console.log(milliseconds.toLocaleString()); // output: 12/8/2022, 9:27:53 AM
    


    console.log("2️⃣");

// 2️⃣ Date and Time Methods - Set and Get
    // Note: The set method will perfectly work in HTML to show the date and time on webpage.

    var currDate = new Date(); 

        // ① To get the individual date

        console.log(currDate.getFullYear()); //output: 2022
        console.log(currDate.getMonth()); // output: 11
        console.log(currDate.getDate()); // output: 8
        console.log(currDate.getDay());  // output: 4

        // ② To set the individual date
        
        console.log(currDate.setFullYear(2022)); // output: 1670476123170
        console.log(currDate.setFullYear(2022,11, 30)) // output: 1672376923170
        console.log(currDate.setMonth(11)); // output: 1672376923170
        console.log(currDate.setDate(8)); // output: 1670476123170

        // ⓷ To get individual time is the same as to get the individual date
        // ⓸ To set individual time is the same as to set the individual date


console.log("3️⃣ Practice");

// 3️⃣ Practice Time

    // To Show only Time 

    console.log(new Date().toLocaleTimeString()); // output:  10:28:20 AM

    // To Show only Date

    console.log(new Date().toLocaleDateString()); // output: 12/8/2022

    // To show Date and Time
    
    console.log(new Date().toLocaleString()); // output: 12/8/2022, 10:28:20 AM

    // To Show Date and Time with Standard Zone

    console.log(new Date().toString()); // output: Thu Dec 08 2022 10:29:49 GMT+0500 (Pakistan Standard Time)