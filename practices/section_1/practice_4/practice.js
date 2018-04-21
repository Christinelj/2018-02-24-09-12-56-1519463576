function collect_same_elements(collection_a, object_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (collection_a[i].key === object_b.value[j]) {
        result.push(collection_a[i].key);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
