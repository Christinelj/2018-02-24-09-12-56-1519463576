'use strict';

function double_to_one(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if (typeof collection[i] === 'object') {// 数组元素是数组  
      for (var j = 0; j < collection[i].length; j++) {
        result.push(collection[i][j]);
      }
    } else {// 数组元素不是数组  
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = double_to_one;
