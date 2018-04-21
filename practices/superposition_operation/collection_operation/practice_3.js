'use strict';

function hybrid_operation_to_uneven(collection) {
  var result = 0;
  var new_collection = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 1) {
      new_collection.push(collection[i] * 3 + 5)
    }
  }
  for (let i = 0; i < new_collection.length; i++) {
    result += new_collection[i];
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

