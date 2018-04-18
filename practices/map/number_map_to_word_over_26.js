'use strict';
var number_map_to_word_over_26 = function (collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] > 26) {
      var m = collection[i] / 26;
      var n = collection[i] % 26;
      var str1 = String.fromCharCode(0x60 + m);
      var str2 = String.fromCharCode(0x60 + n);
      collection[i] = str1 + str2;
      result.push(collection[i]);
    } else {
      result.push(String.fromCharCode(0x60 + collection[i]))
    }
  }
  return result;
};

module.exports = number_map_to_word_over_26;
