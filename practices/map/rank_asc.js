'use strict';
var rank_asc = function (collection) {
  /*collection.sort(function (a, b) {
    return b - a
  })
  return collection;*/

  for (var i = 0; i < collection.length; i++) {
    for (var j = i + 1; j < collection.length; j++) {
      var p;
      if (collection[i] < collection[j]) {
        p = collection[i];
        collection[i] = collection[j];
        collection[j] = p;
      }
    }
  }
  return collection;


};

module.exports = rank_asc;
