'use strict';
function rank_by_two_large_one_small(collection) {
  var result = [];
  collection.sort(function (a, b) {
    return a - b;
  })

  function compare(collection1) {
    var group = [];
    collection1.sort(function (a, b) {
      return a - b;
    })
    if (collection1.length === 3) {
      group.push(collection1[1]);
      group.push(collection1[2]);
      group.push(collection1[0]);
    }
    if (collection1.length === 2) {
      group.push(collection1[0]);
      group.push(collection1[1]);
    }
    if (collection1.length === 1) {
      group.push(collection1[0]);
    }
    return group;
  }

  for (let i = 0; i < collection.length; i += 3) {
    result.push(collection.slice(i, i + 3));
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = compare(result[i]);
  }
  result = [].concat.apply([], result);
  return result;
}
module.exports = rank_by_two_large_one_small;
