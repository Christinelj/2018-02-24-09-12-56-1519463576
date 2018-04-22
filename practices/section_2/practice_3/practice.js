function count_same_elements(collection) {
    var result = [];
    var arr = [];

    for (var i = 0; i < collection.length; i++) {
      if (!(collection[i].indexOf("[") === -1)) {
        var first_splite = []; var second_splite = []; var number = 0;
        first_splite = collection[i].split("[");
        second_splite = first_splite[1].replace("]", '');
        collection[i] = first_splite[0];
        number = parseInt(second_splite);
        if (!arr[collection[i]]) {
          arr[collection[i]] = {};
          arr[collection[i]].name = collection[i];
          arr[collection[i]].summary = number - 1;
        } else {
          arr[collection[i]].summary = arr[collection[i]].summary + number -1;
        }
      }
      if (!(collection[i].indexOf("-") === -1)) {
        var symbol_hyphen_splite = []; var number = 0;
        symbol_hyphen_splite = collection[i].split("-");
        collection[i] = symbol_hyphen_splite[0];
        number = parseInt(symbol_hyphen_splite[1]) - 1;
        if (!arr[collection[i]]) {
          arr[collection[i]] = {};
          arr[collection[i]].name = collection[i];
          arr[collection[i]].summary = number;
        } else {
          arr[collection[i]].summary = arr[collection[i]].summary + number
        }
      }
      if (!(collection[i].indexOf(":") === -1)) {
        var symbol_colon_splite = []; var number = 0;
        symbol_colon_splite = collection[i].split(":");
        collection[i] = symbol_colon_splite[0];
        number = parseInt(symbol_colon_splite[1]);
        if (!arr[collection[i]]) {
          arr[collection[i]] = {};
          arr[collection[i]].name = collection[i];
          arr[collection[i]].summary = number;
        } else {
          arr[collection[i]].summary = arr[collection[i]].summary + number
        }
      }
      else {
        if (!arr[collection[i]]) {
          arr[collection[i]] = {};
          arr[collection[i]].name = collection[i];
          arr[collection[i]].summary = 1;
        } else {
          arr[collection[i]].summary++
        }
      }
    }

    for (var i in arr) {
      result.push(arr[i])
    }
    return result;
  }

module.exports = count_same_elements;
