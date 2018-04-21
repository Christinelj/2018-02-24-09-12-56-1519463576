function create_updated_collection(collection_a, object_b) {
  var result = [];
  var arr = [];
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i].length > 1) {
      var splited = collection_a[i].split('-');
      collection_a[i] = splited[0];
      arr[collection_a[i]] = {};
      arr[collection_a[i]].key = collection_a[i];
      arr[collection_a[i]].count = splited[1] - 1;

    }
    if (!arr[collection_a[i]]) {
      arr[collection_a[i]] = {};
      arr[collection_a[i]].key = collection_a[i];
      arr[collection_a[i]].count = 1;
    } else {
      arr[collection_a[i]].count++;
    }
  }
  for (var i in arr) {
    result.push(arr[i]);
  }
  
  for (var i = 0; i < object_b.value.length; i++) {
    for (var j = 0; j < result.length; j++) {
      if (result[j].key === object_b.value[i]) {
        result[j].count -= parseInt((result[j].count / 3))
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
