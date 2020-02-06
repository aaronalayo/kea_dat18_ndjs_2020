// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

var newNumber = Number(numberOne) + Number(numberTwo);
//console.log(newNumber);

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var addedNumbers = (parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2);
//console.log(parseFloat(addedNumbers));
// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

var avrg = ((one + two + three)/3).toFixed(5);

//console.log(avrg);
// Show in the console the avg. with 5 decimals

// --------------------------------------

// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc";
// Get me the character "c"



//console.log(letters.charAt(2));
//console.log(letters[2]);

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";
var change = fact.replace("j", "J");


// capitalize the J in Javascript
console.log(fact.indexOf("j"));
console.log(change);
// --------------------------------------