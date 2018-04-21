function create_updated_collection(collection_a, object_b) {
  for (var i = 0; i < object_b.value.length; i++) {
    for (var j = 0; j < collection_a.length; j++) {
      if (collection_a[j].key === object_b.value[i]) {
        
        collection_a[j].count -= parseInt((collection_a[j].count /3))
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
