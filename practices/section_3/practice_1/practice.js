function create_updated_collection(collection_a, object_b) {
  for (i = 0; i < object_b.value.length; i++) {
    for (j = 0; j < collection_a.length; j++) {
      if (collection_a[j].key === object_b.value[i]) {
        collection_a[j].count--
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
