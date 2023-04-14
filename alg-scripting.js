"use strict";

/*
// ****************************************************************************
// Chunky Monkey
// ****************************************************************************
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  let newFile = [];
  for (let i = 0; i < arr.length; i++) {
    newFile.push(arr[i]);
    if (newFile.length % size === 0) {
      newArr.push(newFile);
      newFile = [];
    }
  }
  if (newFile.length > 0) newArr.push(newFile);
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

// ****************************************************************************
// Mutations
// ****************************************************************************
function mutation(arr) {
  const Base = arr[1].toLowerCase().split("");
  const texto = arr[0].toLowerCase().split("");
  let result = true;
  for (let i = 0; i < Base.length; i++) {
    if (!texto.includes(Base[i])) result = false;
  }
  return result;
}
console.log(mutation(["hello", "hey"]));

// ****************************************************************************
// Where do I Belong
// ****************************************************************************
function getIndexToIns(arr, num) {
  const arrSort = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arrSort);
  for (let i = arrSort.length - 1; i >= 0; i--) {
    if (num > arrSort[i]) return i+1;
  }
  return 0;
}
getIndexToIns([40, 60], 50);
// ****************************************************************************
// Falsy Bouncer
// ****************************************************************************
function bouncer(arr) {
  const arrNotFalsy = [...arr];
  const falsyVal = [false, null, 0, "", undefined, NaN];
  for (let i = arrNotFalsy.length - 1; i >= 0; i--) {
    if (falsyVal.includes(arrNotFalsy[i])) {
      arrNotFalsy.splice(i, 1);
    }
  }
  return arrNotFalsy;
}
bouncer([7, "ate", "", false, 9]);

// ****************************************************************************
// Slice and Splice
// ****************************************************************************
function frankenSplice(arr1, arr2, n) {
  const arr3 = [...arr2];
  arr3.splice(n,0, ...arr1)
  return arr3;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
// ****************************************************************************
// Title Case a Sentence
// ****************************************************************************
function titleCase(str) {
  const arrStr = str.split(" ");
  for (let i = 0; i < arrStr.length; i++) {
    arrStr[i] =
      arrStr[i].slice(0, 1).toUpperCase() + arrStr[i].toLowerCase().slice(1, arrStr[i].length);
  }
  return arrStr.join(" ");
}
titleCase("I'm a little tea pot");

// ****************************************************************************
// Boo who
// ****************************************************************************
function booWho(bool) {
  return typeof bool === "boolean" ? true : false;
}
console.log(booWho(null));
console.log(booWho(true));
// ****************************************************************************
// Finders Keepers
// ****************************************************************************
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) if (func(arr[i])) return arr[i];
}
findElement([1, 2, 3, 4], (num) => num % 2 === 0);
// ****************************************************************************
// Truncate a String
// ****************************************************************************
function truncateString(str, num) {
  if (str.length > num) return str.substring(0, num) + "...";
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
// ****************************************************************************
// Repeat a String
// ****************************************************************************
function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  const cad = str;
  for (let i = 1; i < num; i++) {
    str += cad;
    console.log(i, str);
  }
  return str;
}
console.log(repeatStringNumTimes("abc", 3));

// ****************************************************************************
// Confirm the Ending
// ****************************************************************************
function confirmEnding(str, target) {
  const regEx = new RegExp(target + "$");
  return regEx.test(str);
}

confirmEnding("Bastian", "n");

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
