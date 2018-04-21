'use strict';

function median_to_letter(collection) {
  var result = '';
  var middle = 0;
  if (collection.length % 2 === 0) {
    var lowmiddle = collection[collection.length / 2 - 1];
    var highmiddle = collection[collection.length / 2];
    middle = Math.ceil((highmiddle + lowmiddle) / 2)
  }
  if (collection.length % 2 === 1) {
    middle = Math.floor(collection[collection.length / 2]);
  }
  function inflect(number) {
    var str1 = String.fromCharCode(0x60 + Math.floor(number / 26) );
    var str2 = String.fromCharCode(0x60 + number - 26);
    var str3 = str1 + str2;
    return str3;

  }
  result = inflect(middle);
  return result;
}

module.exports = median_to_letter;
