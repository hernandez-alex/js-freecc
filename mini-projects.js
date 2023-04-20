"use strict";
// ****************************************************************************
// Caja registradora
// ****************************************************************************
function checkCashRegister(price, cash, cid) {
  const currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 15,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  let change = [];
  let changeReq = cash - price;
  let changeAva = Math.round(100 * cid.reduce((sum, el) => sum + el[1], 0)) / 100;

  console.log("----- Requerido", changeReq, "Disponible", changeAva);

  if (changeAva < cash - price) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    // console.log("CR", changeReq);
    // console.log("CID", cid[i][1]);
    if (changeReq >= currency[cid[i][0]]) {
      console.log(cid[i][0], "-", changeReq, ">=", currency[cid[i][0]]);
    }
  }
  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

/*
// ****************************************************************************
// Telephone Number Validator
// ****************************************************************************
function telephoneCheck(str) {
  return /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/.test(str);
}

telephoneCheck("555-555-5555");

// ****************************************************************************
// Caesars Cipher
// ****************************************************************************
function rot13(str) {
  const strArr = str.toUpperCase().split("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipherArr = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
  return strArr.map((l, i) => (/[A-Z]/.test(l) ? letters[cipherArr.indexOf(l)] : l)).join("");
}

console.log(rot13("SERR PBQR PNZC"));

// ****************************************************************************
// Roman Numeral Converter
// ****************************************************************************
function convertToRoman(num) {
  const romDec = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let newNum = num;
  let romanNum = "";

  for (let i = 0; i < romDec.length; i++) {
    if (newNum >= romDec[i][1]) {
      romanNum = romanNum.concat(romDec[i][0].repeat(Math.floor(newNum / romDec[i][1])));
      newNum = newNum % romDec[i][1];
    }
  }
  return romanNum;
}
console.log("500", convertToRoman(500));
console.log("501", convertToRoman(501));
console.log("649", convertToRoman(649));
console.log("798", convertToRoman(798));
console.log("891", convertToRoman(891));

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
