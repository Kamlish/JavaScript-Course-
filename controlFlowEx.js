// 1️⃣ Write a JavaScript program that accept two integers and display the larger.

var x = 40;
var y = 12;

var output1 = x > y ? `${x}` : `${y}`;
console.log(output1);



// 2️⃣ Write a JavaScript conditional statement to find the sign of product of three numbers.

var x = 2;
var y = -5;
var z = 9;

var product = Math.sign(x * y * z);

var output2 = product == -1 ? "The sign is -" : "This sign is +";
console.log(output2);



// 3️⃣ Write a JavaScript conditional statement to sort three numbers.

var x = 1;
var y = 5;
var z = -2;

if (x > y && x > z) {
  if (y > z) {
    console.log(`${x} ${y} ${z}`);
  } else {
    console.log(`${x} ${z} ${y}`);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(`${y} ${x} ${z}`);
  } else {
    console.log(`${y} ${z} ${x}`);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(`${z} ${x} ${y}`);
  } else {
    console.log(`${z} ${y} ${x}`);
  }
} else {
  console.log("Invalid");
}



// 4️⃣ Write a JavaScript conditional statement to find the largest of five numbers.

var a = -5;
var b = -2;
var c = 5;
var d = -3;
var e = 0;

if (a > b && a > c && a > d && a > e) {
  console.log(a);
} else if (b > a && b > c && b > d && b > e) {
  console.log(b);
} else if (c > a && c > b && c > d && c > e) {
  console.log(c);
} else if (d > a && d > b && d > c && d > e) {
  console.log(b);
} else {
  console.log(e);
}



// 5️⃣ Write a JavaScript for loop that will iterate from 0 to 15.
//    For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even `);
  }
  if (i % 2 !== 0) {
    console.log(`${i} is odd `);
  }
}



// 6️⃣ Write a JavaScript program which compute, the average marks of the following students Then,
//    .... this average is used to determine the corresponding grade.
/*
        Student Name	Marks         
            David	     80
            Vinoth	     77
            Divya	     88
            Ishitha	     95
            Thomas	     68

            The grades are computed as follows :

            Range       Grade
            <60	        F
            <70	        D
            <80	        C
            <90	        B
            <100	    A

*/

var students = [
  ["david", 95],
  ["Divya", 90],
];
var avgMarks = 0;

for (let i = 0; i < students.length; i++) {
  avgMarks += students[i][1];
  var avg = avgMarks / students.length;
}
console.log(`The Average marks are: ${avg}`);

if (avg <= 60) {
  console.log("The Grade is F");
} else if (avg <= 70) {
  console.log("The Grade is D");
} else if (avg <= 80) {
  console.log("The Grade is C");
} else if (avg <= 90) {
  console.log("The Grade is B");
} else {
  console.log("The Grade is A");
}



// 7️⃣ Write a JavaScript program to find the armstrong numbers of 3 digits.
var num1 = "4";
var num2 = "0";
var num3 = "7";

var number = num1 + num2 + num3;
armstrong = num1 ** 3 + num2 ** 3 + num3 ** 3;

if (armstrong == number) {
  console.log(`The ${number} is Armstrong number.`);
} else {
  console.log(`The ${number} is not Armstrong number`);
}



// 7️⃣ 4 Digits armstrong number With for loop

function threeDigitsArmstrong() {
  for (let i = 0; i < 10; i++) {
    // 0 will not run
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        for (let l = 0; l < 10; l++) {
          var pow =
            Math.pow(i, 4) + Math.pow(j, 4) + Math.pow(k, 4) + Math.pow(l, 4);
          var plus = i * 1000 + j * 100 + k * 10 + l;
          if (pow == plus) {
            console.log(pow);
          }
        }
      }
    }
  }
}
threeDigitsArmstrong();



// 8️⃣ Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and 
// .... for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

var ceilValue;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 == 0) {
    console.log(i + " Buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FizzBuzz");
  } else {
    console.log(i);
  }
}



// 9️⃣ Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

var a = 3; //First number
var b = 6; //Second number
var gcd;
while (a != b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}
gcd = a;
console.log(gcd);



// 🔟 Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);



// 1️⃣1️⃣ Write a JavaScript program to construct the following pattern, using a nested for loop
/*
      *
      * *
      * * *
      * * * *
      * * * * *
 */

var i, j, chr;
debugger;
for (i = 1; i <= 6; i++) {
  for (j = 1; j < i; j++) {
    chr = chr + "*";
  }
  console.log(chr);
  chr = " ";
}



// 1️⃣2️⃣ Write a JavaScript program to check a number is Happy number or not

function isHappy(n) {
  let sum = 0;
  while (n > 0) {
    let e = n % 10;
    n = Math.floor(n / 10);
    sum += e * e;
  }
  if (sum === 1) {
    return `The is "Happy Number".`;
  } else if (sum > 1 && sum <= 4) {
    return `The is not "Happy Number".`;
  }
  return isHappy(sum);
}

var x = isHappy(1);
console.log(x);