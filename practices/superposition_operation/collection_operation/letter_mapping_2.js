'use strict';

function average_to_letter(collection) {
  var result = [];
  var sum = 0;
  for (let i = 0; i < collection.length; i++) {
    sum = sum + collection[i];
  }
  var ave = Math.ceil(sum / collection.length);
  result = String.fromCharCode(0x60 + ave);
  return result;
}

module.exports = average_to_letter;

