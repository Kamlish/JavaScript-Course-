//If else if, else

var year =  1800 ;

if (year % 4 === 0 && year % 100 !== 0){
    console.log("leap year")
}
else if (year % 100 != 0 && year % 400 ==0){
    console.log("leap year");
}
else{
    console.log("Not a leap year");
}



//Switch

var input = 'Circle';
var area = input.toLowerCase();

var l = 6, b = 7, r = 3, PI = 3.142;

switch(area){
    case 'circle':
        AreaOfCircle = PI*r**2; 
        console.log(`The area of circle is: ${AreaOfCircle}`);
        break;
    case 'rectangle':
        AreaOfRectangle = l*b; 
        console.log(`The area of circle is: ${AreaOfRectangle}`);
        break;
    case 'triangle':
        AreaOfTriangle = (lxb)/2; 
        console.log(`The area of circle is: ${AreaOfCircle}`);
        break;
    default:
        console.log('Invalid Value');
}



// While Loop Statement 
//  * The while statement creates a loop the executes a specified statement:
//  * as lomg as the test condition evaluates to true


var i = 0;
while( i <= 10){
    console.log(i)
    i++;
}

// Do-While Loop Statement 
// DO while loop will at least run once if condition if false

var i = 5

do{
    console.log(i)     
    i++;
} while(i>=10)




// For Loop 
// Table


var tableOf = 8;
for (let i = 1; i<=10;i++){
        result = i*tableOf;
        console.log(`${tableOf} * ${i} = ${result}`)
    }


// Print Stars

var s, t, star;
for (s = 1; s<9; s++){
    for(t =1; t<s; t++)
    {
        star = star+('⭐️');
    }
    console.log(star)
    star = '';
}



