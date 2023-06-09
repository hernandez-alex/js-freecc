"use strict";
// ****************************************************************************
// Caja registradora
// ****************************************************************************
function checkCashRegister(price, cash, cid) {
  const round2Dec = (num) => {
    return Math.round(num * 100) / 100;
  };

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
  let changeReq = round2Dec(cash - price);
  let changeAva = round2Dec(cid.reduce((sum, el) => sum + el[1], 0));

  if (changeAva < cash - price) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeAva === cash - price) {
    return { status: "CLOSED", change: cid };
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    let cidItNam = cid[i][0];
    let cidItDis = cid[i][1];
    let curVal = currency[cidItNam];

    if (changeReq >= curVal) {
      let pushing = changeReq > cidItDis ? cidItDis : round2Dec(changeReq - (changeReq % curVal));
      change.push([cidItNam, pushing]);
      changeReq = round2Dec(changeReq - pushing);
    }
  }

  if (changeReq === 0) {
    return { status: "OPEN", change: change };
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

console.log(
  checkCashRegister(5.6, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

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
