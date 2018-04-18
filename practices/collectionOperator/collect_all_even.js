'use strict';

function collect_all_even(collection) {
  var result = []
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      console.log(collection[i])
      result.push(collection[i])
    }
  }
  return result
}
var collection_a = [1, 2, 3, 4, 5];
collect_all_even(collection_a)
module.exports = collect_all_even;
