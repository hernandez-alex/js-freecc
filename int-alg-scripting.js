"use strict";
/*
// ****************************************************************************
// Search and Replace
// ****************************************************************************
function myReplace(str, before, after) {
  return str
    .split(" ")
    .map((word) => {
      return word === before
        ? /[A-Z]/.test(before[0])
          ? after.slice(0, 1).toUpperCase().concat(after.slice(1))
          : after.toLowerCase()
        : word;
    })
    .join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// ****************************************************************************
// Pig Latin
// ****************************************************************************
function translatePigLatin(str) {
  const strLC = str.toLowerCase().split("");
  // Starts with a vowel
  if (/[aeiou]/.test(strLC[0])) {
    return strLC.join("").concat("way");
  }
  // Begin with one or more vowels
  for (let i = 0; strLC.length; i++) {
    if (/[aeiou]/.test(strLC[i])) {
      return strLC
        .join("")
        .slice(i, strLC.length + 1)
        .concat(str.slice(0, i))
        .concat("ay");
    }
  }
  // Don't have any vowel
  return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("airline"));
console.log(translatePigLatin("rhythm"));

// ****************************************************************************
// Spinal Tap Case
// ****************************************************************************
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

// ****************************************************************************
// Wherefore art thou
// ****************************************************************************
function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source);
  return collection.filter((obj) => {
    for (let i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

// ****************************************************************************
// Seek and Destroy
// ****************************************************************************
function destroyer(arr, ...f) {
  return arr.filter((el) => !f.includes(el));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// ****************************************************************************
// Diff Two Arrays
// ****************************************************************************
function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.map((elem) => {
    if (!arr2.includes(elem)) newArr.push(elem);
  });
  arr2.map((elem) => {
    if (!arr1.includes(elem)) newArr.push(elem);
  });

  // arr1.map((elem) => (!arr2.includes(elem) ? newArr.push(elem) : false));
  // arr2.map((elem) => (!arr1.includes(elem) ? newArr.push(elem) : false));
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// ****************************************************************************
// Sum All Numbers in a Range
// ****************************************************************************
// --- Mi Solución
function sumAll(arr) {
  const arrSort = arr.sort((a, b) => a - b);
  const newArr = [];
  for (let i = arrSort[0]; i <= arrSort[1]; i++) newArr.push(i);
  return newArr.reduce((sum, elem, index, arr) => (sum = sum + elem), 0);
}
console.log(sumAll([6, 2]));

// -- Solución alternativa de internet
function sumAll2(arr) {
  const arrSort = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let num = arrSort[0]; num <= arrSort[1]; num++) sum += num;
  return sum;
}
console.log(sumAll2([6, 2]));
 */
