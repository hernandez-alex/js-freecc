"use strict";
// ****************************************************************************
// Write Concise Object Literal Declarations Using Object Property Shorthand
// ****************************************************************************

/*
// ****************************************************************************
// Write Concise Declarative Functions with ES6
// ****************************************************************************
// Cambia solo el código debajo de esta línea
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Cambia solo el código encima de esta línea
bicycle.setGear(3);
console.log(bicycle.gear);

// ****************************************************************************
// Write Concise Object Literal Declarations Using Object Property Shorthand
// ****************************************************************************
const createPerson = (name, age, gender) => {
  // Cambia solo el código debajo de esta línea
  return {
    name,
    age,
    gender
  };
  // Cambia solo el código encima de esta línea
};

// ****************************************************************************
// Crea cadenas usando plantillas literales
// ****************************************************************************
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Cambia solo el código debajo de esta línea
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Cambia solo el código encima de esta línea
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

// ****************************************************************************
// Utiliza desestructuración para pasar un objeto como parámetro de función
// ****************************************************************************
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;
// Cambia solo el código encima de esta línea
console.log(half(stats));

// ****************************************************************************
// Destructuring via rest elements
// ****************************************************************************
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);

// ****************************************************************************
// Use Destructuring Assignment to Assign Variables from Arrays
// ****************************************************************************
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

// ****************************************************************************
// Use Destructuring Assignment to Extract Values from Objects
// ****************************************************************************
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
// Only change code above this line

// ****************************************************************************
// Use Destructuring Assignment to Extract Values from Objects
// ****************************************************************************
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow);
// Only change code above this line

// ****************************************************************************
// Use Destructuring Assignment to Extract Values from Objects
// ****************************************************************************
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today, tomorrow);
// Only change code above this line

// ****************************************************************************
// Use the Spread Operator to Evaluate Arrays In-Place
// ****************************************************************************
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

// ****************************************************************************
// Use the Rest Parameter with Function Parameters
// ****************************************************************************
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i + 1 <= args.length; i++) {
    console.log(args[i]);
    total += +args[i];
  }
  return total;
};
const sum2 = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
console.log(sum(2, 4, 8, 16));
console.log(sum2(2, 4, 8));

// ****************************************************************************
// Set Default Parameters for Your Functions
// ****************************************************************************
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
console.log(increment(9));

// ****************************************************************************
// Write Arrow Functions with Parameters
// ****************************************************************************
//var myConcat = function(arr1, arr2) {
//  return arr1.concat(arr2);
//};
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// ****************************************************************************
// Use Arrow Functions to Write Concise Anonymous Functions
// ****************************************************************************
//var magic = function() {
//  return new Date();
//};

const magic = () => new Date();
console.log(magic());

// ****************************************************************************
// Mutate an Array Declared with const
// ****************************************************************************
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// ****************************************************************************
// Mutate an Array Declared with const
// ****************************************************************************
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid
  console.log(s);
  // Only change code above this line
}
editInPlace();

// ****************************************************************************
// Compare Scopes of the var and let Keywords
// ****************************************************************************
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();

// ****************************************************************************
// Use Recursion to Create a Range of Numbers
// ****************************************************************************
function rangeOfNumbers(startNum, endNum) {
  // if (endNum < startNum) {
  //   return [];
  // } else {
  //   const numbers = rangeOfNumbers(startNum, endNum - 1);
  //   numbers.push(endNum);
  //   return numbers;
  // }
  if (endNum < startNum) return [];
  const numbers = rangeOfNumbers(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}
console.log(rangeOfNumbers(4, 9));
console.log(`Alex que mariquera, estas aprendiendo`);

// ****************************************************************************
// Utiliza recursión para crear una cuenta regresiva
// ****************************************************************************

// Cambia solo el código debajo de esta línea
function countdown(n) {
  if (n < 1) return [];
  const countArray = countdown(n - 1);
  countArray.unshift(n);
  return countArray;
}
console.log(countdown(10));
// Cambia solo el código encima de esta línea

// ****************************************************************************
// Usa múltiples operadores condicionales (ternarios)
// ****************************************************************************
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-10));

// ****************************************************************************
// Usa el operador condicional (ternario)
// ****************************************************************************
function checkEqual(a, b) {
  return (a === b) ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

// ****************************************************************************
// Utiliza la función "parseInt" con Radix (Base)
// ****************************************************************************
function convertToInteger(str) {
  return parseInt(str, 2);
}
console.log(`convertToInteger("10011"): `, convertToInteger("10011"));

function convertNumToAnyBase(num, base) {
  return num.toString(base);
}
console.log(`convertNumToAnyBase(243,16):`, convertNumToAnyBase(243, 16));

// ****************************************************************************
// Generate Random Whole Numbers within a Range
// ****************************************************************************
function randomRange(myMin, myMax) {
  // Only change code below this line
  return myMin + Math.floor(Math.random() * (myMax - myMin + 1));
  // Only change code above this line
}
console.log(randomRange(20, 22));

// ****************************************************************************
// Profile Lookup
// ****************************************************************************

// Tenemos un arreglo de objetos que representan a diferentes personas en nuestras listas de contactos.

// Una función lookUpProfile que recibe nombre (name) y una propiedad (prop) como argumentos preescritos para ti.

// La función debe verificar si el nombre (name) es el nombre de pila del contacto (firstName) y la propiedad (prop) dada es una propiedad de ese contacto.

// Si ambos son verdaderos, entonces devolver el "valor" de esa propiedad.

// Si name no corresponde a ningún contacto, entonces devuelve la cadena No such contact.

// Si prop no corresponde a ninguna propiedad válida de un contacto encontrado que coincida con name entonces devuelve la cadena No such property.

// Configuración
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Cambia solo el código debajo de esta línea
  for (let contact = 0; contact <= contacts.length - 1; contact++) {
    if (name === contacts[contact].firstName) {
      if (contacts[contact].hasOwnProperty(prop)) {
        return contacts[contact][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Cambia solo el código encima de esta línea
}
console.log(`---- console.log(lookUpProfile("Akira", "likes"));`);
console.log(lookUpProfile("Akira", "likes"));

console.log(`---- console.log(lookUpProfile("Bob", "number"));`);
console.log(lookUpProfile("Bob", "number"));

console.log(`---- console.log(lookUpProfile("Bob", "potato"));`);
console.log(lookUpProfile("Bob", "potato"));

console.log(`---- console.log(lookUpProfile("Akira", "address"));`);
console.log(lookUpProfile("Akira", "address"));

console.log(`---- lookUpProfile("Kristian", "lastName");`);
console.log(lookUpProfile("Kristian", "lastName"));

// ****************************************************************************
// Reemplaza bucles usando recursión
// ****************************************************************************
// Escribe una función recursiva, sum(arr, n), que devuelve la suma de los primeros elementos n de un arreglo arr.
// Setup
const arr = [1, 2, 3, 4, 5];
let sumFor = 0;
function arrFor(arr, n) {
  for (let i = 0; i < n; i++) {
    sumFor += arr[i];
  }
  return sumFor;
}
// Only change code below this line
function sum(arr, n) {
  // Cambia solo el código debajo de esta línea
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Cambia solo el código encima de esta línea
}
// Pruebas
console.log(arrFor(arr, 3));
console.log(sum(arr, 2));

// ----------------------------------------------------------------------------
// Iterate with JavaScript Do...While Loops
// ----------------------------------------------------------------------------
// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 10);
console.log(myArray);

// ----------------------------------------------------------------------------
// Nesting For Loops
// ----------------------------------------------------------------------------
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  console.log(product);
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// ----------------------------------------------------------------------------
// Iterate Through an Array with a For Loop
// ----------------------------------------------------------------------------
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 1; i <= myArr.length; i++) {
  total += myArr[i - 1];
}
// Only change code below this line
console.log(myArr, total);

// ----------------------------------------------------------------------------
// Count Backwards With a For Loop
// ----------------------------------------------------------------------------
// Setup
// Push the odd numbers from 9 through 1 to myArray using a for loop.
const myArray = [];
for (let i = 10; i > 0; i--) {
  if (i % 2 !== 0) {
    myArray.push(i);
  }
}
// Only change code below this line
console.log(myArray);

// ----------------------------------------------------------------------------
// Iterate Odd Numbers With a For Loop
// ----------------------------------------------------------------------------
// Setup
// Push the odd numbers from 1 through 9 to myArray using a for loop.
const myArray = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    myArray.push(i);
  }
}
// Only change code below this line
console.log(myArray);

// ----------------------------------------------------------------------------
// For Loops
// ----------------------------------------------------------------------------
// Setup
// Use a for loop to push the values 1 through 5 onto myArray.
const myArray = [];
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}
// Only change code below this line
console.log(myArray);

// ----------------------------------------------------------------------------
// While Loops
// ----------------------------------------------------------------------------
// Setup
// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
const myArray = [];

let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// Only change code below this line
console.log(myArray);

// ----------------------------------------------------------------------------
// Music Library 
// ----------------------------------------------------------------------------
// Configuración
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};
// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
  if (value === "") {
    console.log(`IF 1 - ${id} ---------------------------------------------------`);
    // Si value es una cadena vacía, elimina la propiedad prop dada del álbum.
    delete records[id][prop];
    // Fin
  } else if (prop !== "tracks" && value !== "") {
    console.log(`IF 2 - ${id} ---------------------------------------------------`);
    // Si prop no es "tracks" y value no esta vacía, asigna el value a la prop de ese álbum.
    records[id][prop] = value;
    // Fin
  } else if (prop === "tracks" && value !== "") {
    // Si prop es "tracks" y value no es una cadena vacía, añade el value al final del arreglo "tracks" existente del álbum
    if (!records[id].hasOwnProperty(prop)) {
      console.log(`IF 4 - ${id} ---------------------------------------------------`);
      // Si el álbum no tiene una propiedad "tracks", crea un nuevo arreglo para la propiedad "tracks" del álbum antes de añadirle el value
      console.log(`no tenia el array y lo cree`);
      records[id].tracks = [];
      // Fin
    }
    console.log(`IF 3 - ${id} ---------------------------------------------------`);
    records[id][prop].push(value);
    // Fin
  }

  console.log(records[id]);
  return records;
}

// console.log(`--------------- IF-1 Prueba`);
// updateRecords(recordCollection, 2548, "artist", "");

// console.log(`--------------- IF-2 Prueba`);
// updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

console.log(`--------------- IF-3 Prueba`);
updateRecords(recordCollection, 2468, "tracks", "Free");

// console.log(`--------------- IF-4 Prueba`);
// updateRecords(recordCollection, 5439, "tracks", "alex");

// console.log(`--------------- IF-58888 Prueba`);
// updateRecords(recordCollection, 5439, "artist", "ABBA");


*/
