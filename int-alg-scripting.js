"use strict";
// ****************************************************************************
// Map the Debris
// ****************************************************************************
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map((obj) => {
    const orbP = 2 * Math.PI * Math.sqrt((obj.avgAlt + earthRadius) ** 3 / GM);
    return { name: obj.name, orbitalPeriod: Math.round(orbP) };
  });
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);

/*
// ****************************************************************************
// Make a Person
// ****************************************************************************
const Person = function (firstAndLast) {
  let firstN, lastN;
  [firstN, lastN] = firstAndLast.split(" ");
  // Only change code below this line
  this.getFirstName = function () {
    return firstN;
  };
  this.getLastName = function () {
    return lastN;
  };
  this.getFullName = function () {
    return firstN.concat(" ").concat(lastN);
  };
  this.setFirstName = function (first) {
    firstN = first;
  };
  this.setLastName = function (last) {
    lastN = last;
  };
  this.setFullName = function (firstAndLast) {
    [firstN, lastN] = firstAndLast.split(" ");
  };
  // Complete the method below and implement the others similarly
  return firstN.concat(" ").concat(lastN);
};

const bob = new Person("Bob Ross");
bob.getFullName();

// ****************************************************************************
// Arguments Optional
// ****************************************************************************
function addTogether(...parameters) {
  const [num1, num2] = parameters;
  if (parameters.length === 1 && typeof num1 === "number") {
    return (value) => {
      if (typeof value === "number") {
        return num1 + value;
      }
    };
  }
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
}

addTogether(2, 3);

// ****************************************************************************
// Everything Be True
// ****************************************************************************
function truthCheck(collection, pre) {
  const falsyVals = [0, NaN, "", false, null, undefined];
  for (let i = 0; i < collection.length; i++) {
    if (falsyVals.includes(collection[i][pre])) {
      return false;
    }
  }
  return true;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);

// ****************************************************************************
// Binary Agents
// ****************************************************************************
function binaryAgent(str) {
  const decode = str
    .split(" ")
    .map((char) => String.fromCharCode(parseInt(char, 2)))
    .join("");
  return decode;
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

// ****************************************************************************
// Steamroller
// ****************************************************************************
function steamrollArray(arr) {
const newArr = [].concat(...arr);
return newArr.some(Array.isArray)
  ? steamrollArray(newArr)
  : newArr
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

// ****************************************************************************
// Drop it
// ****************************************************************************
function dropElements(arr, func) {
  let limit;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      limit = i;
      break;
    }
  }
  return limit === undefined ? [] : arr.slice(limit);
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);

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
  // console.log("--- numbers", numbers); // delete later
  const HighNumb = numbers[numbers.length - 1];
  // console.log("--- HighNumb", HighNumb); // delete later
  const divisors = primes(HighNumb);
  // console.log("--- divisors", divisors); // delete later

  //---
  let matrixMCM = [];
  for (let i = 0; i < numbers.length; i++) {
    let value = numbers[i];
    // console.log("--- originalValue", value); // delete later
    const rowMCM = [];
    for (let j = 0; j < divisors.length; j++) {
      let count = 0;
      // console.log("div:", divisors[j]); // delete later
      while (value % divisors[j] === 0) {
        count++;
        value = value / divisors[j];
      }
      rowMCM.push(divisors[j] ** count);
    }
    // console.log("--- rowMCM", numbers[i], rowMCM); // delete later
    matrixMCM.push(rowMCM);
  }
  // console.log("--- MatrixMCM", matrixMCM); // delete later
  let valMCM = 1;
  for (let i = 0; i < divisors.length; i++) {
    let maxRow = 1;
    for (let j = 0; j < matrixMCM.length; j++) {
      if (matrixMCM[j][i] > maxRow) maxRow = matrixMCM[j][i];
    }
    valMCM = valMCM * maxRow;
  }
  // console.log(valMCM); // delete later
  //---

  return valMCM;
}

console.log(smallestCommons([23, 18]));

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
