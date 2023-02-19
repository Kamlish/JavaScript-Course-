// 1️⃣ Window vs Document
// 2️⃣ DOM (Document Object Model ) vs BOM (Browser Object Model)
// 3️⃣ DOM Navigation
// 4️⃣ To search the Elements and the reference 



// 1️⃣ Window vs Document

/* 
①
window: Window is the main container or we can say global object() and any operations related to entire browser window can be a part of window object.

Document: whereas the DOM is the child of window object.

For example: Browser is a window object wheres website showing in the browser is a document.

②
Window: All the members like objects, methods or properties. if they are part of window object then we don't refer the window object.

Document: Where in the DOM we need to refer the document, if we want to use the document object, methods or properties.

⓷ 
Window: Window has methods, properties and objects. Ex setTimeout() or setInterval() are the methods, whereas Document is the object of the window.
and it also has a screen object with properties describing the physical display.

Document:  Document is just object of the global object that is window, which deals with the document, the HTML elements themselves.

*/

// 2️⃣ DOM vs BOM
/*

DOM: The DOM is the Document Object Model, which deals with the document, the HTML elements themselves, e.g. document and all the traversal you would do in it, events, etc.
For example: change the background color to Red
document.body.style.backgroundColor = 'Red';

BOM: The BOM is the Browser Object Model, which deals with the browser components aside from the document, like history, location, navigator, screen, etc.
For example: Functions alert/confirm/prompt are also part of the BOM: they are directly not related to the document, but represent pure browser methods of communication with the user.

alert (location.href) // Shows Current URL
if (confirm("Want to visit?")){
    location.href = "https://www.google.com";} // Redirect to Google

*/



// 3️⃣ 👉 Summary  (DOM Navigation)

/*
    DOM is the Document Object Model, where we can change the properties of website. 
    In DOM, we have family hierarchy. e.g. Parent, Children, siblings, grandchildren.
    Document has three elements, (HTML, Head and body). Whereas,
    Document is the parent of HTML, body and head are siblings and the children of HTML. 
    Furthermore, body has children. To see the children, we use, document.body.children 
    and to see the grandchildren of body, we use document.body.firstElementChild.firstElementChild or
    we can use query selectors to access children of first child of body. 
    Note: In document.body.childNodes includes tab enter and whitespace. 

    To check whether an element has child nodes or not.
        hasChildNodes()
    
    To check root element of the document
        document.documentElement

    To get the first child of document.body
        document.body.firstElementChild


    
*/



// 4️⃣ To search the Elements and the reference 


