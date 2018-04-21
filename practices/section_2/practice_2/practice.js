function count_same_elements(collection) {
  var result = [];
  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length > 1) {
      var splited = collection[i].split('-');
      collection[i] = splited[0];
      arr[collection[i]] = {};
      arr[collection[i]].key = collection[i];
      arr[collection[i]].count = splited[1] - 1;

    }
    if (!arr[collection[i]]) {
      arr[collection[i]] = {};
      arr[collection[i]].key = collection[i];
      arr[collection[i]].count = 1;
    } else {
      arr[collection[i]].count++;
    }
  }
  for (var i in arr) {
    result.push(arr[i]);
  }
  return result;
}

module.exports = count_same_elements;
