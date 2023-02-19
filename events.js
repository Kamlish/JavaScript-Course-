// Events in JavaScript ❓

    // HTML events are "things" that happen to HTML elements.
    // When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// HTML Events    
// A HTML event can be something the browser does, or something a user does.

    // Here are some examples of HTML events

        // ① A HTML web page has finished loading
        // ② A HTML input field has changed
        // ⓷ A HTML button has been clicked
        // ⓸ often, when events happen, you may want to do something
        // ⓹ JavaScript let you execute code when events are detected
        // ⑥ HTML allows event handlers attributes, with JavaScript code, to be added to HTMl elements.
    



// 1️⃣ 4 ways of writing Events in JavaScript

    // ① using inline events alert();

            /*
                onclick="alert"("Hello world");
            */

    // ② By calling a function ()

            /*
                <button onclick="callingFunction"> Click</button>

                const callingFunction = () => {
                    code to be executed here
                }

            */

    // ③ using Inline events (HTML onclick="" property and element.onclick )
           // This way override the events.

            /*  
                const variableName = document.getElementById('id name');

                variableName.onclick = function () {
                        code to be executed here.
            }
            */

    // ④ using Event Listeners (addEventListener and IE's attachEvent)
            // Same event can be called multiple times without override
            /*  
                const variableName = document.querySelector ('id name/ClassName');

                variableName.addEventListener('click', function () {   // callback function
                        code to be executed here.
            });
          */
    


// 2️⃣ What is Event Object
    // Event Object is the parent object of the event object. (Same like DOM and Window relationships)
    // For example: MouseEvent, focusEvent, keyboardEvent etc



// 3️⃣ MouseEvent in JavaScript
    // The MouseEvent object: events that occurs when the mouse interacts with the HTML document

    /* Example 1
        <body>
            <p id="mouseEvent" onmousedown="mouseDown()" onmouseup="mouseUp()"> 
            Click the text! The mouseDown() function is triggered when the mouse
            button is pressed down over this paragraph, and sets the color of the text to yellow.
            The mouse() function is triggered when the mouse button is released, and sets
            the color of the text to orange</p>
        </body>

        <script>
            function mouseDown(){
                document.getElementById('mouseEvent').style.color="#F8B627";
            }

            function mouseUp(){
                document.getElementById('mouseEvent').style.color="orange";
            }
        </script>
    */

    /* Example 2
        <body>
            <div class="container">
            <div id= "box">
            </div></div>
        </body>

        <script>
            const mEnter = document.getElementById("box")

            mEnter.addEventListener("mouseenter", () => {
                mEnter.style.backgroundColor = "pink";
            });
            mEnter.addEventListener("mouseleave", () => {
                mEnter.style.backgroundColor= "purple";
            });
        </script>

    */



// 4️⃣ KeyboardEvent in JavaScript
    // The KeyboardEvent object: events that occurs when the user presses a key on the keyboard.

    /*
        <body>
            <div class ="main-div">
                <p> A function is triggered when the user is pressing a key in field</p>
                <br>
                <input type="text" class="effect-1" onkeypress="keyPress()" onkeydown="keyDown()" 
                onkeyup="keyUp()">
                <br/>
                <p id="key"></p>
            </div>
        </body>

        <script>
        
            const keyPress = () => {
                document.getElementById('key').innerHTML = `you pressed ${event.key}`;
            }

            const keyDown = () => {
                document.getElementById('key').innerHTML = `key is down`;
            }

            const keyUp = () => {
                document.getElementById('key').innerHTML = `key is up`;
            }

        </script>
    */


// 5️⃣ InputEvent in JavaScript
    // The onchange event occurs when the value of an element has been changed.
    // For radio buttons and check boxes, the onchange event occurs when the checked state has been changed.

    /*  <body>
            <div class="container1">
                <div>
                    <label for="">Your Name: </label>
                    <input  type="text" name="" id="name">
                    <br><br>
                    <label>Choose your Gender 🙋🏻‍♂️ 🙋🏻‍♀️
                    <select id="gender" name="gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </label>
                </div>
                <br>
                <div id="result"></div>
            </div>

        </body>

        <script>

            const gender = document.getElementById('gender');

            gender.addEventListener("change", () => {
            const input = document.getElementById('name').value;
            const genderSelect = document.getElementById('gender').value;
            const result = document.getElementById('result');

            result.innerHTML = `Mr ${input} selects ${genderSelect} gender.`;
        });

        </script>

    */