'use strict';

function get_union(collection_a, collection_b) {
  var result = collection_a;
  for (let j = 0; j < collection_b.length; j++) {
    var dup = false;
    for (let i = 0; i < collection_a.length; i++) {
      if (collection_b[j] == collection_a[i]) {
        dup = true;
        break;
      }
    }
    if (!dup) {
      result.push(collection_b[j]);
    }
  }
  return result;
}

module.exports = get_union;

