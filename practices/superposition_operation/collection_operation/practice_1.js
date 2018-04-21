'use strict';

function hybrid_operation(collection) {
  var result = 0;
  for (let i = 0; i < collection.length; i++) {
    collection[i] = collection[i] * 3 + 2;
  }
  for (let i = 0; i < collection.length; i++) {
    result += collection[i];
  }
  return result;
}
module.exports = hybrid_operation;

