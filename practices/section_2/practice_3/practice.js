function count_same_elements(collection) {
  var result = [];
  var arr = [];

  function split_bracket(collection1) {
    var arr2 = [];
    for (var i = 0; i < collection1.length; i++) {
      if (collection1[i].indexOf("[")) {
        var splited = collection1[i].split("[");
        splited[1] = splited[1].split("]");
        collection1[i] = splited[0];
        arr2[collection1[i]] = {};
        arr2[collection1[i]].key = collection1[i];
        arr2[collection1[i]].count = splited[1][0] - 1;
      }
    }
    return arr2;
  }
  var splite1 = [];
  for (var i = 0; i < collection.length; i++) {
    splite1 = collection[i].split(/-|:|,/);
    collection[i] = split1[0];
    arr[collection[i]] = {};
    arr[collection[i]].key = collection[i];
    arr[collection[i]].count = split1[1] - 1;
  }

  arr = split_bracket(arr);

  if (!arr[collection[i]]) {
    arr[collection[i]] = {};
    arr[collection[i]].key = collection[i];
    arr[collection[i]].count = 1;
  } else {
    arr[collection[i]].count++;
  }

  for (var i in arr) {
    result.push(arr[i]);
  }
  return result;
}

module.exports = count_same_elements;
