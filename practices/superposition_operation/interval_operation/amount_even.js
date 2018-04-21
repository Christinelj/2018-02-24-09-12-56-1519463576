'use strict';

function amount_even(collection) {
  var result = 0;
  var new_collection = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      new_collection.push(collection[i]);
    }
  }
  for (let i = 0; i < new_collection.length; i++) {
    result += new_collection[i];
  }
  return result;
}

module.exports = amount_even;
