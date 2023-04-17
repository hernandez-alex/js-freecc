"use strict";
// ****************************************************************************
// Wherefore art thou
// ****************************************************************************
/*

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
