"use strict";

function Converter(number) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


  if (!Number.isInteger(number)) {
    throw new Error(number + " is not integer, Please enter an integer number value");
  }
  if (!Number.isInteger(digit)) {
    throw new Error(digit + " is not integer, Please enter an integer digit value");
  }

  var isNegative = number < 0 ? "-" : "";
  digit = digit < 0 ? 0 : digit;
  number = Math.abs(number);

  if (number === 0) {
    return 0;
  }

  if (number < 1000) {
    return number;
  }

  var abbrv = ["k", "m", "b", "t", "p", "e", "z", "y"];
  var power = parseInt(Math.log10(number) / 3, 10);

  if ((number / Math.pow(1000, power)).toFixed(digit).slice(-1) === "0") {
    return isNegative + (number / Math.pow(1000, power)).toFixed(digit - 1) + abbrv[power - 1];
  }

  return isNegative + (number / Math.pow(1000, power)).toFixed(digit) + abbrv[power - 1];
}

module.exports = { Converter: Converter };
