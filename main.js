var givenName;
// Q: What does `givenName` equal right now?
// 'givenName' is currently undefined.

givenName = "Tim";
// Q: What is `givenName` set to right now?
// 'givenName' is currently assigned to the string value "Tim".

givenName = "JD";
// Q: What is `givenName` set to right now?
// 'givenName' is set to the string value "JD".


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
//'greeting' is set to the value "Hello, how are you?"

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
//math is set to the number value 40

math = high - "5";
// Q: What is `math` set to?
//math is set to 45

// Create a variable to calculate Tim's age
// The answer should read "Tim is 31 years old"
var born = 1983;
var today = 2015;

var timAge = today - born;
var statement = 'Tim is' + " " + timAge + " " + "years old";

console.log(statement);


// Store some information following in variables.
var yourName = 'Mike Marcinek';
var instructorName = 'Tim Whitacre';

var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

console.log(statement);
