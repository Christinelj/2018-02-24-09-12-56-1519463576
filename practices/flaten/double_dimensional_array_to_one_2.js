'use strict';

function double_to_one(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if (typeof collection[i] === 'object') {
      for (var j = 0; j < collection[i].length; j++) {
        result.push(collection[i][j]);
      }
    } else {
      result.push(collection[i]);
    }
  }

  var result2 = [];
  for (var i = 0; i < result.length; i++) {
    for (var j = i + 1; j < result.length; j++) {
      if (result[i] === result[j]) {
        result.splice(j, 1);
        result.length--;
        j--;
      }
    }
  }
  return result;
}

module.exports = double_to_one;
