"use strict";
// ****************************************************************************
//
// ****************************************************************************

/*
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
