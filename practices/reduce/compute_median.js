'use strict';

function compute_median(collection) {
  var result = 0;
  var desc = [];
  desc = collection.sort(function (a, b) {
    return a - b;
  })

  /*if (desc.length % 2 === 0) {
    var lowMiddle = desc[desc.length / 2 - 1];
    var highMiddle = desc[desc.length / 2];
    result = (Number(lowMiddle) + Number(highMiddle)) / 2;
  } else {
    var Middle = desc[Math.floor(desc.length / 2)];
    result = Number(Middle);
  }*/
  var lowMiddle = Math.floor((desc.length - 1) / 2);   //一律舍去，仅保留整数
  var highMiddle = Math.ceil((desc.length - 1) / 2);   //将小数部分一律向整数部分进位
  result = (Number(desc[lowMiddle]) + Number(desc[highMiddle])) / 2;


return result;
}

module.exports = compute_median;


