"use strict";
// ****************************************************************************
//
// ****************************************************************************

// ****************************************************************************
// Confirm the Ending
// ****************************************************************************
function confirmEnding(str, target) {
  // return str.endsWith(target); // Respuesta rápida
  // const regEx = new RegExp(`/` + target + `$/`);
  console.log(regEx);
  return regEx.test(str);
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Bastian", "n"));
/*

// ****************************************************************************
// Return Largest Numbers in Arrays
// ****************************************************************************
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let arrInt = arr[i];
    let maxNum = arrInt[0];
    for (let j = 0; j < arrInt.length; j++) {
      if (arrInt[j] > maxNum) maxNum = arrInt[j];
    }
    newArr.push(maxNum);
  }
  return newArr;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// ****************************************************************************
// Find the Longest Word in a String
// ****************************************************************************
function findLongestWordLength(str) {
  const arrStr = str.split(" ");
  let longestWord = arrStr[0];
  for (let i = 0; i < arrStr.length - 1; i++) {
    if (arrStr[i + 1].length > longestWord.length) longestWord = arrStr[i + 1];
  }
  return longestWord.length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// ****************************************************************************
// Factorialize a Number
// ****************************************************************************
function factorialize(num) {
  if (num <= 0) return 1;
  num *= factorialize(num - 1);
  return num;
}
console.log(factorialize(5));

// ****************************************************************************
// Convert Celsius to Fahrenheit
// ****************************************************************************
function reverseString(str) {
  return [...str].reverse().join("");
}
console.log(reverseString("hello"));

// ****************************************************************************
// Convert Celsius to Fahrenheit
// ****************************************************************************
function convertCtoF(celsius) {
  let fahrenheit = 9 / 5 * celsius + 32;
  return fahrenheit;
}
console.log(convertCtoF(30));
*/
