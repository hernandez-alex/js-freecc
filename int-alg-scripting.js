"use strict";
// ****************************************************************************
// Smallest Common Multiple
// ****************************************************************************
function prime(num) {
  if (num % 1 !== 0 || num < 2) return false;
  let divisores = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisores++;
    if (divisores > 2) return false;
  }
  return true;
}
function primes(num) {
  const primeNumbs = [];
  for (let i = 1; i <= num; i++) {
    if (prime(i)) primeNumbs.push(i);
  }
  return primeNumbs;
}

function smallestCommons(arr) {
  const arrSort = arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  const numbers = [];
  for (let i = 0; i < arrSort[1] - arrSort[0] + 1; i++) {
    numbers.push(i + arrSort[0]);
  }
  console.log("--- numbers", numbers); // delete after
  const HighNumb = numbers[numbers.length - 1];
  console.log("--- HighNumb", HighNumb); // delete after
  const divisors = primes(HighNumb);
  console.log("--- divisors", divisors); // delete after

  //---
  let matrixMCM = [];
  for (let i = 0; i < numbers.length; i++) {
    let value = numbers[i];
    // console.log("--- originalValue", value); // delete after
    const rowMCM = [];
    for (let j = 0; j < divisors.length; j++) {
      let count = 0;
      // console.log("div:", divisors[j]); // delete after
      while (value % divisors[j] === 0) {
        count++;
        value = value / divisors[j];
      }
      rowMCM.push(divisors[j] ** count);
    }
    console.log("--- rowMCM", numbers[i], rowMCM); // delete after
    matrixMCM.push(rowMCM);
  }
  console.log("--- MatrixMCM", matrixMCM); // delete after
  let valMCM = 1;
  for (let i = 0; i < divisors.length; i++) {
    let maxRow = 1;
    for (let j = 0; j < matrixMCM.length; j++) {
      if (matrixMCM[j][i] > maxRow) maxRow = matrixMCM[j][i];
    }
    valMCM = valMCM * maxRow;
  }
  console.log(valMCM);
  //---

  return "*** Aquí va la solucion ***";
}

console.log(smallestCommons([23, 18]));

/*
// ****************************************************************************
// Sum All Primes
// ****************************************************************************
function prime(num) {
  if (num % 1 !== 0 || num < 2) return false;
  let divisores = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisores++;
    if (divisores > 2) return false;
  }
  return true;
}
// console.log(prime(3));
// console.log("----------");
function sumPrimes(num) {
  const primeNumbs = [];
  for (let i = 1; i <= num; i++) {
    if (prime(i)) primeNumbs.push(i);
  }
  return primeNumbs.reduce((sum, num) => sum + num, 0);
}
console.log(sumPrimes(13));

// ****************************************************************************
// Sum All Odd Fibonacci Numbers
// ****************************************************************************
function sumFibs(num) {
  const numFib = [0, 1];
  while (numFib[numFib.length - 2] + numFib[numFib.length - 1] <= num) {
    numFib.push(numFib[numFib.length - 2] + numFib[numFib.length - 1]);
  }
  return numFib.filter((el) => el % 2 !== 0).reduce((sum, el) => sum + el, 0);
}
console.log(sumFibs(1000));

// ****************************************************************************
// Convert HTML Entities
// ****************************************************************************
function convertHTML(str) {
  const strArr = str.split("");
  return strArr
    .map((el) => {
      return el === "&"
        ? "&amp;"
        : el === "<"
        ? "&lt;"
        : el === ">"
        ? "&gt;"
        : el === '"'
        ? "&quot;"
        : el === "'"
        ? "&apos;"
        : el;
    })
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));

// ****************************************************************************
// Sorted Union
// ****************************************************************************
function uniteUnique(...arr) {
  const newArr = [];
  // --- Solucion 1: Funcionando
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     if (!newArr.includes(arr[i][j])) newArr.push(arr[i][j]);
  //   }
  // }

  // --- Solucion 2:
  arr.map((el) => {
    el.map((item) => {
      if (!newArr.includes(item)) newArr.push(item);
    });
  });
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// ****************************************************************************
// Missing letters
// ****************************************************************************
function fearNotLetter(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz".slice("abcdefghijklmnopqrstuvwxyz".indexOf(str[0]));
  if (str === letters) return undefined;
  for (let i = 0; i < letters.length; i++) {
    if (!str.includes(letters[i])) return letters[i];
  }
}

console.log(fearNotLetter("abce"));

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
