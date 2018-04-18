'use strict';

function collect_min_number(collection) {
  var result = collection[0];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] < collection[0]) {
      result = collection[i];
    }
  }
  /*collection.sort(function (a, b) {
   return a - b;
 })
 var result = collection[0];*/
  return result;
}

module.exports = collect_min_number;

