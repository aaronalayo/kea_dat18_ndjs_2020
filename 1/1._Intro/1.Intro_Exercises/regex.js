//This shows if the pattern appears in the string
const myRegEx= /Hello/i; //pattern to search for and i for flag
//i flag = case insensitive
const result = myRegEx.test("Hello world");
// console.log(result);

//Pipe = or

const petString = "i have a cow"
const petRegEx = /alpaca|cow|sheep/;
console.log(petRegEx.test(petString));


//Match

const extractString = "Extract this word from the string";
const wordRegex =/word/;
//console.log(extractString.match(wordRegex))

// The Global flag

// console.log("Repeat, Repeat, Repeat".match(/Repeat/g));

let twinkleStartSong = "Twinkle, twinkle, little start"

//console.log(twinkleStartSong.match(/twinkle/ig));

// Wildcards
const hunStr = 'Thats a humbug!';
const hugStr = "I need a hug";
const huRegex = /hu./;

console.log(hunStr.match(huRegex));
console.log(hugStr.match(huRegex));

//He's a fun 'un

console.log("He's a fun 'un".match(/.un/g));

//Wildcard II - One of the following letters
console.log("I found big bugs in my bag".match(/b[aiu]g/ig));

//Find all the vowells
console.log("I found big bugs in my bag".match(/[aeiou]/ig));

// Range
console.log("123abc456".match(/[0-9]/g));

//match all letters in Twinkle
console.log(twinkleStartSong.match(/[a-z]/ig));