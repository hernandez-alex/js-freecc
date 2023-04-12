"use strict";
// ****************************************************************************
// Find One or More Criminals in a Hunt
// ****************************************************************************
let text = "abcCCefffFFGggabcCCC";
let reCriminals = /C+/g; // Change this line
let result = text.match(reCriminals);
console.log(result);

/*
// ****************************************************************************
// Find Characters with Lazy Matching
// ****************************************************************************
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);

// ****************************************************************************
// Match Characters that Occur Zero or More Times
// ****************************************************************************
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// Only change code below this line
let chewieRegex = /Aa*/ // Change this line
// Only change code above this line

//let result = chewieQuote.match(chewieRegex);
//console.log(result);
/*

// ****************************************************************************
// Match Characters that Occur One or More Times
// ****************************************************************************
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);
console.log( result )

// ****************************************************************************
// Match Single Characters Not Specified
// ****************************************************************************
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);

// ****************************************************************************
// Match Letters of the Alphabet
// ****************************************************************************
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// ****************************************************************************
// Match Letters of the Alphabet
// ****************************************************************************
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result, result.length);

// ****************************************************************************
// Match Single Character with Multiple Possibilities
// ****************************************************************************
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result.length, `vowels:`, result);

// ****************************************************************************
// Match Anything with Wildcard Period
// ****************************************************************************
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
console.log(result);

// ****************************************************************************
// Extract Matches
// ****************************************************************************
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);

// ****************************************************************************
// Extract Matches
// ****************************************************************************
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);

// ****************************************************************************
// Ignore Case While Matching
// ****************************************************************************
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result);

// ****************************************************************************
// Match a Literal String with Different Possibilities
// ****************************************************************************
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result);

// ****************************************************************************
// Match Literal Strings
// ****************************************************************************
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result);

// ****************************************************************************
// Using the Test Method
// ****************************************************************************
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result);
*/
