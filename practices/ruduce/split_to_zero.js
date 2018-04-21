'use strict';

function split_to_zero(number, interval) {
  var result = [number];
  if (number % interval === 0) {
    for (var i = 0, len = Math.floor(number / interval); i < len; i++) {
      result.push(parseFloat((result[i] - interval).toFixed(2)))
    }
  }
  else {
    for (var i = 0, len = Math.ceil(number / interval); i < len; i++) {
      result.push(parseFloat((result[i] - interval).toFixed(2)))
    }
  }
  return result;
}

module.exports = split_to_zero;

