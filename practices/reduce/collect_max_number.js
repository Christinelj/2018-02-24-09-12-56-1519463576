'use strict';

function collect_max_number(collection) {
var result = collection[0];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] > collection[0]) {
      result = collection[i];
    }
  }


  /*collection.sort(function(a, b){
    return b - a 
  })
  var result = collection[0]*/
  
  return result;
}

module.exports = collect_max_number;
