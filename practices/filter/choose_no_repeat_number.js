'use strict';

function choose_no_repeat_number(collection) {
  var result = [collection[0]];
  for (var i = 0; i < collection.length; i++) {
    var dup = false;
    for (var j = 0; j < result.length; j++) {
      if (collection[i] === result[j]) {
        dup = true;
        break;
      }
    }
    if (!dup) {
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
