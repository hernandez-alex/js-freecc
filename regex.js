"use strict";

/*
// ****************************************************************************
// Remove Whitespace from Start and End
// ****************************************************************************
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(hello);
console.log(result);

// ****************************************************************************
// Use Capture Groups to Search and Replace
// ****************************************************************************
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result);

// ****************************************************************************
// Reuse Patterns Using Capture Groups
// ****************************************************************************
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/g; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);

// ****************************************************************************
// Check For Mixed Grouping of Characters
// ****************************************************************************
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result);

// ****************************************************************************
// Positive and Negative Lookahead
// ****************************************************************************
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);

// ****************************************************************************
// Check for All or None
// ****************************************************************************
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
console.log(result);

// ****************************************************************************
// Specify Exact Number of Matches
// ****************************************************************************
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
console.log(result);

// ****************************************************************************
// Specify Only the Lower Number of Matches
// ****************************************************************************
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
console.log(result);

// ****************************************************************************
// Specify Upper and Lower Number of Matches
// ****************************************************************************
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Cambia esta línea
let result = ohRegex.test(ohStr);
console.log(result);

// ****************************************************************************
// Match Non-Whitespace Characters
// ****************************************************************************
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
console.log(result.length, result);

// ****************************************************************************
// Match Whitespace
// ****************************************************************************
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result, result.length);

// ****************************************************************************
// Restrict Possible Usernames
// ****************************************************************************
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i; // Change this line
let result = userCheck.test(username);
console.log(result);

// ****************************************************************************
// Match All Non-Numbers
// ****************************************************************************
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
console.log( result )

// ****************************************************************************
// Match All Numbers
// ****************************************************************************
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
console.log(result);

// ****************************************************************************
// Match Everything But Letters and Numbers
// ****************************************************************************
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

// ****************************************************************************
// Match All Letters and Numbers
// ****************************************************************************
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);

// ****************************************************************************
// Match Ending String Patterns
// ****************************************************************************
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
console.log(result);

// ****************************************************************************
// Find One or More Criminals in a Hunt
// ****************************************************************************
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result);

// ****************************************************************************
// Find One or More Criminals in a Hunt
// ****************************************************************************
let text = "abcCCefffFFGggabcCCC";
let reCriminals = /C+/g; // Change this line
let result = text.match(reCriminals);
console.log(result);

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
