function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    for (var m = 0; m < collection_b.length; m++) {
      for (var n = 0; n < collection_b[m].length; n++) {
        if (collection_a[i] === collection_b[m][n]) {
          result.push(collection_a[i]);
        }
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
