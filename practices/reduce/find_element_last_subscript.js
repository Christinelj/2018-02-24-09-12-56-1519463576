'use strict';

function calculate_elements_sum(collection, element) {
  var result = 0;
  for (var i = 0; i < collection.length; i++){
    if (collection[i] === element){
      result = i;
    }
  }
  return result;
}

module.exports = calculate_elements_sum;
