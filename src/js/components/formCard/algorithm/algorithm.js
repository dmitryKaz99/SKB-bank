"use strict";

function algorithmMoon(cardNumbers) {
  const newCardNumbers = cardNumbers.split(" ").join(""),
    arr = [];
  let lastNumber;

  for (let i = 0; i < newCardNumbers.length; i++) {
    if (i % 2 === 0) {
      const m = parseInt(newCardNumbers[i]) * 2;
      m > 9 ? arr.push(m - 9) : arr.push(m);
    } else {
      const n = parseInt(newCardNumbers[i]);
      arr.push(n);
    }
  }

  const sum = arr.reduce((a, b) => a + b);
  sum % 10 === 0 ? (lastNumber = 0) : (lastNumber = 10 - (sum % 10));

  return lastNumber;
}

export default algorithmMoon;
