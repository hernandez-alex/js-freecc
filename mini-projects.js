"use strict";
// ****************************************************************************
// Roman Numeral Converter
// ****************************************************************************
function convertToRoman(num) {
  let newNum = num;
  let romanNum = "";
  console.log("R:");
  if (newNum >= 1000) {
    romanNum = romanNum.concat("M".repeat(Math.floor(newNum / 1000)));
    newNum = newNum % 1000;
  }
  console.log("R:", romanNum, "D:", newNum);

  if (newNum >= 900) {
    romanNum = romanNum.concat("CM".repeat(Math.floor(newNum / 900)));
    newNum = newNum % 900;
  }
  console.log("R:", romanNum, "D:", newNum);

  if (newNum >= 500) {
    romanNum = romanNum.concat("CM".repeat(Math.floor(newNum / 500)));
    newNum = newNum % 500;
  }
  console.log("R:", romanNum, "D:", newNum);

  return num;
}
convertToRoman(2936);
// console.log(convertToRoman(2436));
/*
// ****************************************************************************
// Palindrome Checker
// ****************************************************************************
function palindrome(str) {
  const newStr = str
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z0-9]/.test(char))
    .join("");
  return newStr === newStr.split("").reverse().join("");
}

// palindrome("eye");
console.log(palindrome("eye"));
console.log(palindrome("eye2_A3*3#A2"));

*/
