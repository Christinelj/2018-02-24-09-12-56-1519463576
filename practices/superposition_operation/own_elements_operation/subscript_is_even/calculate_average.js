'use strict';
var calculate_average = function (collection) {
    var result = 0;
    var new_collection = [];
    for (let i = 0; i < collection.length; i++) {
        if ((i + 1) % 2 === 0) {
            new_collection.push(collection[i]);
        }
    }
    var sum = 0;
    for (let j = 0; j < new_collection.length; j++) {
        sum += new_collection[j];
    }
    result = sum / new_collection.length;
    return result;

};
module.exports = calculate_average;
