'use strict';

function compute_chain_median(collection) {
  var result = 0;
  var desc = [];
  desc = collection.split('->').sort(function (a, b) {
    return a - b;
  })

  if (desc.length % 2 === 0) {
    var lowMiddle = desc[desc.length / 2 - 1];
    var highMiddle = desc[desc.length / 2];
    result = (Number(lowMiddle) + Number(highMiddle)) / 2;
  }
  else {
    var Middle = desc[Math.floor(desc.length / 2)];
    result = Number(Middle);
  }

  return result;
}

module.exports = compute_chain_median;
