'use strict';

function average_uneven(collection) {
  var result = 0;
  var new_collection = [];
  var sum = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 1) {
      new_collection.push(collection[i]);
    }
  }
  for (let i = 0; i < new_collection.length; i++) {
    sum += new_collection[i];
  }
  result = sum / new_collection.length
  return result;
}

module.exports = average_uneven;
